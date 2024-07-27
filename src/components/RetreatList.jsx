import Image from "next/image";
import React from "react";

const RetreatList = ({ retreats }) => {
  if (!retreats || !retreats.length === 0) {
    return <div className="text-center mt-8">No Retreats Found.</div>;
  }

  return (
    <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {retreats.map((retreat) => (
        <div
          key={retreat.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={retreat.image}
            alt={retreat.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{retreat.title}</h2>
            <p className="text-gray-600 mb-2">{retreat.description}</p>
            <p className="text-sm text-gray-500 mb-1">Date: {retreat.date}</p>
            <p className="text-sm text-gray-500 mb-1">
              Location: {retreat.location}
            </p>
            <p className="text-lg font-bold text-green-600">
              Price: ${retreat.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RetreatList;
