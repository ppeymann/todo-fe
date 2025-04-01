"use client";
import ProtectedLayout from "@/components/ProtectedLayout";
import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [];

  return (
    <ProtectedLayout>
      <section className="w-full h-screen bg-blue-500 flex justify-center items-center">
        <div className="w-full h-3/4 flex flex-col items-center bg-slate-200 md:w-2/5 md:h-2/3 rounded-xl py-10 relative">
          <h2 className="text-center pt-2 text-2xl font-sans">
            {isLogin ? "Login In To Your Account" : "Sign Up"}
          </h2>
          <div className="w-full px-2 xl:px-20 lg:px-10 mt-20">
            <label htmlFor="username" className="text-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Username
            </label>
            <input
              className="bg-slate-300 w-full px-2 py-3 rounded-md outline-none border-2 border-slate-400"
              id="username"
              placeholder="@Username"
            />
          </div>
          <div className="w-full px-2 xl:px-20 lg:px-10 mt-5">
            <label htmlFor="password" className="text-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
              Password
            </label>
            <input
              className="bg-slate-300 w-full px-2 py-3 rounded-md outline-none border-2 border-slate-400"
              id="password"
              placeholder="Enter Your Password"
              type="password"
            />
          </div>
          <button className="mt-10 w-40 bg-slate-800 py-2 rounded-xl text-white cursor-pointer hover:bg-slate-900 transition-colors">
            Sign In
          </button>

          <div className="w-full pt-10 flex space-x-5 justify-center">
            <button
              className="cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create an account" : "Have an account"}
            </button>
            {isLogin ?? (
              <button className="cursor-pointer">Forget Password?</button>
            )}
          </div>
        </div>
      </section>
    </ProtectedLayout>
  );
};

export default Login;
