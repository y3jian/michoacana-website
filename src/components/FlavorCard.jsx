import React from "react";

export default function FlavorCard({ flavor }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-xl font-semibold">{flavor.name}</h2>
      <p className="text-gray-600">${flavor.price.toFixed(2)}</p>
    </div>
  );
}