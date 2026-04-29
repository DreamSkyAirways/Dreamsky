import type { Metadata } from "next";
import FAQPage from "./FaqClient";

export const metadata:Metadata={
  title:"Dream Sky Airways FAQs | Travel Help Desk",
  description:"Get answers to your travel questions about bookings, refunds, cancellations, tour packages, and customer support at Dream Sky Airways.",
  keywords:[
    "dream sky airways customer care",
    "travel help desk",
    "online ticket booking support",
    "international travel faq",
    "domestic travel faq",
    "visa assistance faq",
    "baggage policy faq",
    "web check-in help",
    "travel insurance faq",
  ],
alternates:{
  canonical:"https://www.dreamskyairways.com/faq",
},
robots:{
  index:true,
  follow:true,
  nocache:false,
  googleBot:{
    index:true,
    follow:true,
    noimageindex:false,
    "max-video-preview":-1,
    "max-image-preview":"large",
    "max-snippet":-1,
  },
},
openGraph:{
  title:"",
  description:"",
  url:"https://www.dreamskyairways.com/faq",
  siteName:"Dream Sky Airways",
  type:"website",
  locale:"en_IN",
  images:[
    {
      url:"https://www.dreamskyairways.com/ogImage.webp",
      width:1200,
      height:630,
      alt:"dream sky airways faq page",
    },
  ],
},
twitter:{
  card:"summary_large_image",
  title:"Dream Sky Airways FAQs | Travel Help Desk",
  description:"Get answers to your travel questions about bookings, refunds, cancellations, tour packages, and customer support at Dream Sky Airways.",
},
};

/* ================= FAQ SCHEMA ================= */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I change or cancel my flight booking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flight change/cancellation policies depend on the airline and fare type selected at booking. Most promotional fares are non-refundable, and our service fee is non-refundable as well."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if my flight is delayed or cancelled by the airline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Airline cancellations and significant delays are handled directly by the airline as per regulations. We assist with status updates and rebooking options when available."
      }
    },
    {
      "@type": "Question",
      "name": "Do you charge any convenience fee for flight bookings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, a transparent convenience fee is added at checkout, covering payment gateway charges, technology maintenance, and customer support."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my PNR not showing confirmed status immediately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some low-cost carriers take 30–120 minutes to confirm the PNR. You will receive confirmation via email/SMS once the airline issues the ticket."
      }
    },
    {
      "@type": "Question",
      "name": "Can I add baggage or select seats after booking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most airlines allow adding baggage and seat selection post-booking via their website/app using your PNR and last name. Some services may be available through us for an additional fee."
      }
    }
  ]
};

export default function page(){

  return (
     <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Your FAQ UI Content */} 
  <FAQPage />
  </>
  );
};