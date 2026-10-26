/**
 * Client-side image compressor utility
 * Compresses any user-uploaded photo (even 10MB+) down to ~40-70 KB in browser memory
 * using HTML5 Canvas, ensuring the website stays lightning fast!
 */
export interface CompressionResult {
  base64: string;
  sizeKb: number;
  originalSizeKb: number;
}

export function compressImage(
  file: File,
  maxDimension = 800,
  quality = 0.72
): Promise<CompressionResult> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("Selected file is not an image."));
      return;
    }

    const originalSizeKb = Math.round(file.size / 1024);
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Calculate aspect ratio resizing
        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Unable to create canvas context."));
          return;
        }

        // Draw image smoothly
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, width, height);

        // Export as JPEG with controlled quality
        const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
        const approxSizeKb = Math.round((compressedBase64.length * 3) / 4 / 1024);

        resolve({
          base64: compressedBase64,
          sizeKb: approxSizeKb,
          originalSizeKb,
        });
      };

      img.onerror = () => {
        reject(new Error("Failed to load image for compression."));
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = () => {
      reject(new Error("Failed to read image file."));
    };

    reader.readAsDataURL(file);
  });
}
