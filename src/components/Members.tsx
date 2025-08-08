'use client'

import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: 'Pratham Shukla',
    designation: 'Frontend Developer',
    image: '/1.jpg',
  },
  {
    id: 2,
    name: 'Parikshit Jaiswal',
    designation: 'Backend Developer',
    image: '/2.jpg',
  },
  {
    id: 3,
    name: 'Rifa',
    designation: 'ML Developer',
    image: '/3.jpg',
  },
  {
    id: 4,
    name: 'Pratyaksha Gupta',
    designation: 'ML Developer',
    image: '/4.jpg',
  },
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Team Code Blooded
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4 max-w-2xl">
          Meet the brilliant minds behind ClauseLogic — a document analyzer built with precision, passion, and purpose for HackRx 6.0.
        </p>
        <div className="flex mt-10 flex-row items-center justify-center mb-10 w-full mt-12">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
