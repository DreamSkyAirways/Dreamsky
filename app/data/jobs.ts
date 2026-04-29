export type Job = {
  slug: string;
  title: string;
  location: string;
  seatsLeft: number | "limited";
  lastDate: string;
  salaryRange: string;
  experience: string;
  description: string;
};

export const jobs: Job[] = [
  {
    slug: "ticket-confirmation-executive",
    title: "Ticket Confirmation Executive",
    location: "Delhi / Noida",
    seatsLeft: 345,
    lastDate: "30 April 2026",
    salaryRange: "₹26000- ₹35000/Month",
    experience: "Fresher / Experienced both are welcome",
    description: `
The Ticket Confirmation Executive plays a crucial role in ensuring smooth and accurate flight booking operations for customers. The primary responsibility of this role is to confirm airline tickets, manage booking requests, and handle customer queries related to flight schedules, availability, pricing, and ticket status. The executive will work closely with airline reservation systems and internal booking tools to generate PNRs, modify existing bookings, and ensure accurate ticket issuance.

In this role, you will interact directly with customers via phone, email, and online platforms to provide timely and professional support. You will be responsible for explaining fare rules, cancellation policies, rescheduling procedures, and baggage guidelines clearly to customers. Attention to detail is essential, as even minor errors in ticket details can impact customer travel plans.

The ideal candidate should possess strong communication skills, basic computer knowledge, and the ability to handle multiple booking requests simultaneously. Freshers with a keen interest in the travel and aviation industry are encouraged to apply, as training will be provided. Experienced candidates with prior exposure to airline ticketing systems will have an added advantage.

This position offers excellent growth opportunities within the travel industry, exposure to airline operations, and the chance to build a long-term career in aviation services. The role requires flexibility, customer-focused thinking, and a commitment to delivering high-quality service at all times.
`,
  },

  {
    slug: "tour-agent",
    title: "Tour Agent",
    location: "Delhi",
    seatsLeft: 278,
    lastDate: "25 April 2026",
    salaryRange: "₹26000- ₹35000/Month",
    experience: "Fresher / Experienced both are welcome",
    description: `
The Tour Agent is responsible for assisting customers in planning and booking domestic and international travel packages. This role involves understanding customer travel preferences, suggesting suitable tour packages, and coordinating with hotels, transport providers, and tour operators to create seamless travel experiences.

As a Tour Agent, you will handle inquiries related to holiday packages, sightseeing tours, accommodation, transportation, and travel documentation. You will guide customers through itinerary planning, pricing options, and inclusions, ensuring clarity and transparency throughout the booking process. Maintaining accurate records of bookings and follow-ups is an essential part of this role.

Strong interpersonal and communication skills are vital, as the role requires constant interaction with customers and travel partners. Freshers with a passion for travel and tourism are welcome, while experienced professionals will benefit from faster growth opportunities.

This position offers exposure to the travel industry, opportunities to learn about global destinations, and the chance to build a rewarding career in tourism services. A customer-centric approach, problem-solving skills, and the ability to work under deadlines are key to success in this role.
`,
  },

  {
    slug: "tour-executive",
    title: "Tour Executive",
    location: "Noida",
    seatsLeft: 198,
    lastDate: "28 April 2026",
    salaryRange: "₹26000- ₹35000/Month",
    experience: "Fresher / Experienced both are welcome",
    description: `
The Tour Executive is responsible for managing end-to-end tour operations and ensuring a smooth travel experience for customers. This role involves coordinating with customers, vendors, hotels, transport providers, and tour guides to ensure that travel plans are executed as per itinerary.

Key responsibilities include handling tour confirmations, managing customer communications before and during travel, resolving operational issues, and ensuring customer satisfaction. The Tour Executive acts as a bridge between customers and service providers, ensuring timely updates and smooth coordination.

Candidates should have strong organizational skills, the ability to manage multiple tours simultaneously, and a proactive problem-solving mindset. Freshers with good communication skills and a willingness to learn are encouraged to apply. Experienced candidates with prior tour operations experience will be preferred.

This role offers opportunities for career growth into senior operational or managerial positions within the travel industry. Attention to detail, adaptability, and a strong service-oriented approach are essential for success.
`,
  },

  {
    slug: "tour-manager",
    title: "Tour Manager",
    location: "Delhi / Gurgaon",
    seatsLeft: 112,
    lastDate: "20 April 2026",
    salaryRange: "₹26000- ₹35000/Month",
    experience: "Experienced candidates preferred (Freshers can apply)",
    description: `
The Tour Manager is responsible for overseeing and managing tour operations at a strategic level. This role involves supervising tour executives, coordinating with vendors, managing customer escalations, and ensuring the successful execution of multiple tour programs.

The Tour Manager plays a leadership role in planning itineraries, negotiating with service providers, maintaining quality standards, and ensuring customer satisfaction. Strong leadership, decision-making abilities, and industry knowledge are essential for this position.

Candidates with prior experience in tour operations or travel management are preferred. However, motivated freshers with leadership potential may also be considered. This role offers significant growth opportunities and exposure to high-level travel operations management.
`,
  },

  {
    slug: "hr-human-resource",
    title: "HR (Human Resource)",
    location: "Noida",
    seatsLeft: 8,
    lastDate: "22 April 2026",
    salaryRange: "₹18,000 – ₹30,000 /Month",
    experience: "Fresher / Experienced both are welcome",
    description: `
The HR Executive is responsible for managing recruitment, onboarding, employee engagement, and internal HR operations. This role involves coordinating with hiring managers, scheduling interviews, maintaining employee records, and supporting organizational policies.

Strong communication, organizational skills, and a people-focused approach are essential. This role provides exposure to HR processes and career growth in human resource management.
`,
  },

  {
    slug: "sales-executive",
    title: "Sales Executive",
    location: "Delhi / Noida",
    seatsLeft: "limited",
    lastDate: "05 May 2026",
    salaryRange: "₹12000-₹25000/Month",
    experience: "Fresher / Experienced both are welcome",
    description: `
The Sales Executive is responsible for promoting and selling travel services including flight tickets, holiday packages, visa services, and travel insurance. This role involves handling customer leads, understanding requirements, and closing sales efficiently.

Strong persuasion skills, customer handling ability, and target-driven mindset are essential. This position offers high growth potential, performance-based incentives, and career advancement opportunities within the travel sales domain.
`,
  },
];
