"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 ml-2 rounded-md"
    >
      Login
    </button>
  );
}
