import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import Logout from "./Logout";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="py-4 flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center gap-8">
        <h1 className="font-extrabold text-2xl">SP</h1>
        <nav className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </div>

      <div>
        {!session?.user ? (
          <Link href="/login">Login</Link>
        ) : (
          <div className="flex items-center gap-2">
            {session.user.name}
            <div className="relative w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={session.user.image as string}
                alt="avatar"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <Logout />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
