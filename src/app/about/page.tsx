'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 sm:px-16 pt-40 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 mb-10"
      >
        About DocuScan AI
      </motion.h1>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-6 text-lg text-neutral-300 leading-[1.8] max-w-5xl mx-auto text-center"
      >
        <p>
          <strong className="text-white">DocuScan AI</strong> is a smart document processing and summarization tool built during a national-level hackathon. It aims to make comprehension of large files seamless, fast, and intelligent.
        </p>
        <p>
          Whether it&apos;s a DOCX, PDF, or plain text, the system parses and processes documents using AI to extract highlights, generate summaries, and allow interactive exploration — making it ideal for researchers, students, and working professionals.
        </p>
        <p>
          The app was designed to blend ML intelligence with a user-first interface — offering a clean, dark-themed UI with animations, responsive layout, and real-time feedback capabilities.
        </p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Key Technologies</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 list-disc list-inside text-neutral-200 text-base">
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
          <li>LangChain</li>
          <li>FAISS</li>
          <li>Unstructured.io</li>
          <li>FastAPI (Python)</li>
          <li>OpenAI APIs</li>
          <li>EmailJS</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Our Team</h2>
        <ul className="text-neutral-200 text-base space-y-2">
          <li>👨‍💻 <strong className="text-white">Pratham Shukla</strong> – Frontend & UI/UX Developer</li>
          <li>👨‍💻 <strong className="text-white">Parikshit Jaiswal</strong> – Backend & API Developer</li>
          <li>🧠 <strong className="text-white">Rifa</strong> – ML/NLP Developer</li>
          <li>🧠 <strong className="text-white">Pratyaksha Gupta</strong> – ML/NLP Developer</li>
        </ul>
      </motion.div>
    </main>
  );
}
