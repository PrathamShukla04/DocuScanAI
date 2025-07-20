'use client';

import { CardStack } from './ui/card-stack'; 
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    designation: 'Guitar Student',
    content:
      '🎸 Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
  },
  {
    id: 2,
    name: 'Samantha Lee',
    designation: 'Piano Student',
    content:
      "🎹 The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer.",
  },
  {
    id: 3,
    name: 'Michael Chen',
    designation: 'Vocal Student',
    content:
      "🎤 This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the coaching.",
  },
  {
    id: 4,
    name: 'Emily Taylor',
    designation: 'Violin Student',
    content:
      '🎻 As a violinist, finding the right mentor can be challenging, but this school matched me with the perfect teacher.',
  },
  {
    id: 5,
    name: 'Chris Morales',
    designation: 'Music Production Student',
    content:
      '🎧 The production courses opened my eyes to the intricacies of music production. Highly recommend for aspiring producers!',
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full bg-black dark:bg-black flex flex-col items-center justify-center overflow-hidden pt-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12 z-10">
        Hear Our Harmony: Voices of Success
      </h2>
      <CardStack
        items={testimonials.map((testimonial) => ({
          ...testimonial,
          content: (
            <p className="text-md leading-relaxed text-neutral-600 dark:text-neutral-200">
              {testimonial.content}
            </p>
          ),
        }))}
        offset={12}
        scaleFactor={0.04}
      />
    </div>
  );
}

export default MusicSchoolTestimonials;
