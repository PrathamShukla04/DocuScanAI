'use client'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { StarsBackground } from "../../components/ui/stars-background";
import { ShootingStars } from "../../components/ui/shooting-stars";

export default function UploadPage() {
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState('')
  const [sessionId, setSessionId] = useState("");
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setSelectedFile(file || null)
  }

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const result = reader.result as string
        const base64 = result.split(',')[1]
        resolve(base64)
      }
      reader.onerror = error => reject(error)
    })
  }

  const handleUpload = async () => {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
      
  if (!selectedFile) {
    alert('Please select a file before uploading.')
    return
  }

  setUploading(true)

  try {
    const formData = new FormData()
    // 🔑 The key must be "files" (plural) to match backend
    formData.append("files", selectedFile)

    const response = await fetch(`${API_BASE}/upload`, {
      method: "POST",
      body: formData, // no headers needed, browser sets them
    })

    const data = await response.json()

    if (response.ok) {
      setUploadSuccessMessage("✅ Upload successful!")
    } else {
      setUploadSuccessMessage(`❌ Upload failed: ${data.error || "Unknown error"}`)
    }

    if (data.session_id) {
      setSessionId(data.session_id)
    }
  } catch (error) {
    alert(`❌ Error during upload: ${error}`)
  } finally {
    setUploading(false)
  }
}


  const handleQuery = async () => {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
      
    if (!query.trim()) return;

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          session_id: sessionId,
        }),
      });

      const data = await res.json();
      console.log("Query Response:", data);

      setAnswer(data.answer || "No answer found.");
    } catch (error) {
      console.error("Error handling query:", error);
      setAnswer("❌ Error while fetching answer.");
    } finally {
      setLoading(false);
    }
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

      {/* Upload Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border border-neutral-700 p-4 rounded-xl mb-6 w-full max-w-md bg-neutral-900"
      >
        <input
          type="file"
          onChange={handleFileChange}
          className="hover:cursor-pointer border border-gray-400 rounded p-1 mb-2 w-full"
        />

        <button
          onClick={handleUpload}
          className="hover:cursor-pointer bg-blue-600 text-white px-4 py-2 rounded mb-4 w-full"
          disabled={uploading}
        >
          {uploading ? '⏳ Uploading...' : 'Upload'}
        </button>

        {uploadSuccessMessage && (
          <p className="mt-2 text-sm">{uploadSuccessMessage}</p>
        )}
      </motion.div>

      {/* Query Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border border-neutral-700 p-4 rounded-xl mb-6 w-full max-w-md bg-neutral-900"
      >
        <label className="block mb-2 font-semibold">Ask your query:</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., What is healthy baby expense?"
          className="w-full p-2 border rounded mb-4 text-white"
        />
        <button
          onClick={handleQuery}
          className="hover:cursor-pointer bg-green-600 text-white px-4 py-2 rounded w-full"
          disabled={loading}
        >
          {loading ? '⏳ Asking...' : 'Ask'}
        </button>

        {answer && (
          <div className="mt-6 bg-gray-100 p-4 rounded text-black">
            <h2 className="font-bold mb-2">📢 Answer:</h2>
            <p>{answer}</p>
          </div>
        )}
      </motion.div>
    </main>
  )
}
