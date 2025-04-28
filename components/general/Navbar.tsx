import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import Logout from "./Logout";

import Image from "next/image";
const Navbar = async () => {
  const session = await auth();
  return (
    <div className="flex items-center justify-between">
      <div className="flex w-full items-center gap-4">
        <Link href="/">Logo</Link>
        <Link className="font-semibold" href="/">
          Home
        </Link>
        <Link className="font-semibold" href="/">
          Admin
        </Link>
        <Link className="font-semibold" href="/">
          Dashboard
        </Link>
      </div>
      <div>{session?.user ? <Link href="/login">Login</Link> : <Logout />}</div>
    </div>
  );
};

export default Navbar;
