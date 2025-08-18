// src/pages/CampusSettings.js
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CampusContext } from '../context/CampusContext';

const CampusSettings = ({ isNew = false }) => {
  const { campusId } = useParams();
  const navigate = useNavigate();
  const { campuses, addCampus, updateCampus } = useContext(CampusContext);
  const [activeTab, setActiveTab] = useState(isNew ? 'add' : 'configure');
  const [campusData, setCampusData] = useState({
    id: '',
    name: '',
    code: '',
    email: '',
    phone: '',
    description: '',
    status: 'Active',
    address: '',
    scooters: 120,
    lastActivity: '10 mins ago',
    lastUpdated: '1 day ago by Admin',
    geofence: []
  });

  useEffect(() => {
    if (campusId && !isNew) {
      const existingCampus = campuses.find(c => c.id === campusId);
      if (existingCampus) {
        setCampusData(existingCampus);
        setActiveTab('add');
      }
    } else if (isNew) {
      setCampusData({
        id: '',
        name: '',
        code: '',
        email: '',
        phone: '',
        description: '',
        status: 'Active',
        address: '',
        scooters: 120,
        lastActivity: '10 mins ago',
        lastUpdated: '1 day ago by Admin',
        geofence: []
      });
    }
  }, [campusId, isNew, campuses]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampusData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const campusToSave = {
      ...campusData,
      id: campusData.id || `campus-${Date.now()}`,
      lastUpdated: `${new Date().toLocaleDateString()} by Admin`
    };

    if (campusId) {
      updateCampus(campusId, campusToSave);
    } else {
      addCampus(campusToSave);
    }
    navigate('/campuses/settings');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Settings - Add/Edit Campus</h1>
      <p className="text-gray-600 mb-6">Register and Configure Campuses</p>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('add')}
          className={`flex-1 py-3 rounded text-lg font-medium ${
            activeTab === 'add'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          {campusId ? 'Edit Campus' : 'Add New Campus'}
        </button>
        <button
          onClick={() => setActiveTab('configure')}
          className={`flex-1 py-3 rounded text-lg font-medium ${
            activeTab === 'configure'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Configure Existing Campus
        </button>
      </div>

      {activeTab === 'add' ? (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Campus Details</h2>
          
          <form onSubmit={handleSubmit}>
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
                  placeholder="Enter Short unique identifier (e.g., UNILAQ, UI)"
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
              
              <div>
                <label className="block text-sm font-medium mb-1">Campus Status</label>
                <select
                  name="status"
                  value={campusData.status}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Number of Scooters</label>
                <input
                  type="number"
                  name="scooters"
                  value={campusData.scooters}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  min="0"
                  required
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4">Campus Location & Geofence</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Campus Address</label>
              <input
                type="text"
                name="address"
                value={campusData.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter main Address of Campus"
                required
              />
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium mb-2">Set Geofence Area</h3>
              <p className="text-sm text-gray-600 mb-4">
                Define the boundary for scooter operation. Use the poker to define your location or manually enter an address
              </p>
              
              <div className="space-y-3">
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Geofence Location 1"
                  value={campusData.geofence[0] || ''}
                  onChange={(e) => setCampusData(prev => ({
                    ...prev,
                    geofence: [e.target.value, prev.geofence[1], prev.geofence[2]]
                  }))}
                />
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Geofence Location 2"
                  value={campusData.geofence[1] || ''}
                  onChange={(e) => setCampusData(prev => ({
                    ...prev,
                    geofence: [prev.geofence[0], e.target.value, prev.geofence[2]]
                  }))}
                />
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Geofence Location 3"
                  value={campusData.geofence[2] || ''}
                  onChange={(e) => setCampusData(prev => ({
                    ...prev,
                    geofence: [prev.geofence[0], prev.geofence[1], e.target.value]
                  }))}
                />
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium mb-2">Upload GeoJSON</h3>
              <input
                type="file"
                className="w-full p-2 border rounded"
                accept=".geojson"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    console.log('GeoJSON file selected:', file);
                  }
                }}
              />
            </div>
            
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/campuses/settings')}
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              >
                {campusId ? 'Update Campus' : 'Add Campus'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Registered Campuses</h2>
          
          {/* Search + Filter */}
          <div className="flex items-center space-x-2 mb-6">
            <input
              type="text"
              placeholder="User Email, Name or ID"
              className="flex-1 p-2 border rounded"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Search User
            </button>
            <button className="border px-4 py-2 rounded">All ▾</button>
          </div>

          {/* Campus List */}
          <div className="space-y-3">
            {campuses.map(campus => (
              <div
                key={campus.id}
                className="flex items-center justify-between bg-green-50 hover:bg-green-100 p-4 rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-medium">{campus.name}</p>
                  <p className="text-sm text-gray-600">{campus.code}</p>
                </div>

                <div className="w-24">
                  <span className={`flex items-center text-sm px-2 py-1 rounded-full
                    ${campus.status === 'Active'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'}`}>
                    <span className={`h-2 w-2 rounded-full mr-2 
                      ${campus.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`} />
                    {campus.status}
                  </span>
                </div>

                <div className="w-20 text-sm">{campus.scooters}</div>
                <div className="w-32 text-sm">{campus.lastActivity}</div>
                <div className="w-40 text-sm">{campus.lastUpdated}</div>

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
