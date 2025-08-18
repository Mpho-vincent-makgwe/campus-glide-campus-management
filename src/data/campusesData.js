// src/data/campusesData.js
export const campuses = [
  {
    id: 'unic',
    name: 'University of Capetown',
    code: 'UNIC',
    status: 'Active',
    email: 'admin@unic.edu',
    phone: '+1234567890',
    description: 'Main campus in Cape Town',
    address: 'Cape Town, South Africa',
    scooters: 120,
    lastActivity: '10 mins ago',
    lastUpdated: '1 day ago by Admin'
  },
  {
    id: 'unij',
    name: 'University of Johannesburg',
    code: 'UNIJ',
    status: 'Active',
    email: 'admin@unij.edu',
    phone: '+1234567890',
    description: 'Main campus in Johannesburg',
    address: 'Johannesburg, South Africa',
    scooters: 120,
    lastActivity: '10 mins ago',
    lastUpdated: '1 day ago by Admin'
  },
  // Add other campuses similarly
];

export const getCampusById = (id) => {
  return campuses.find(campus => campus.id === id);
};