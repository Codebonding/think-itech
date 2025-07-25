import React from "react";
import { FaJetFighterUp } from "react-icons/fa6";

const UpButton = () => {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={goTop}
      style={{
        height: '50px',
        width: '50px',
        position: 'fixed', 
        bottom: '20px',
        right: '20px',
        borderRadius: '50%',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      <FaJetFighterUp size={24} />
    </button>
  );
};

export default UpButton;
