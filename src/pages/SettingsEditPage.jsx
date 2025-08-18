import { useState } from "react";

export default function SettingsEditPage() {
  const [search, setSearch] = useState("");

  const campuses = [
    { name: "UWC", code: "UWC001", status: "Active", scooters: 23, lastActivity: "2h ago", updated: "2023-12-12" },
    { name: "Stellenbosch", code: "STB002", status: "Suspended", scooters: 15, lastActivity: "5d ago", updated: "2023-12-08" },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Toggle Tabs */}
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-lg font-medium border bg-white text-black border-gray-300">
          Add New Campus
        </button>
        <button className="px-6 py-2 rounded-lg font-medium border bg-black text-white">
          Configure Existing Campus
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
        {/* Search & Filters */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search campuses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-4 py-2 w-1/3"
          />
          <select className="border rounded-lg px-4 py-2">
            <option>All Status</option>
            <option>Active</option>
            <option>Suspended</option>
          </select>
        </div>

        {/* Campus Table */}
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Code</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Scooters</th>
              <th className="px-6 py-3">Last Activity</th>
              <th className="px-6 py-3">Last Updated</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {campuses.map((c, idx) => (
              <tr
                key={c.code}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="px-6 py-4">{c.name}</td>
                <td className="px-6 py-4">{c.code}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      c.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="px-6 py-4">{c.scooters}</td>
                <td className="px-6 py-4">{c.lastActivity}</td>
                <td className="px-6 py-4">{c.updated}</td>
                <td className="px-6 py-4">
                  <button className="text-green-600 hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Export Button */}
        <div className="flex justify-end mt-6">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md">
            Export List
          </button>
        </div>
      </div>
    </div>
  );
}
