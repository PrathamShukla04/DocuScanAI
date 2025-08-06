'use client';

import React, { useState } from 'react';
import { Vortex } from '@/components/ui/vortex';
import emailjs from 'emailjs-com';

function MusicSchoolContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(false);
    setError('');

    const templateParams = {
  name: email, // or use a separate name field
  email: email,
  message: message,
  title: 'Contact Request from Site',
};

try {
  const result = await emailjs.send(
    'Service@123',         // ✅ e.g., service_acqecvo
    'template_xc4yrdh',        // ✅ Confirmed from screenshot
    templateParams,
    'Sg01-5sTCjBAHlYkE'        // ✅ Your public key
  );
  console.log(result.text);
  setSent(true);
  setEmail('');
  setMessage('');
} catch (err: any) {
  console.error("EmailJS error:", err?.text || err?.message || err);
  setError('Something went wrong. Please try again.');
}

  };

  return (
    <Vortex backgroundColor="#000000">
      <div className="min-h-screen py-12 pt-36">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
          </h1>
          <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center">
            Have questions, suggestions, or feedback? Drop us a message and we'll get back to you soon!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
              rows={5}
              required
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Message
            </button>
            {sent && <p className="text-green-500 mt-2">✅ Message sent successfully!</p>}
            {error && <p className="text-red-500 mt-2">❌ {error}</p>}
          </form>
        </div>
      </div>
    </Vortex>
  );
}

export default MusicSchoolContactUs;
