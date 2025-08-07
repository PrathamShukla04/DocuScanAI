"use client";

import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-black">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          ClauseLogic
        </h1>

        <h5 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Have a question for your documents?

        </h5>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
          Just ask. ClauseLogic reads your policies, contracts, and manuals to find the exact answer you need, instantly.
          <br />
          <br />
          Ideal for domains like <span className="font-semibold text-white">insurance</span>, <span className="font-semibold text-white">legal compliance</span>, <span className="font-semibold text-white">human resources</span>, and <span className="font-semibold text-white">contract management</span>.
        </p>

        <div className="mt-6">
          <Link href="/upload" passHref>
            <div>
              <Button borderRadius="1.75rem" className="bg-black text-white">
                Upload Document
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
