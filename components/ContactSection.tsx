"use client";
  import { useState } from "react";
  import Swal from "sweetalert2";
  import LocationMap from "@/components/LocationMap";
  // import axios from "axios";

  export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",   
    subject: "",
    message: "",
  });

    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      // console.log(formData) 
    try { 
      // const res = await axios.post(
      //   "http://localhost:8080/api/contact",
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   } 
      // );

      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });

      setFormData({
        name: "",
        email: "",
        mobile: "",   
        subject: "",
        message: "",
      });
    } catch (error: any) {
      Swal.fire({
        title: "Error!",
        text:
          error?.response?.data?.message ||
          "Something went wrong",
        icon: "error",
      });
    }
  };

    return (
      <>
        <section className="w-full bg-gray-100 mt-20 shadow-lg rounded-3xl overflow-hidden">
          <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-10 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-2 items-stretch">
              {/* LEFT - Form */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-inner">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">
                  <span className="text-orange-500">Get in </span>
                  <span className="text-[#0D6269]"> Touch!</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  We’d love to hear from you. Our friendly team is always here to chat
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-full border border-gray-300 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0D6269] bg-white/80 backdrop-blur-sm"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-full border border-gray-300 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0D6269] bg-white/80 backdrop-blur-sm"
                  />

                    <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full rounded-full border border-gray-300 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0D6269] bg-white/80 backdrop-blur-sm"
                />


                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-full border border-gray-300 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0D6269] bg-white/80 backdrop-blur-sm appearance-none text-gray-700"
                  >
                    <option value="" disabled>Select Subject</option>
                    <option value="Service Related Enquiry">Service Related Enquiry</option>
                    <option value="Package Related Enquiry">Package Related Enquiry</option>
                    <option value="Help and Support">Help and Support</option>
                    <option value="Other Enquiry">Other Enquiry</option>
                    <option value="General Query">General Query</option>
                  </select>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-3xl border border-gray-300 px-6 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#0D6269] bg-white/80 backdrop-blur-sm"
                  />

                  <button
                    type="submit"
                    className="bg-[#0D6269] hover:bg-[#083A3F] text-white font-semibold px-8 py-3 rounded-full transition w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* RIGHT - Contact Info + Image (same as before) */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-inner">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D6269] mb-3">
                      Get in Touch
                    </h1>
                    <p className="text-gray-600 mb-8">
                      We'd love to hear from you! Please fill out the form below.
                    </p>

                    <div className="space-y-6">
                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#4B8FA0] flex items-center justify-center text-white text-xl">
                          📞
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Helpline Number</p>
                          <a
                            href="tel:+918750610304"
                            className="block text-lg font-semibold text-[#0D6269] hover:underline"
                          >
                            +91 8750610304
                          </a>
                          <a
                            href="tel:+911204580951"
                            className="block text-lg font-semibold text-[#0D6269] hover:underline"
                          >
                            +91 1204580951
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#D48B96] flex items-center justify-center text-white text-xl">
                          ✉️
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Write us on</p>
                          <a
                            href="mailto:info@dreamskyairways.com"
                            className="block text-lg font-semibold text-[#0D6269] hover:underline"
                          >
                            info@dreamskyairways.com
                          </a>
                          <a
                            href="mailto:hr@dreamskyairways.com"
                            className="block text-lg font-semibold text-[#0D6269] hover:underline"
                          >
                            hr@dreamskyairways.com
                          </a>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#0D6269] flex items-center justify-center text-white text-xl">
                          📍
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Address</p>
                          <a
                            href="https://www.google.com/maps/search/?api=1&query=Dream+Sky+Airways+Pvt+Ltd+A-block+Noida+Sector+63"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-[#0D6269] leading-snug hover:underline block"
                          >
                            Dream Sky Airways Pvt. Ltd. <br />
                            A block Sector-63, Noida,  Near Dainik Jagaran, <br />
                            Gautam Budh Nagar 201301
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-end">
                    <img
                      src="/Contact.webp"
                      alt="Traveller enjoying scenic boat ride"
                      className="w-full max-w-md rounded-2xl object-cover shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LocationMap />
      </>
    );
  }