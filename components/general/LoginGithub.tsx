import React from "react";
import { FaGithub } from "react-icons/fa";
const LoginGithub = () => {
  return (
    <div className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-black rounded-md flex items-center justify-center">
      <FaGithub className="text-white" />
      <p className="text-white">Login with Github</p>
    </div>
  );
};

export default LoginGithub;
