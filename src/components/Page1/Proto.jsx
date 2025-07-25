import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Proto.css';

const droneData = [
  { id: '7', name: 'Think TraceOne', type: 'Surveillance Drone', image: '/assets/l4.webp' },
  { id: '8', name: 'Think ReconNova', type: 'Surveillance Drone', image: '/assets/l6.webp' },
  { id: '6', name: 'Think FalconEye', type: 'Surveillance Drone', image: '/assets/l9.webp' },
  { id: '1', name: 'Think Titan15', type: 'Logistics Drone', image: '/assets/l3.webp' },
  { id: '2', name: 'Think Titan20', type: 'Logistics Drone', image: '/assets/l5.webp' },
  { id: '3', name: 'Think Titan25', type: 'Logistics Drone', image: '/assets/l1.webp' },
  { id: '5', name: 'Think VTOL IronReach', type: 'Logistics Drone', image: '/assets/l12.webp' },
  { id: '4', name: 'Think VTOL Striker', type: 'Swarm Drone', image: '/assets/l7.webp' },
  { id: '11', name: 'Think TetherOps', type: 'Tethered Drone', image: '/assets/l10.webp' },
  { id: '12', name: 'ThinkGeo', type: 'Mining Drone', image: '/assets/l11.webp' },
  { id: '9', name: 'Think AgriMist10', type: 'Agriclutural Drone', image: '/assets/l8.webp' },
  { id: '10', name: 'Think AgriMist16', type: 'Agriclutural Drone', image: '/assets/l2.webp' },
];

const Prototype = () => {
  const navigate = useNavigate();

  const handleDroneClick = (id) => {
    navigate(`/product#${id}`);
  };

  return (
    <div className="prototype-container">
      <h2 className="prototype-title">Think ITech UAV - Product Range in Production</h2>
      <div className="prototype-row-wrapper">
        {droneData.map((drone, index) => (
          <div 
            className="prototype-card" 
            key={index}
            onClick={() => handleDroneClick(drone.id)}
            style={{ cursor: 'pointer' }}
          >
            <img src={drone.image} alt={drone.name} className="prototype-image" />
            <h3 className="prototype-name">{drone.name}</h3>
            <h2 className="prototype-type">{drone.type}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prototype;