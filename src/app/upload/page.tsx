"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { StarsBackground } from "../../components/ui/stars-background";
import { ShootingStars } from "../../components/ui/shooting-stars";

function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResponse(null); // Clear previous result
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const reader = new FileReader();
    reader.onload = async () => {
      const fileContent = reader.result;

      setLoading(true);
      try {
        const res = await fetch("https://beeb81367099.ngrok-free.app/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            document: fileContent,
            filename: file.name,
          }),
        });

        const data = await res.json();
        setResponse(JSON.stringify(data, null, 2));
      } catch (error) {
        console.error("Error uploading:", error);
        setResponse("❌ An error occurred while uploading.");
      } finally {
        setLoading(false);
      }
    };

    reader.readAsText(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-32 flex flex-col items-center justify-start relative">
      <ShootingStars />
      <StarsBackground />

      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Upload Your Document <br /> Let AI Do The Work
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-neutral-400 text-center mb-10 max-w-2xl mt-4"
      >
        Upload your PDF or DOCX files — ClauseLogic will extract approvals, monetary amounts,
        and clause-level justification instantly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border border-neutral-700 p-4 rounded-xl mb-6 w-full max-w-md bg-neutral-900"
      >
        <input
          type="file"
          accept=".pdf,.docx"
          ref={fileInputRef}
          onChange={handleChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={triggerFileInput}
          className="w-full text-center bg-emerald-600 py-2 px-4 rounded-full text-white cursor-pointer hover:bg-emerald-700 transition"
        >
          Choose File
        </button>

        {file && (
          <p className="mt-4 text-sm text-neutral-300 border-t border-neutral-700 pt-3">
            📄 Selected: <span className="text-white font-medium">{file.name}</span>
          </p>
        )}
      </motion.div>

      <motion.button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-40"
        whileHover={{ scale: !loading && file ? 1.05 : 1 }}
        whileTap={{ scale: 0.95 }}
      >
        {loading ? "⏳ Analyzing..." : "Upload & Analyze"}
      </motion.button>

      {response && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 w-full max-w-4xl bg-neutral-900 border border-neutral-700 p-6 rounded-lg shadow-inner overflow-auto max-h-[500px]"
        >
          <h2 className="text-lg font-semibold mb-3 text-white">📊 Analysis Result:</h2>
          <pre className="text-sm text-neutral-200 whitespace-pre-wrap break-words">
            {response}
          </pre>
        </motion.div>
      )}
    </main>
  );
}

export default UploadPage;

