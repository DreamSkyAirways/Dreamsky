import ContactSection from '@/components/ContactSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Contact Dream Sky Airways | Support & Booking Help",
   description: "Get in touch with Dream Sky Airways for flight bookings, customer support, travel assistance, and inquiries. We are here to help you 24/7.",
   keywords:[ 
    "Customer Support",
    "Booking Help",
    "Dream Sky Airways helpline",
    "dreamskyairways",
    "Dream Sky Airways",
   ],
   alternates:{
    canonical:"https://www.dreamskyairways.com/contact",
   },
   robots: {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
openGraph : {
  title :"Contact Dream Sky Airways | Support & Booking Help",
  description : "Get in touch with Dream Sky Airways for flight bookings, customer support, travel assistance, and inquiries. We are here to help you 24/7.",
  url: "https://www.dreamskyairways.com/contact",
  images :{
    url:"https://www.dreamskyairways.com/ogImage.webp",
    width:"1200",
    height:"630",
    alt:"contact dream sky airways"
  },
  siteName: "Dream Sky Airways",
    type: "website",
    locale:"en_IN",
    
},
twitter :
{
  card: "summary_large_image",
  title: "Contact Dream Sky Airways | Support & Booking Help",
  description: "Get in touch with Dream Sky Airways for flight bookings, customer support, travel assistance, and inquiries. We are here to help you 24/7.",
}


};
export default function Page() {
  return <ContactSection/>
};
