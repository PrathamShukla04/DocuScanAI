'use client';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaDocker,
  FaCode,
  FaCloud,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiVercel,
  SiExpress,
  SiFastapi,
} from 'react-icons/si'; // ✅ Removed SiVisualstudiocode

import { MdEmail } from 'react-icons/md';

const stack = [
  {
    title: 'Frontend',
    techs: [
      { name: 'Next.js', icon: <SiNextdotjs className="text-white text-4xl" /> },
      { name: 'React.js', icon: <FaReact className="text-blue-400 text-4xl" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
      { name: 'Aceternity UI', icon: <FaCode className="text-pink-400 text-4xl" /> },
      { name: 'EmailJS', icon: <MdEmail className="text-red-400 text-4xl" /> },
    ],
  },
  {
    title: 'Backend / API',
    techs: [
      { name: 'Express.js', icon: <SiExpress className="text-gray-300 text-4xl" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-green-400 text-4xl" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    ],
  },
  {
    title: 'ML / Processing',
    techs: [
      { name: 'Python', icon: <FaPython className="text-yellow-400 text-4xl" /> },
      { name: 'LangChain', icon: <FaCode className="text-blue-400 text-4xl" /> },
      { name: 'FAISS', icon: <FaCode className="text-purple-400 text-4xl" /> },
      { name: 'ByPDF', icon: <FaCode className="text-green-400 text-4xl" /> },
      { name: 'Unstructured.io', icon: <FaCode className="text-orange-300 text-4xl" /> },
    ],
  },
  {
    title: 'Cloud & DevOps',
    techs: [
      { name: 'GCP (Google Cloud)', icon: <FaCloud className="text-blue-300 text-4xl" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-400 text-4xl" /> },
      { name: 'GitHub', icon: <FaGithub className="text-gray-200 text-4xl" /> },
      { name: 'Vercel', icon: <SiVercel className="text-white text-4xl" /> },
    ],
  },
  {
    title: 'Dev Tools',
    techs: [
      { name: 'Google Colab', icon: <FaCode className="text-yellow-300 text-4xl" /> },
    ],
  },
];

export default function TechStackPage() {
  return (
    <div className="min-h-screen py-36 px-6 bg-black text-white flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">
        ⚙️ Tech Stack Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {stack.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6, type: 'spring' }}
            className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
              {section.title}
            </h2>

            <ul className="space-y-3">
              {section.techs.map((tech) => (
                <li key={tech.name} className="flex items-center gap-4">
                  {tech.icon}
                  <span className="text-lg">{tech.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
