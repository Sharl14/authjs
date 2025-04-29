"use client";

import React from "react";
import LoginGithub from "@/components/general/LoginGithub";
import { login } from "@/actions/auth";
const Login = () => {
  return (
    <div
      onClick={() => login("github")}
      className="w-full flex mt-20 justify-center"
    >
      <section className="flex flex-col w-[400px]">
        <h1>Login</h1>
        <LoginGithub />
      </section>
    </div>
  );
};

export default Login;
