// components/CampusMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMemo, useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const CampusMap = () => {
  const [search, setSearch] = useState("");

  const campuses = useMemo(
    () => [
      { code: "UNICT", name: "University of Capetown", lat: -33.957, lng: 18.46, active: true },
      { code: "N/W-UNI", name: "North West University", lat: -26.706, lng: 27.097, active: true },
      { code: "UNIJ", name: "University of Johannesburg", lat: -26.188, lng: 28.012, active: true },
      { code: "UNIP", name: "Inactive Campus Example", lat: -29.85, lng: 31.02, active: false },
    ],
    []
  );

  const activeIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  const inactiveIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/463/463612.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  const filtered = campuses.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-3 text-xl font-semibold text-gray-900">
        Campus Locations (Map View)
      </h2>

      <div className="relative h-[360px] w-full overflow-hidden rounded-lg">
        {/* Map/List pill */}
        <button className="absolute left-3 top-3 z-[1000] flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow">
          <FiMapPin /> <span className="text-sm font-medium">Map</span>
        </button>

        {/* Search overlay */}
        <div className="absolute right-6
         top-3 z-[1000] w-[350px]">
          <div className="relative">
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Campus Location"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none shadow focus:border-green-500"
            />
          </div>
        </div>

        <MapContainer
          center={[-28.4793, 24.6727]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
          className="rounded-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filtered.map((campus, i) => (
            <Marker
              key={i}
              position={[campus.lat, campus.lng]}
              icon={campus.active ? activeIcon : inactiveIcon}
            >
              <Popup>
                <strong>{campus.code}</strong> - {campus.name}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="mt-3 flex  gap-8 text-[13px] font-semibold">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-600"></span>
          <span className="text-gray-600">ACTIVE CAMPUSES</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-600"></span>
          <span className="text-gray-600">INACTIVE CAMPUSES</span>
        </div>
      </div>
    </div>
  );
};

export default CampusMap;
