"use client";

import { useState } from "react";
import Swal from "sweetalert2";

// Common input style
const inputClass =
  "w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#0D6269] border border-gray-300";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    countryCode: "+91",
    phone: "",
    email: "",
    gender: "",
    education: "",
    applyingFor: "",
    address: "",
    state: "",
    pan: "",
    dob: "",
    degree: "",
    certification: null as File | null,
    image: null as File | null,
    additionalImage: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "countryCode") {
      // + followed by up to 3 digits only
      const cleaned = value.replace(/[^+0-9]/g, "");
      if (cleaned.startsWith("+") && cleaned.length > 4) return;
      if (!cleaned.startsWith("+") && cleaned.length > 3) return;
      setFormData({ ...formData, [name]: cleaned });
      return;
    }

    if (name === "phone") {
      if (value !== "" && !/^\d*$/.test(value)) return;
      if (value.length > 10) return;
      setFormData({ ...formData, [name]: value });
      return;
    }

    if (name === "pan") {
      const upper = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
      if (upper.length > 10) return;
      setFormData({ ...formData, [name]: upper });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files?.[0]) return;

    const file = files[0];
    if (file.size > 2 * 1024 * 1024) {
      Swal.fire("File too large", "Maximum 2MB allowed", "warning");
      e.target.value = "";
      return;
    }

    setFormData({ ...formData, [name]: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!/^\d{10}$/.test(formData.phone)) {
    Swal.fire("Invalid Mobile", "Please enter a valid 10-digit mobile number", "warning");
    return;
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    Swal.fire("Invalid Email", "Please enter a valid email address", "warning");
    return;
  }

  if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan)) {
    Swal.fire("Invalid PAN", "PAN should be in format: ABCDE1234F", "error");
    return;
  }

  if (!formData.countryCode.startsWith("+") || formData.countryCode.length < 2) {
    Swal.fire("Invalid Code", "Country code should start with + and have 1-3 digits", "warning");
    return;
  }

  try {
    const form = new FormData();

    // Append all fields safely
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        form.append(key, value as any);
      }
    });

    // Final phone number with country code
    form.set("phone", formData.countryCode + formData.phone);

    const response = await fetch("http://localhost:8080/api/career/create", {
      method: "POST",
      body: form,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Submission failed");
    }

    Swal.fire({
      icon: "success",
      title: "Application Submitted 🎉",
      text: "Dream Sky Airways will contact you soon",
      confirmButtonColor: "#0D6269",
    });

    // Reset form
    setFormData({
      fullName: "",
      fatherName: "",
      countryCode: "+91",
      phone: "",
      email: "",
      gender: "",
      education: "",
      applyingFor: "",
      address: "",
      state: "",
      pan: "",
      dob: "",
      degree: "",
      certification: null,
      image: null,
      additionalImage: null,
    });

  } catch (error: any) {
    Swal.fire("Error", error.message || "Something went wrong", "error");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center p-6 mt-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 text-white border border-white/20 p-8 rounded-2xl bg-[#0D6269]"
      >
        <h1 className="col-span-full text-3xl font-bold mb-6 text-center">
          Career Application – Dream Sky Airways
        </h1>

        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Father Name</label>
          <input
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Enter your father's full name"
            className={inputClass}
          />
        </div>

        <div className="flex gap-3">
          <div className="w-32">
            <label className="block text-sm mb-1">Country Code</label>
            <input
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              placeholder="+91"
              className={inputClass}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm mb-1">Mobile Number</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Email Address</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@domain.com"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Educational Level</label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select Level</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Graduate">Graduate</option>
            <option value="Post Graduate">Post Graduate</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Applying For</label>
          <select
            name="applyingFor"
            value={formData.applyingFor}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select Position</option>
            <option value="Ticket Confirmation">Ticket Confirmation</option>
            <option value="Tour Agent">Tour Agent</option>
            <option value="Tour Executive">Tour Executive</option>
            <option value="Tour Manager">Tour Manager</option>
            <option value="HR (Human Resource)">HR (Human Resource)</option>
             <option value="HR (Human Resource)">Sales Executive</option>
          </select>
        </div>

       

        <div>
          <label className="block text-sm mb-1">State</label>
          <input
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter your state"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">PAN Number</label>
          <input
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            placeholder="ABCDE1234F (auto uppercase)"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Date of Birth</label>
          <input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Degree</label>
          <input
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            placeholder="Enter your degree (if any)"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Education document (Max 2MB)</label>
          <input
            type="file"
            accept="image/*,.pdf"
            name="certification"
            onChange={handleFileChange}
            className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-[#0D6269] file:text-white hover:file:bg-[#0a4e54]"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Profile Image (Max 2MB)</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleFileChange}
            className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-[#0D6269] file:text-white hover:file:bg-[#0a4e54]"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Additional Image (Optional)</label>
          <input
            type="file"
            accept="image/*,.pdf"
            name="additionalImage"
            onChange={handleFileChange}
            className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-[#0D6269] file:text-white hover:file:bg-[#0a4e54]"
          />
        </div>
         <div className="md:col-span-2">
          <label className="block text-sm mb-1">Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your full address"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-white text-[#0D6269] py-4 rounded-xl font-bold text-lg hover:opacity-90 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}