import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Explore.css';
import { GiBigGear } from "react-icons/gi"; 

const Explore = () => {
  const navigate = useNavigate();

  const goToProductPage = () => {
    navigate('/product'); 
  };

  return (
    <div className="product-section">
      <div className="gear-icon-container">
        <GiBigGear className="gear-icon" />
      </div>
      <h1>Explore Our Products</h1>
      <p>
        At Think ITECH, we provide high-performance UAVs designed to meet your needs in agriculture, surveillance, and more. 
        Discover the future of drone technology.
      </p>
      <button className="product-button" onClick={goToProductPage}>
        Go to Product Page
      </button>
    </div>
  );
};

export default Explore;
