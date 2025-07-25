import React ,{useEffect}from 'react';
import './Application.css'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const Application = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
    
  const categories = [
    {
      title: 'Law Enforcement & Public Safety',
      items: [
        { title: 'Crime Prevention & Investigation', description: 'Drones enhance surveillance and support investigation efforts to prevent and solve crimes.' },
        { title: 'Crowd Monitoring & Riot Control', description: 'Drones provide crowd management, social safety and well-being during large events.' },
        { title: 'Search & Rescue Operations', description: 'Drones assist in locating missing persons and providing emergency response in challenging environments.' },
      ],
    },
    {
      title: 'Corporate & Commercial Security',
      items: [
          { title: 'Retail & Event Security', description: 'Providing enhanced security for retail spaces and large events with real-time surveillance.' },
          { title: 'Perimeter Security & Facility Monitoring', description: 'Drones monitor facilities and secure perimeters to prevent unauthorized access.' },
        { title: 'Banking & Financial Institutions', description: 'Utilized for securing financial institutions and monitoring ATM locations remotely.' },
      ],
    },
    {
      title: 'Construction & Infrastructure',
      items: [
        { title: 'Surveying & Mapping', description: 'Drones create high-resolution maps and 3D models for pre-construction planning and land surveys.' },
        { title: 'Construction Monitoring & Progress Tracking', description: 'Used for monitoring construction progress and providing visual reports to stakeholders.' },
        { title: 'Safety & Inspection', description: 'Drones inspect hazardous areas, such as bridges and buildings, to detect structural issues.' },
      ],
    },
    {
      title: 'Energy Sector',
      items: [
        { title: 'Oil & Gas Pipeline Monitoring', description: 'Drones monitor pipelines for leaks and structural weaknesses, improving safety and compliance.' },
        { title: 'Renewable Energy Advancements', description: 'Drones optimize inspections in wind and solar farms, reducing manual checks and improving efficiency.' },
      ],
    },
  ];

  return (
    <div className="application-container">
      <h1 className="application-h1">Our Drone Applications Across Industries</h1>

      {categories.map((category, index) => (
        <div key={index} className="application-category">
          <h2>{category.title}</h2>
          <div className='application-cards'> 

          {category.items.map((item, itemIndex) => (
              <div 
              key={itemIndex}
              className="application-card"
              data-aos="fade-up"
              >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Application;
