"use client";
import { login } from "@/actions/auth";
import React from "react";
import { FaGithub } from "react-icons/fa";
const LoginGithub = () => {
  function login(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div
      onClick={() => {
        // Replace with your actual GitHub login logic
        login("github"); // Call the login function with "github" as the argument
      }}
      className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-black rounded-md flex items-center justify-center"
    >
      <FaGithub className="text-white" />
      <p className="text-white">Login with Github</p>
    </div>
  );
};

export default LoginGithub;
