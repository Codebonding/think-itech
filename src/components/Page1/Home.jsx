import React, { useEffect } from 'react';
import './home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/assets/bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="home-content">
        <img src='/assets/think.webp' className='think-logo' alt="Think Logo" />
        <p className="home-description">
          At Think ITECH, we're more than tech pioneers—we're problem-solvers shaping the future of aerospace with advanced drone manufacturing. Based in the United States, we are transforming industries through cutting-edge innovation in autonomous UAV systems.
        </p>
      </div>
      
        <img src="/assets/mo.webp" alt="Made in Usa" className="made-in-usa" />
    </div>
  );
};

export default Home;
