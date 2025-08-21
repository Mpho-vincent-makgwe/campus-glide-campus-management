// src/pages/CampusSettings.js
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CampusContext } from "../context/CampusContext";
import { FiSearch, FiUpload, FiMapPin } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CampusSettings = ({ isNew = false }) => {
  const { campusId } = useParams();
  const navigate = useNavigate();
  const { campuses, addCampus, updateCampus } = useContext(CampusContext);

  const [activeTab, setActiveTab] = useState(isNew ? "add" : "configure");
  const [campusData, setCampusData] = useState({
    id: "",
    name: "",
    code: "",
    email: "",
    phone: "",
    description: "",
    status: "Suspended",
    address: "",
    geofence: [],
    location: [51.505, -0.09], // default map center
  });

  useEffect(() => {
    if (campusId && !isNew) {
      const existingCampus = campuses.find((c) => c.id === campusId);
      if (existingCampus) {
        setCampusData(existingCampus);
        setActiveTab("add");
      }
    }
  }, [campusId, isNew, campuses]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampusData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (status) => {
    setCampusData((prev) => ({ ...prev, status }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const campusToSave = {
      ...campusData,
      id: campusData.id || `campus-${Date.now()}`,
    };

    if (campusId) {
      updateCampus(campusId, campusToSave);
    } else {
      addCampus(campusToSave);
    }
    navigate("/campuses/settings");
  };

  // Handle Map Click to set marker
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setCampusData((prev) => ({ ...prev, location: [e.latlng.lat, e.latlng.lng] }));
      },
    });
    return campusData.location ? <Marker position={campusData.location} /> : null;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Add/Edit Campus</h1>
      <p className="text-gray-600 mb-6">Register and Configure Campuses</p>

      {/* Tabs */}
      <div className="flex mb-6 rounded-full overflow-hidden border">
        <button
          onClick={() => setActiveTab("add")}
          className={`flex-1 py-3 text-lg font-medium ${
            activeTab === "add"
              ? "bg-black text-white"
              : "bg-white text-gray-700"
          }`}
        >
          Add New Campus
        </button>
        <button
          onClick={() => setActiveTab("configure")}
          className={`flex-1 py-3 text-lg font-medium ${
            activeTab === "configure"
              ? "bg-green-500 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          Configure Existing Campus
        </button>
      </div>

      {activeTab === "add" ? (
        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit}>
            {/* Campus Details */}
            <h2 className="text-xl font-semibold mb-4">Campus Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium mb-1">Campus Name</label>
                <input
                  type="text"
                  name="name"
                  value={campusData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter Full Official Name of School"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Campus Code</label>
                <input
                  type="text"
                  name="code"
                  value={campusData.code}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter Short unique identifier (e.g., UNILAG, UI)"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Campus Contact Email</label>
                <input
                  type="email"
                  name="email"
                  value={campusData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter Campus Admin Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Campus Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={campusData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter Campus Phone Number"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Campus Description</label>
                <textarea
                  name="description"
                  value={campusData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter short Description of Campus or short note"
                  rows="3"
                />
              </div>
              <div className="flex items-center space-x-6">
                <label className="block text-sm font-medium">Campus Status</label>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={campusData.status === "Active"}
                      onChange={() => handleStatusChange("Active")}
                    />
                    <span>Active</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={campusData.status === "Suspended"}
                      onChange={() => handleStatusChange("Suspended")}
                    />
                    <span>Suspended</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Campus Location & Geofence */}
            <h2 className="text-xl font-semibold mb-4">Campus Location & Geofence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Campus Address</label>
                <input
                  type="text"
                  name="address"
                  value={campusData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded mb-6"
                  placeholder="Enter main Address of Campus"
                  required
                />

                <h3 className="font-medium mb-2">Set Geofence Area</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Define the boundary for scooter operation. Use the picker to define your location or manually enter an address
                </p>
                <div className="space-y-3">
                  {[0, 1, 2].map((i) => (
                    <input
                      key={i}
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder={`Geofence Location ${i + 1}`}
                      value={campusData.geofence[i] || ""}
                      onChange={(e) =>
                        setCampusData((prev) => {
                          const updated = [...prev.geofence];
                          updated[i] = e.target.value;
                          return { ...prev, geofence: updated };
                        })
                      }
                    />
                  ))}
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">Upload GeoJSON</h3>
                  <label className="flex items-center px-4 py-2 border rounded cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <FiUpload className="mr-2" /> Upload Here
                    <input type="file" className="hidden" accept=".geojson" />
                  </label>
                </div>
              </div>

              {/* Map */}
              <div className="relative h-80 w-full border rounded">
                {/* Search bar */}
                <div className="absolute top-2 left-2 right-2 z-10 flex items-center bg-white border rounded px-2 py-1 shadow">
                  <FiSearch className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter Campus Location"
                    className="flex-1 outline-none"
                  />
                </div>

                <MapContainer
                  center={campusData.location}
                  zoom={13}
                  scrollWheelZoom={false}
                  className="h-full w-full rounded"
                >
                  <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <LocationMarker />
                </MapContainer>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-8">
              <button
                type="button"
                onClick={() => navigate("/campuses/settings")}
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              >
                {campusId ? "Update Campus" : "Add Campus"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Registered Campuses</h2>
          <div className="space-y-3">
            {campuses.map((campus) => (
              <div
                key={campus.id}
                className="flex items-center justify-between bg-green-50 hover:bg-green-100 p-4 rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-medium">{campus.name}</p>
                  <p className="text-sm text-gray-600">{campus.code}</p>
                </div>
                <div className="w-24">
                  <span
                    className={`flex items-center text-sm px-2 py-1 rounded-full ${
                      campus.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full mr-2 ${
                        campus.status === "Active"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    />
                    {campus.status}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => navigate(`/campuses/settings/${campus.id}`)}
                    className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Edit ⚙️
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Export Button */}
          <div className="mt-6">
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Export List
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampusSettings;
