"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {CiLocationOn, CiStar} from "react-icons/ci";
import {FaRegStar} from "react-icons/fa";
import {IoBagCheckOutline} from "react-icons/io5";
import CareerForm from "../CareerForm";

export const jobs = [
  // {
  //   id: 1,
  //   title: "Ticket Confirmation Executive",
  //   slug: "ticket-confirmation-executive",
  //   department: "Operations",
  //   location: "Noida, India",
  //   type: "Full Time",
  //   experience: "0-2 Years",
  //   image: "/images/careers/ticket-confirmation.png",
  //   secondaryImage: "/images/careers/ticket-confirmation.png",
  //   description:
  //     "Handle ticket confirmations, coordinate with airlines, and ensure a seamless booking experience for customers.",
  //   responsibilities: [
  //     "Confirm domestic and international flight bookings.",
  //     "Coordinate with airline partners.",
  //     "Handle customer ticket-related queries.",
  //     "Maintain booking records and reports.",
  //   ],
  // },

  {
    id: 2,
    title: "Tour Agent",
    slug: "tour-agent",
    department: "Travel Services",
    location: "Delhi, India",
    type: "Full Time",
    experience: "1-3 Years",
    image: "/images/careers/tour-agent.png",
    secondaryImage: "/images/careers/tour-agent.png",
    description:
      "Assist customers in planning and booking holiday packages, flights, hotels, and transportation services.",
    responsibilities: [
      "Design customized travel itineraries.",
      "Book flights, hotels, and tour packages.",
      "Provide destination guidance to customers.",
      "Handle travel documentation requirements.",
    ],
  },

  {
    id: 3,
    title: "Tour Executive",
    slug: "tour-executive",
    department: "Tour Operations",
    location: "Noida, India",
    type: "Full Time",
    experience: "1-4 Years",
    image: "/images/careers/tour-executive.png",
    secondaryImage: "/images/careers/tour-executive.png",
    description:
      "Manage tour operations, customer relationships, and ensure smooth execution of travel experiences.",
    responsibilities: [
      "Coordinate with hotels and transport vendors.",
      "Manage tour schedules and logistics.",
      "Handle customer feedback and support.",
      "Ensure high-quality travel experiences.",
    ],
  },

  {
    id: 4,
    title: "Tour Manager",
    slug: "tour-manager",
    department: "Management",
    location: "Remote / Noida",
    type: "Full Time",
    experience: "3-6 Years",
    image: "/images/careers/tour-manager.png",
    secondaryImage: "/images/careers/tour-manager.png",
    description:
      "Lead tour teams, manage operations, and oversee end-to-end execution of domestic and international tours.",
    responsibilities: [
      "Manage tour executives and travel partners.",
      "Plan tour budgets and schedules.",
      "Ensure customer satisfaction.",
      "Develop new travel packages and experiences.",
    ],
  },

  {
    id: 5,
    title: "HR Executive (Human Resources)",
    slug: "hr-executive",
    department: "Human Resources",
    location: "Noida, India",
    type: "Full Time",
    experience: "1-3 Years",
    image: "/images/careers/hr-executive.png",
    secondaryImage: "/images/careers/hr-executive.png",
    description:
      "Support recruitment, employee engagement, onboarding, and day-to-day HR operations.",
    responsibilities: [
      "Conduct recruitment and interviews.",
      "Manage employee records and attendance.",
      "Handle onboarding and training programs.",
      "Organize employee engagement activities.",
    ],
  },

  // {
  //   id: 6,
  //   title: "Sales Executive",
  //   slug: "sales-executive",
  //   department: "Sales & Marketing",
  //   location: "Delhi NCR",
  //   type: "Full Time",
  //   experience: "1-4 Years",
  //   image: "/images/careers/sales-executive.png",
  //   secondaryImage: "/images/careers/sales-executive.png",
  //   description:
  //     "Drive travel package sales, build customer relationships, and achieve monthly business targets.",
  //   responsibilities: [
  //     "Generate new customer leads.",
  //     "Promote holiday and flight packages.",
  //     "Achieve monthly sales targets.",
  //     "Maintain long-term client relationships.",
  //   ],
  // },
  {
    id: 7,
    title: "Frontend Developer",
    slug: "frontend-developer",
    department: "Technology",
    location: "Noida, India",
    type: "Full Time",
    experience: "1-3 Years",
    image: "/images/careers/frontend-developer.png",
    secondaryImage: "/images/careers/frontend-developer.png",
    description:
      "Build modern, responsive, and high-performance web applications using React, Next.js, and TypeScript.",
    responsibilities: [
      "Develop responsive user interfaces with React and Next.js.",
      "Collaborate with designers and backend developers.",
      "Optimize applications for speed and performance.",
      "Write clean, reusable, and maintainable code.",
    ],
  },

  {
    id: 8,
    title: "Backend Developer",
    slug: "backend-developer",
    department: "Technology",
    location: "Noida, India",
    type: "Full Time",
    experience: "2-4 Years",
    image: "/images/careers/backend-developer.png",
    secondaryImage: "/images/careers/backend-developer.png",
    description:
      "Design and maintain scalable APIs and backend systems for travel and airline operations.",
    responsibilities: [
      "Develop REST APIs using Node.js and Express.",
      "Manage MySQL and MongoDB databases.",
      "Implement authentication and authorization systems.",
      "Ensure application security and performance.",
    ],
  },

  {
    id: 9,
    title: "Digital Marketing Executive",
    slug: "digital-marketing-executive",
    department: "Marketing",
    location: "Delhi NCR",
    type: "Full Time",
    experience: "1-3 Years",
    image: "/images/careers/digital-marketing.png",
    secondaryImage: "/images/careers/digital-marketing.png",
    description:
      "Promote Dream Sky Airways through digital campaigns, social media, and content marketing.",
    responsibilities: [
      "Manage social media platforms and campaigns.",
      "Improve website visibility and online reach.",
      "Create engaging marketing content.",
      "Analyze campaign performance metrics.",
    ],
  },

  {
    id: 10,
    title: "Tour Guide",
    slug: "tour-guide",
    department: "Tour Operations",
    location: "Multiple Locations",
    type: "Full Time",
    experience: "0-2 Years",
    image: "/images/careers/tour-guide.png",
    secondaryImage: "/images/careers/tour-guide.png",
    description:
      "Lead travelers, provide destination insights, and ensure memorable travel experiences.",
    responsibilities: [
      "Guide tourists during tours and activities.",
      "Explain local culture and attractions.",
      "Ensure traveler safety and comfort.",
      "Coordinate with local service providers.",
    ],
  },

  // {
  //   id: 11,
  //   title: "Data Analyst",
  //   slug: "data-analyst",
  //   department: "Business Intelligence",
  //   location: "Noida, India",
  //   type: "Full Time",
  //   experience: "1-4 Years",
  //   image: "/images/careers/data-analyst.png",
  //   secondaryImage: "/images/careers/data-analyst.png",
  //   description:
  //     "Analyze customer, booking, and operational data to drive strategic business decisions.",
  //   responsibilities: [
  //     "Create reports and dashboards using BI tools.",
  //     "Analyze sales and customer trends.",
  //     "Work with teams to improve business processes.",
  //     "Generate actionable insights from large datasets.",
  //   ],
  // },

  {
    id: 12,
    title: "Business Development Executive",
    slug: "business-development-executive",
    department: "Business Development",
    location: "Delhi NCR",
    type: "Full Time",
    experience: "1-4 Years",
    image: "/images/careers/BDE.png",
    secondaryImage: "/images/careers/BDE.png",
    description:
      "Identify new business opportunities, build partnerships, and expand Dream Sky Airways' market presence.",
    responsibilities: [
      "Generate and qualify new leads.",
      "Build relationships with travel partners and clients.",
      "Prepare business proposals and presentations.",
      "Achieve monthly growth and revenue targets.",
    ],
  },
];

const OpenPositions = () => {

  const [showCareerForm, setShowCareerForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  
  return (
    <section className="bg-slate-50 py-20 " id="jobs">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Open Positions
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Join Dream Sky Airways
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Explore exciting career opportunities and become part of a team
            that's transforming travel experiences across India.
          </p>
        </div>

        {/* Job Cards */}
        <div className="space-y-24">
          {jobs.map((job, index) => (
            <div key={job.id} className="rounded-[40px]">
              <div
                className={`grid gap-12 lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE SECTION */}
                <div className="relative min-h-[650px] p-10">
                  {/* Main Image */}
                  <div
                    className={`relative h-[450px] ${
                      index % 2 === 0 ? "-right-10 -top-20" : "right-10 -top-20"
                    }`}
                  >
                    <Image
                      src={job.image}
                      alt={job.title}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>

                  {/* Secondary Overflow Image */}
                  <div
                    className={`absolute bottom-5 h-90 w-full ${
                      index % 2 === 0 ? "-left-20" : "-right-20"
                    }`}
                  >
                  <Image
                      src={job.secondaryImage}
                      alt={`${job.title} workspace`}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="flex flex-col justify-center p-5 pl-10 bg-gray-100 hover:shadow-lg rounded-lg ">
                  <span className="w-fit rounded-md bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {job.department}
                  </span>

                  <h2 className="mt-5 text-4xl font-bold text-slate-900">
                    {job.title}
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="flex gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm text-blue-700">
                      <CiLocationOn size={20} />
                      {job.location}
                    </span>

                    <span className="flex gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm text-blue-700">
                      <IoBagCheckOutline size={20} />
                      {job.type}
                    </span>

                    <span className="flex gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm text-blue-700">
                      <FaRegStar size={20} />
                      {job.experience}
                    </span>
                  </div>

                  <p className="mt-6 leading-8 text-slate-600">
                    {job.description}
                  </p>

                  <h3 className="mt-8 text-xl font-bold text-slate-900">
                    Key Responsibilities
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setShowCareerForm(true);
                    }}
                    className="mt-10 inline-flex w-fit items-center rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                  >
                    Apply Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showCareerForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 mt-19">
          <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setShowCareerForm(false)}
              className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-xl"
             >
              ✕
            </button>

            <CareerForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default OpenPositions;
