import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
