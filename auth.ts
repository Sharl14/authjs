import NextAuth from "next-auth";
import { prisma } from "@/app/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [GitHub],
});
