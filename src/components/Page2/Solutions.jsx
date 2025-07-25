import React ,{useEffect}from 'react';
import { BiSolidTimer } from "react-icons/bi";
import { GiPathDistance } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Solutions.css'; 

const Solutions = () => {

  useEffect(() => {
         AOS.init({ duration: 1000 }); 
       }, []);
  const solutions = [
    {
      id: '1',
      icon: <BiSolidTimer />,
      title: 'High Endurance Flight Technology',
      description: 'Longer battery life and enhanced range for extended missions.',
    },
    {
      id: '2',
      icon: <GiPathDistance />,
      title: 'AI-powered Automation',
      description: 'Autonomous navigation and object recognition for precision operations.',
    },
    {
      id: '3',
      icon: <FaTools />,
      title: 'Modular Design',
      description: 'Customizable for military, agriculture, and logistics applications.',
    },
    {
      id: '4',
      icon: <FaSackDollar />,
      title: 'Cost-effective Manufacturing',
      description: 'Restored in the US, with NDAA Compliance ensuring high-quality standards.',
    },
    {
      id: '5',
      icon: <FaAward />,
      title: 'Award-winning R&D Facilities',
      description: 'Recognized for excellence in drone research and innovation.',
    },
    {
      id: '6',
      icon: <GrCertificate />,
      title: 'Reliable Patented Technology',
      description: 'Our patented technology, together with NDAA Compliance, ensures unmatched reliability.',
    },
  ];
  
  return (
    <div className="sol-item-container">
      <h2 className="sol-item-title" >Why Our Drones?</h2>

      <div className="sol-item-cards">
        {solutions.map((solution) => (
          <div key={solution.id} className="sol-item-card" data-aos="zoom-in">
            <div className="sol-item-icon">
              {solution.icon}
            </div>
            <h3 className="sol-item-subtitle">{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
