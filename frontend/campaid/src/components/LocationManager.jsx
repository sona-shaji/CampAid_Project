import React, { useState } from 'react';
import MapComponent from './MapComponent';
import FlaggedLocations from './FlaggedLocations';

const LocationManager = () => {
  // Predefined locations in Kochi, Kerala
  const initialLocations = [
    {
      id: '1',
      text: 'Fort Kochi Beach',
      position: [9.9658, 76.2422]
    },
    {
      id: '2',
      text: 'Chinese Fishing Nets',
      position: [9.9679, 76.2437]
    },
    {
      id: '3',
      text: 'Mattancherry Palace',
      position: [9.9577, 76.2594]
    }
  ];

  const [flaggedLocations, setFlaggedLocations] = useState(initialLocations);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationAdd = (newLocation) => {
    // Generate a unique ID for the location
    const locationWithId = {
      ...newLocation,
      id: Date.now().toString()
    };
    setFlaggedLocations([...flaggedLocations, locationWithId]);
  };

  const handleDeleteLocation = (id) => {
    setFlaggedLocations(flaggedLocations.filter(loc => loc.id !== id));
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location.position);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Disaster Information Map</h1>
      <MapComponent 
        onLocationAdd={handleLocationAdd} 
        existingMarkers={flaggedLocations}
        center={[9.9658, 76.2422]} // Center map on Kochi
        zoom={13} // Zoom level for Kochi
        selectedLocation={selectedLocation}
      />
      <FlaggedLocations 
        locations={flaggedLocations} 
        onDelete={handleDeleteLocation}
        onSelect={handleLocationSelect}
      />
    </div>
  );
};

export default LocationManager; 