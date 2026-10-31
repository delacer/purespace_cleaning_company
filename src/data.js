import living from "./assets/living.png";
import interior from "./assets/interior.png";
import bathroom from "./assets/bathroom.png";
import kitchen from "./assets/kitchen.png";

export const company = {
  name: "PureSpace Cleaning Company",
  phone: "+27 63 653 4255",
  email: "Cleaningcompanypurespace@gmail.com",
  location: "Milnerton, Cape Town",
  address: "25 Venus Ave, Milnerton, Cape Town, 7441",
  whatsapp: "27636534255",
  workingHours: "Monday – Saturday",
  openingTime: "8:00 AM – 5:00 PM",
  closedDays: "Sunday",
};

export const services = [
  {
    title: "Home Cleaning",
    description:
      "A thoughtful top-to-bottom refresh for the spaces you live in every day.",
    items: [
      "Regular weekly or fortnightly visits",
      "Kitchen and bathroom detailing",
      "Dusting, floors and finishing touches",
    ],
  },
  {
    title: "Office & Commercial",
    description:
      "A clean, welcoming workplace for your team and customers.",
    items: [
      "Workstations and shared areas",
      "Restrooms and kitchenettes",
      "Flexible cleaning schedules",
    ],
  },
  {
    title: "Move-in / Move-out",
    description:
      "A detailed clean to help you hand over or settle into a space.",
    items: [
      "Inside cupboards and surfaces",
      "Appliance and bathroom detailing",
      "Final room-by-room checks",
    ],
  },
  {
    title: "Deep Cleaning",
    description:
      "Extra attention for the places that need more than a routine clean.",
    items: [
      "Built-up dust and grime",
      "High-touch surfaces",
      "Custom cleaning checklist",
    ],
  },
  {
    title: "Upholstery Care",
    description:
      "Refresh fabric furnishings and help your favourite pieces look their best.",
    items: [
      "Sofas and chairs",
      "Fabric-aware treatment",
      "Careful finishing",
    ],
  },
  {
    title: "Custom Cleaning Plans",
    description:
      "A practical cleaning schedule built around your property and priorities.",
    items: [
      "One-off or recurring service",
      "Residential and business spaces",
      "A scope tailored to your needs",
    ],
  },
];

export const galleryImages = [
  {
    url: living,
    caption: "A fresh, carefully finished living space",
  },
  {
    url: kitchen,
    caption: "Kitchen surfaces cleaned and polished",
  },
  {
    url: bathroom,
    caption: "Bathroom detailing",
  },
  {
    url: interior,
    caption: "A bright, welcoming interior",
  },
];

export const initialTestimonials = [
  {
    id: "review-1",
    name: "A. Jacobs",
    rating: 5,
    message:
      "The team was punctual, professional and left our home feeling wonderful. Booking was easy and the result was excellent.",
  },
  {
    id: "review-2",
    name: "M. Daniels",
    rating: 5,
    message:
      "Our office looks fantastic. They worked around our schedule and paid attention to the details we mentioned.",
  },
  {
    id: "review-3",
    name: "S. Petersen",
    rating: 5,
    message:
      "A smooth move-out clean and clear communication from start to finish. I would happily recommend them.",
  },
];