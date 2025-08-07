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
