import React from "react";

const MOCK_STATS = [
  { flavor: "Vanilla", views: 128 },
  { flavor: "Chocolate", views: 102 },
];

export default function Admin() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">📊 Admin Dashboard</h1>
      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-pink-100">
          <tr>
            <th className="text-left p-2">Flavor</th>
            <th className="text-left p-2">Views</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_STATS.map((stat, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{stat.flavor}</td>
              <td className="p-2">{stat.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
