"use client";

import * as React from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: "light",
  resolvedTheme: "light",
  setTheme: () => {},
});

export interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: ThemeMode;
  enableSystem?: boolean;
  storageKey?: string;
  disableTransitionOnChange?: boolean;
}

const themeListeners = new Set<() => void>();

function notifyThemeListeners() {
  themeListeners.forEach((listener) => listener());
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "divine-delight-theme-mode",
}: ThemeProviderProps) {
  const subscribe = React.useCallback((callback: () => void) => {
    themeListeners.add(callback);
    const onStorage = (e: StorageEvent) => {
      if (e.key === storageKey) callback();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      themeListeners.delete(callback);
      window.removeEventListener("storage", onStorage);
    };
  }, [storageKey]);

  const getSnapshot = React.useCallback((): ThemeMode => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved === "dark" || saved === "light") {
        return saved;
      }
    } catch {
      // Ignore storage access errors
    }
    return defaultTheme;
  }, [storageKey, defaultTheme]);

  const getServerSnapshot = React.useCallback((): ThemeMode => {
    return defaultTheme;
  }, [defaultTheme]);

  const theme = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
  }, [theme]);

  const setTheme = React.useCallback(
    (nextTheme: ThemeMode) => {
      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch {
        // Ignore storage errors
      }
      if (typeof document !== "undefined") {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(nextTheme);
        root.style.colorScheme = nextTheme;
      }
      notifyThemeListeners();
    },
    [storageKey]
  );

  const contextValue = React.useMemo(
    () => ({
      theme,
      resolvedTheme: theme,
      setTheme,
    }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
