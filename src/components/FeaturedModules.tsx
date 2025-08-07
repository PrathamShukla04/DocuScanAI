'use client';

import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';

const modules = [
  {
    id: 1,
    title: 'Automated Document Analysis',
    slug: 'document-analysis',
    description:
      'Upload PDF or DOCX files to automatically analyze policies, contracts, or forms using AI — no manual reading needed.',
  },
  {
    id: 2,
    title: 'Approval & Amount Detection',
    slug: 'approval-money',
    description:
      'Extract approval decisions and associated monetary values, such as claims, reimbursements, or payouts.',
  },
  {
    id: 3,
    title: 'Clause-Based Justification',
    slug: 'justification',
    description:
      'Understand the reason behind each decision with clause-specific justifications, improving compliance and transparency.',
  },
];

function ClauseLogic() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="text-center mb-12 px-4">
        <h2 className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
          ClauseLogic AI Modules
        </h2>
        <p className="text-3xl sm:text-4xl font-bold mt-2">
          Making Document Decisions Smarter
        </p>
        <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          ClauseLogic enables intelligent processing of contracts, insurance documents, and policies to help users get approvals, financial outcomes, and explanations — all in seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {modules.map((module) => (
          <div key={module.id} className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden max-w-sm w-full transition-transform hover:scale-[1.02]">
              <div className="p-6 text-center flex flex-col h-full">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  {module.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 flex-grow">
                  {module.description}
                </p>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClauseLogic;
