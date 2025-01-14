import React from 'react';

export const Loading = () => {
  return (
    <div className="flex justify-center items-center scale-75">
      <div className="spinner border-t-4 border-green-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};
