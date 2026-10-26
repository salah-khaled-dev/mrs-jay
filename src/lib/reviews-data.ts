import { Review } from "@/types/review";

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Sarah Montgomery",
    rating: 5,
    service: "Events & Celebrations",
    comment:
      "Divine & Delight catered our private garden anniversary celebration for 45 guests. The display was breathtaking, and the roasted herb lamb chops and canapés received endless compliments. Truly elevated culinary craft!",
    image: "/images/meals/catering-event.webp",
    date: "2026-03-12",
    approved: true,
  },
  {
    id: "rev-2",
    name: "Marcus Vance",
    rating: 5,
    service: "Corporate Hospitality",
    comment:
      "We booked executive lunch catering for our quarterly board retreat. Prompt delivery, elegant presentation, and delicious gourmet options accommodated all dietary requests with ease.",
    date: "2026-03-04",
    approved: true,
  },
  {
    id: "rev-3",
    name: "Elena Rostova",
    rating: 5,
    service: "Artisanal Desserts",
    comment:
      "The handcrafted pistachio choux and mini dessert shooter cups stole the entire show at my bridal shower! Not only visually stunning, but the flavors were delicate and not overly sweet. Perfection.",
    date: "2026-02-28",
    approved: true,
  },
  {
    id: "rev-4",
    name: "David K.",
    rating: 5,
    service: "Weekly Meal Prep",
    comment:
      "Consistent, fresh, and chef-level meals every week. It has saved me countless hours while keeping my nutrition on point. The lemon herb salmon and chimichurri steak bowls are weekly staples.",
    image: "/images/meals/chicken-kabobs.webp",
    date: "2026-02-18",
    approved: true,
  },
  {
    id: "rev-5",
    name: "Nadine & Tarek H.",
    rating: 5,
    service: "Events & Celebrations",
    comment:
      "Every detail from consultation to execution was seamless. The grazing table setup was like a work of art. Our guests are still asking who catered the event!",
    date: "2026-02-05",
    approved: true,
  },
  {
    id: "rev-6",
    name: "Dr. Rachel Sterling",
    rating: 4,
    service: "Weekly Meal Prep",
    comment:
      "Incredible quality of ingredients and balanced portions. The packaging is eco-friendly and keeps everything fresh. Highly recommend for busy professionals looking for healthy gourmet food.",
    date: "2026-01-26",
    approved: true,
  },
];
