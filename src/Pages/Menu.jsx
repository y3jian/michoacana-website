import React from "react";
import FlavorCard from "../components/FlavorCard";

const FLAVORS = [
  { id: 1, name: "Vanilla", price: 3.5 },
  { id: 2, name: "Chocolate", price: 4.0 },
  { id: 3, name: "Strawberry", price: 3.75 },
  { id: 4, name: "Mango", price: 4.5 },
  { id: 5, name: "Bubblegum", price: 4.25 },
];

export default function Menu() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">🍨 Our Flavors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {FLAVORS.map(flavor => (
          <FlavorCard key={flavor.id} flavor={flavor} />
        ))}
      </div>
    </div>
  );
}
