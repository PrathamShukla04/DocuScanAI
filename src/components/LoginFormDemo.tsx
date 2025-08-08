"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/utils/cn";
import { signIn } from 'next-auth/react';

export function LoginFormDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
   const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};


  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm  bg-white p-6 rounded-lg shadow-lg"
    >
      <div className=" shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Login to your ClauseLogic account
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Enter your login details to access ClauseLogic.
      </p>
      

        <label htmlFor="email" className="block text-l font-medium text-gray-700">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="ENTER YOUR EMAIL ID"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password" className="block text-l font-medium text-gray-700">
          Password
        </label>
        <Input
          id="password"
          type="password"
          placeholder="ENTER YOUR PASSWORD"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>

      
    <button
          type="submit"
          disabled={loading}
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
        >
          {loading ? "Logging in..." : "Login →"}
          <BottomGradient />
        </button>

        {message && (
          <p className="mt-3 text-sm text-center text-red-500 dark:text-red-400">
            {message}
          </p>
        )}

        <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
          New to ClauseLogic?{" "}
          <a href="/signup" className="text-cyan-500 hover:underline">
            Sign Up
          </a>
        </p>


    </form>
  );
}

