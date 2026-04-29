// data/insurances.ts

export type Insurance = {
  id: string;
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  whoShouldBuy: string;
  startingPrice: string;
};

export const insurances: Insurance[] = [
  {
    id: "1",
    slug: "travel-medical-insurance",
    title: "Travel Medical Insurance",
    description:
      "Covers emergency medical treatment, hospitalization, and healthcare expenses while traveling abroad.",
    highlights: [
      "Emergency hospitalization",
      "Doctor consultation & medicines",
      "Cashless treatment (network hospitals)",
      "Medical evacuation & repatriation",
    ],
    whoShouldBuy:
      "International travelers, tourists, senior citizens, and anyone traveling overseas.",
    startingPrice: "₹499",
  },
  {
    id: "2",
    slug: "trip-cancellation-interruption-insurance",
    title: "Trip Cancellation & Interruption Insurance",
    description:
      "Protects your trip cost if you need to cancel or cut short your journey due to unforeseen events.",
    highlights: [
      "Trip cancellation reimbursement",
      "Trip interruption coverage",
      "Illness, accident, or emergencies",
      "Refund for non-refundable bookings",
    ],
    whoShouldBuy:
      "Travelers with expensive or prepaid trips and tight schedules.",
    startingPrice: "₹699",
  },
  {
    id: "3",
    slug: "baggage-loss-delay-insurance",
    title: "Baggage Loss / Delay Insurance",
    description:
      "Provides compensation for lost, damaged, or delayed checked-in baggage during travel.",
    highlights: [
      "Loss of checked-in baggage",
      "Compensation for delayed baggage",
      "Coverage for essential purchases",
      "Airline baggage issues",
    ],
    whoShouldBuy:
      "Frequent flyers and international travelers carrying valuable items.",
    startingPrice: "₹399",
  },
  {
    id: "4",
    slug: "flight-delay-missed-connection-insurance",
    title: "Flight Delay / Missed Connection Insurance",
    description:
      "Covers expenses caused by flight delays, cancellations, or missed connecting flights.",
    highlights: [
      "Flight delay compensation",
      "Missed connection coverage",
      "Hotel & meal expenses",
      "Weather and airline-related delays",
    ],
    whoShouldBuy:
      "Transit travelers and those with connecting international flights.",
    startingPrice: "₹349",
  },
  {
    id: "5",
    slug: "personal-accident-insurance",
    title: "Personal Accident Insurance",
    description:
      "Provides financial protection in case of accidental death or permanent disability during travel.",
    highlights: [
      "Accidental death cover",
      "Permanent disability benefits",
      "Worldwide coverage",
      "24x7 protection",
    ],
    whoShouldBuy:
      "Adventure travelers, frequent travelers, and working professionals.",
    startingPrice: "₹299",
  },
  {
    id: "6",
    slug: "student-travel-insurance",
    title: "Student Travel Insurance",
    description:
      "Specially designed insurance for students studying abroad with extended medical and academic coverage.",
    highlights: [
      "Medical & hospitalization cover",
      "Study interruption cover",
      "Sponsor protection",
      "Visa-compliant policies",
    ],
    whoShouldBuy:
      "Students traveling abroad for education or exchange programs.",
    startingPrice: "₹599",
  },
  {
    id: "7",
    slug: "adventure-sports-travel-insurance",
    title: "Adventure Sports Travel Insurance",
    description:
      "Covers injuries and risks associated with adventure sports and high-risk activities.",
    highlights: [
      "Adventure sports coverage",
      "Emergency rescue expenses",
      "Medical evacuation",
      "Worldwide adventure activities",
    ],
    whoShouldBuy:
      "Adventure seekers, trekkers, scuba divers, and sports enthusiasts.",
    startingPrice: "₹899",
  },
];
