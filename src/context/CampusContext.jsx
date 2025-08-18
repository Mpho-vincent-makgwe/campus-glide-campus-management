// src/context/CampusContext.js
import { createContext, useState } from 'react';

export const CampusContext = createContext();

export const CampusProvider = ({ children }) => {
  const [campuses, setCampuses] = useState([
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
    }
  ]);

  const addCampus = (newCampus) => {
    setCampuses([...campuses, newCampus]);
  };

  const updateCampus = (id, updatedCampus) => {
    setCampuses(campuses.map(campus => campus.id === id ? updatedCampus : campus));
  };

  return (
    <CampusContext.Provider value={{ campuses, addCampus, updateCampus }}>
      {children}
    </CampusContext.Provider>
  );
};