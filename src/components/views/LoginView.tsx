"use client";
import { signIn } from "next-auth/react";
import localFont from "next/font/local";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function LoginView() {
  return (
    <div className="flex items-center justify-center flex-col py-36">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <h1 className="text-4xl md:text-6xl text-center text-neutral-800 mb-6">
          The all-in-one solution for
        </h1>
        <div
          className="text-3xl md:text-6xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 p-2 rounded-md py-4
        w-fit"
        >
          Team Colaboration.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Tasknest helps teams organize their work,
        <br /> collaborate on projects, and stay on track
      </div>
      <button
        onClick={() => signIn("google")}
        className={cn(
          "bg-black text-white mt-8 rounded-md py-2 px-4",
          headingFont.className
        )}
      >
        Get TaskNest For Free!
      </button>
    </div>
  );
}
