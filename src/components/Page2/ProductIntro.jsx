import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCaretDown } from 'react-icons/fa';
import './ProductIntro.css';

const ProductIntro = () => {
  const [expanded, setExpanded] = useState(null);
  const dropdownRefs = useRef({});

  const toggleDropdown = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleScrollToDrone = (droneId) => {
    const el = document.getElementById(droneId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setExpanded(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if we clicked outside of any dropdown
      const clickedOutside = Object.values(dropdownRefs.current).every(ref => 
        ref && !ref.contains(event.target)
      );
      
      if (clickedOutside) {
        setExpanded(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dronesByCategory = {
    logistics: [
      { name: 'Think Titan15', id: '1' },
      { name: 'Think Titan20', id: '2' },
      { name: 'Think Titan25', id: '3' },
    ],
    vtol: [
      { name: 'Think VTOL Striker', id: '4' },
      { name: 'Think VTOL IronReach', id: '5' },
    ],
    surveillance: [
      { name: 'Think FalconEye', id: '6' },
      { name: 'Think TraceOne', id: '7' },
      { name: 'Think ReconNova', id: '8' },
    ],
    agriculture: [
      { name: 'Think AgriMist10', id: '9' },
      { name: 'Think AgriMist16', id: '10' },
    ],
    Tethered: [
      { name: 'Think TetherOps', id: '11' },
    ],
    Mining: [
      { name: 'ThinkGeo', id: '12' },
    ],
    Custom: [
      { name: 'Think Custom Drones', id: '13'},
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-intro" id="product-intro">
      <div className="product-intro-text">
        <h2 className="product-title">Introducing Our Latest Drone</h2>
        <p className="product-description">
          Our flagship high-performance drone is engineered for efficiency, reliability, and precision.
          Designed to meet the diverse needs of sectors such as agriculture, surveillance, and logistics, it
          delivers unparalleled operational value. We also offer bespoke drone solutions tailored to
          specific client requirements.
        </p>

        <div className="product-btns">
          {Object.keys(dronesByCategory).map((category) => (
            <div 
              className="dropdown-group" 
              key={category}
              ref={el => dropdownRefs.current[category] = el}
            >
              <button className="learn-more-button" onClick={() => toggleDropdown(category)}>
                {category.toUpperCase()}
                <FaCaretDown className={`caret-icon ${expanded === category ? 'rotate' : ''}`} />
              </button>
              {expanded === category && (
                <motion.ul
                  className="dropdown-list"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {dronesByCategory[category].map((drone, i) => (
                    <li
                      key={i}
                      className="dropdown-item"
                      onClick={() => handleScrollToDrone(drone.id)}
                    >
                      {drone.name}
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="product-intro-image">
        <img src="/assets/multi.webp" alt="Drone" className="product-image" />
      </div>
    </div>
  );
};

export default ProductIntro;