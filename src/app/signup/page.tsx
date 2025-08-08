'use client';

import React from 'react';
import { AuroraBackgroundDemo } from '../../components/background';
import { SignupFormDemo } from '../../components/SignupFormDemo'; 

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
      <SignupFormDemo />
    </div>
  );
}
// "use client";
// import React, { useState } from "react";

// export default function SignupPage() {
//   const [form, setForm] = useState({ fullName: "", email: "", password: "" });
//   const [message, setMessage] = useState("");

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     const res = await fetch("/api/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });
//     const data = await res.json();
//     setMessage(data.message);
//   }

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           className="border p-2 w-full"
//           placeholder="Full Name"
//           onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//         />
//         <input
//           className="border p-2 w-full"
//           placeholder="Email"
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />
//         <input
//           type="password"
//           className="border p-2 w-full"
//           placeholder="Password"
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />
//         <button className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
//       </form>
//       {message && <p className="mt-4">{message}</p>}
//     </div>
//   );
// }
