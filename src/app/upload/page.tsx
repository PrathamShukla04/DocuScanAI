"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
    if (!query.trim()) return alert("Please enter a query");
    if (!domain.trim()) return alert("Please select a domain");

    const reader = new FileReader();
    reader.onload = async () => {
      let base64String = "";
      const fileContent = reader.result;
      // If result is a data URL, extract base64 part
      if (typeof fileContent === "string" && fileContent.startsWith("data:")) {
        base64String = fileContent.split(",")[1];
      } else if (typeof fileContent === "string") {
        // fallback for text files
        base64String = btoa(unescape(encodeURIComponent(fileContent)));
      }

      setLoading(true);
      try {
        const res = await fetch("https://beeb81367099.ngrok-free.app/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            domain,
            documents: [base64String],
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

    // Use readAsDataURL for all files to get base64
    reader.readAsDataURL(file);
  };

  return (
    <main className="min-h-screen bg-black text-white py-32 px-6 flex flex-col items-center justify-start">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400"
      >
        Upload Your Document
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-neutral-400 text-center mb-10 max-w-2xl"
      >
        Choose a .pdf, .docx, or .txt file — and let AI break it down into key
        insights, summaries, or highlights in seconds.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border border-neutral-700 p-4 rounded-xl mb-6 w-full max-w-md bg-neutral-900"
      >
        <div className="mb-4">
          <label className="block mb-1 text-neutral-300 font-medium">
            Query
          </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Summarize this document"
            className="w-full px-3 py-2 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-neutral-300 font-medium">
            Domain
          </label>
          <select
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full px-3 py-2 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-emerald-500"
          >
            <option value="">Select domain</option>
            <option value="insurance">Insurance</option>
            <option value="legal">Legal</option>
            <option value="hr">HR</option>
            <option value="contract_management">Contract Management</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-neutral-300 font-medium">
            Document
          </label>
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={handleChange}
            className="file:px-4 file:py-2 file:rounded-full file:border-0 file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 cursor-pointer transition-all w-full"
          />
        </div>
        {file && (
          <p className="mt-2 text-sm text-neutral-300 border-t border-neutral-700 pt-3">
            📄 Selected:{" "}
            <span className="text-white font-medium">{file.name}</span>
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
          <h2 className="text-lg font-semibold mb-3 text-white">
            📊 Analysis Result:
          </h2>
          <pre className="text-sm text-neutral-200 whitespace-pre-wrap break-words">
            {response}
          </pre>
        </motion.div>
      )}
    </main>
  );
}

export default UploadPage;
