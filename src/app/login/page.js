"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col items-center gap-10 mt-10 relative">
      <p className="text-3xl font-semibold">Feminist Spot App</p>
      <div>
        <Image src="/assets/login/this.jpeg" width={200} height={200} alt="Login illustration" />
      </div>

      {/* Login Form */}
      <h1 style={{ fontFamily: "Arial, sans-serif", fontSize: "32px" }}>#takeyourspot</h1>

      <form className="w-full max-w-sm flex flex-col gap-4">
        {/* Email Field */}
        <div className="w-full flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-pink-500">
          <div className="px-3 text-gray-500">
            <i className="fas fa-user"></i> {/* User icon */}
          </div>
          <input
            type="text"
            placeholder="Email or Phone"
            className="w-full px-4 py-2 focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="w-full flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-pink-500">
          <div className="px-3 text-gray-500">
            <i className="fas fa-lock"></i> {/* Lock icon */}
          </div>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 focus:outline-none"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-150"
        >
          Login
        </button>

        {/* Create Account Button */}
        <a href="/create" className="w-full">
          <button
            type="button"
            className="w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-150"
          >
            Create Account
          </button>
        </a>
      </form>

      {/* Google Login Button */}
      <button
        className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      >
        <Image
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          width={24}
          height={24}
          alt="Google logo"
        />
        <span>Login with Google</span>
      </button>
    </div>
  );
}
