"use client";

import { useRouter } from "next/navigation"; // Import useRouter
import Image from "next/image";
import React, { useState } from "react";

export default function Register() {
  const router = useRouter(); // Initialize the router
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.retypePassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost/feminisitapi/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        alert("Registration successful!");
        router.push("/login");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 mt-10 relative">
      <p className="text-3xl font-semibold">Let&apos;s create your account</p>
      <div>
        <Image src="/assets/login/girl.png" width={300} height={300} alt="Register" />
      </div>
    
      <form
        className="flex flex-col items-center gap-4 w-full max-w-xs"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="password"
          name="retypePassword"
          placeholder="Retype Password"
          value={formData.retypePassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-150"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
