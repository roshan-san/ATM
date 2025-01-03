'use client';

import React, { useState } from 'react';
import { AtmCard } from './_components/atm-card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = () => {
    setMounted(true);
  };

  const handleCardRemove = () => {
    setMounted(false);
    router.push('/dashboard/')
  };
  const router= useRouter()


  return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="flex flex-col gap-8 items-center bg-black p-8 rounded-xl shadow-2xl w-[380px] max-w-full border-4 border-green-500">
          
          {/* Screen */}
          <div className="h-[320px] w-full rounded-lg p-6 shadow-lg border-4 text-white border-gray-600">
            {mounted ? (
              children
            ) : (
              <p className="text-center text-white text-xl"> Please Insert Your Card </p>
            )}
          </div>

          {/* Slot */}
          <div className="flex justify-evenly items-center w-full space-x-4">
            <p className="text-white font-semibold">card slot:</p>
            <div
              className={`w-24 h-4 hover:scale-110 border-2 rounded-lg transition-all duration-300 ease-in-out transform ${
                mounted ? 'border-white bg-red-600 w-36 shadow-xl' : 'border-white bg-gray-800'
              }`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={handleCardRemove}
            />
          </div>

          {/* Card Section */}
          <div>{!mounted && <AtmCard />}</div>

          {!mounted && (
            <Button
              className="sm:hidden bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-colors duration-300"
              onClick={handleDrop}
            >
              Insert Card
            </Button>
          )}
        </div>
      </div>
  );
}
