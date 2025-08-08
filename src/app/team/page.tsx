'use client';

import React from 'react';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Timeline } from '@/components/ui/timeline';

export default function TeamPage() {
  const testimonials = [
    {
      quote:
        "Working on ClauseLogic was an incredible journey — blending design, code, and AI to build something meaningful.",
      name: "Pratham Shukla",
      designation: "Frontend & UI/UX Developer",
      src: "/1.jpg",
    },
    {
      quote:
        "ClauseLogic&rsquo;s backend architecture was designed for speed, scalability, and seamless AI integration.",
      name: "Parikshit Jaiswal",
      designation: "Backend & API Developer",
      src: "/2.jpg",
    },
    {
      quote:
        "My focus was to extract meaning from documents using the latest NLP techniques. The impact is real.",
      name: "Rifa",
      designation: "ML/NLP Developer",
      src: "/3.jpg",
    },
    {
      quote:
        "From entity extraction to clause-level logic, the ML pipeline was built to deliver clarity and action.",
      name: "Pratyaksha Gupta",
      designation: "ML/NLP Developer",
      src: "/4.jpg",
    },
  ];

  const data = [
    {
      title: "👨‍💻 Pratham Shukla",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            Hey! I’m Pratham — a creative frontend developer who loves turning ideas into interactive, pixel-perfect interfaces.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            Currently pursuing B.Tech in <strong>Information Technology</strong> at <strong>Ajay Kumar Garg Engineering College</strong>, I hold a strong <strong>CGPA of 9.06</strong> and an even stronger passion for building great user experiences.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            I specialize in <strong>React.js</strong> and <strong>Tailwind CSS</strong>, crafting fast, responsive, and accessible SPAs. I’ve built everything from a <em>Tourism Guide SPA</em> to a smart <em>Password Generator</em> and real-time <em>Currency Converter</em>.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            My recent projects include <strong>Intellix</strong> — an intelligent form automation platform, and a sleek <strong>Music Website</strong> that blends UI design with API-powered content. I constantly explore how code can elevate user engagement.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            Tech I vibe with: <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Java</strong>, <strong>Python</strong>, and a sprinkle of <strong>C</strong>.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            Whether it’s a hackathon, portfolio project, or late-night debugging marathon — I thrive when I’m creating, learning, and collaborating.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            📧 <a href="mailto:shuklapratham28@gmail.com" className="underline text-cyan-400">shuklapratham28@gmail.com</a><br />
            🔗 <a href="https://www.linkedin.com/in/pratham-shukla-35b65a330/" target="_blank" className="underline text-cyan-400" rel="noopener noreferrer">LinkedIn</a><br />
            📞 +91 8187930650
          </p>
        </div>
      ),
    },
    {
      title: "👨‍💻 Parikshit Jaiswal",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            I&apos;m a passionate Full Stack Developer with strong experience building scalable web applications using the MERN stack. I&apos;m currently pursuing a B.Tech in Information Technology from Ajay Kumar Garg Engineering College with a CGPA of 8.32.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            I&apos;ve contributed to real-world projects at organizations like Softhire and the Computer Society of India, where I implemented responsive UI using React.js, Redux, and Tailwind CSS, integrated REST APIs with React Query, and optimized backend logic using Node.js and MongoDB.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            Some of my major projects include <strong>Hola</strong> — a social app with token-based authentication and post management — and <strong>WanderLust</strong> — a booking platform with secure login, advanced search, and dynamic listings.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            I&apos;m a DevQuest Hackathon Finalist at IIT Jodhpur and have ranked in the Top 5 in multiple national-level hackathons, including SprintHack and Hack Overflow.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            My tech stack includes JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, Docker, and more. I&apos;m passionate about clean code, collaboration, and building impactful software solutions.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            📧 <a href="mailto:parikshitjaiswal82@gmail.com" className="underline text-cyan-400">parikshitjaiswal82@gmail.com</a><br />
            🔗 <a href="https://www.linkedin.com/in/ParikshitJaiswal" target="_blank" className="underline text-cyan-400" rel="noopener noreferrer">LinkedIn</a> <br />
            📞 +91 8604734172
          </p>
        </div>
      ),
    },
    {
      title: "👨‍💻 Rifa",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            I am an enthusiastic and detail-oriented B.Tech student majoring in Information Technology at Ajay Kumar Garg Engineering College, currently holding a CGPA of 8.6. With a solid grasp of Java, Python, and C, I’m passionate about solving real-world problems through technology.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            My current focus lies in <strong>Machine Learning</strong>, <strong>Data Science</strong>, and <strong>Backend Development</strong>, where I’m actively learning and applying concepts like DSA, DBMS, and OOP. I also possess foundational experience in full-stack development and enjoy turning complex challenges into impactful solutions.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            I’m a quick learner with strong communication skills and a collaborative mindset. I’ve demonstrated leadership and creativity by winning district-level debate competitions and participating in various tech events that sharpen my problem-solving and analytical thinking.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            📧 <a href="mailto:rrifa0609@gmail.com" className="underline text-cyan-400">rrifa0609@gmail.com</a><br />
            🔗 <a href="https://www.linkedin.com/in/rifa-rafiq-636218377/" target="_blank" className="underline text-cyan-400" rel="noopener noreferrer">LinkedIn</a><br />
            📞 +91 9555909521
          </p>
        </div>
      ),
    },
    {
      title: "👨‍💻 Pratyaksha Gupta",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            I’m an enthusiastic and driven Computer Science undergraduate at Ajay Kumar Garg Engineering College, currently maintaining a CGPA of 8.4. With a strong background in programming, machine learning, and robotics, I thrive on collaborative innovation and solving complex problems with intuitive tech solutions.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            My technical skillset spans Python, C++, JavaScript, Embedded C, and interface design, along with hands-on experience using Raspberry Pi, Arduino, and MySQL. I actively pursue opportunities in automation, ML pipelines, and seamless hardware-software integration.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            As a Core Member of the College Robotics Club and a Team Programmer in <strong>Robocon 2025 (Qualified Nationals)</strong>, I’ve demonstrated my passion for teamwork, leadership, and pushing boundaries in real-world competitions.
          </p>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            📧 <a href="mailto:pratyakshagupta410@gmail.com" className="underline text-cyan-400">pratyakshagupta410@gmail.com</a><br />
            🔗 <a href="https://www.linkedin.com/in/pratyaksha-gupta-354b2133b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="underline text-cyan-400" rel="noopener noreferrer">LinkedIn</a><br />
            📞 +91 8368104343
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-12 py-32">
      <h1 className="text-4xl sm:text-6xl font-bold text-center mb-10 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
        Minds Behind ClauseLogic
      </h1>

      <p className="text-center text-neutral-400 mb-16 max-w-3xl mx-auto text-lg">
        We&apos;re a passionate group of developers, designers, and machine learning enthusiasts
        who came together to solve real-world document analysis challenges at HackRx 6.0.
      </p>

      <AnimatedTestimonials testimonials={testimonials} />

      <div className="relative w-full overflow-clip px-6 sm:px-16 py-20 bg-black text-white">
        <h1 className="text-center text-4xl sm:text-6xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">
          Team Code Blooded
        </h1>
        <Timeline data={data} />
      </div>
    </main>
  );
}
