import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Product.css';
import drone from '/assets/drone.svg';
import { useLocation } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  const droneRefs = useRef({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      scrollToDrone(id);
    } else if (location.state?.scrollTo) {
      scrollToDrone(location.state.scrollTo);
    }
  }, [location]);

  const scrollToDrone = (id) => {
    const element = droneRefs.current[id];
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const droneCategories = [
    {
      category: 'Logistics Drones',
      drones: [
        {
          id: '1',
          title: 'Think Titan15',
          image: '/assets/xagx15.webp',
          description: 'The Think Titan15 Logistics Drone is designed for high efficiency in logistics and transportation, featuring a robust EO+IR camera and long endurance.',
          specs: [
            { label: 'Payload', value: '33.07 lb (15 Kg with EO+IR Camera)' },
            { label: 'Endurance', value: 'Up to 35 minutes' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '44.74 mph (20 m/s)' },
            { label: 'Max speed', value: '44.74 mph (20 m/s)' },
            { label: 'Range', value: '6.21 mi (10 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service ceiling', value: '20000 ft AMSL' },
            { label: 'Use Case', value: 'Logistics delivery for military, disaster relief, and critical infrastructure' }
          ]
        },
        {
          id: '2',
          title: 'Think Titan20',
          image: '/assets/xagx20.webp',
          description: 'The Think Titan20 Logistics Drone brings enhanced payload and endurance for heavy-duty operations.',
          specs: [
            { label: 'Payload', value: '44.09 lb (20 kg with EO+IR Camera)' },
            { label: 'Endurance', value: 'Up to 40 minutes' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '44.74 mph (20 m/s)' },
            { label: 'Max speed', value: '44.74 mph (20 m/s)' },
            { label: 'Range', value: '6.21 mi (10 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service ceiling', value: '20000 ft AMSL' },
            { label: 'Use Case', value: 'Heavy-duty logistics support for defense, energy sites, and remote operations' }
          ]
        },
        {
          id: '3',
          title: 'Think Titan25',
          image: '/assets/xag25.webp',
          description: 'The Think Titan25 Logistics Drone offers unmatched endurance and a high payload for extreme logistics operations.',
          specs: [
            { label: 'Payload', value: '55.12 lb (25 kg with EO+IR Camera)' },
            { label: 'Endurance', value: 'Up to 60 minutes' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '44.74 mph (20 m/s)' },
            { label: 'Max speed', value: '44.74 mph (20 m/s)' },
            { label: 'Range', value: '6.21 mi (10 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service ceiling', value: '20000 ft AMSL' },
            { label: 'Use Case', value: 'Critical logistics for military, emergency response, and large-scale infrastructure support' }
          ]
        }
      ]
    },
    {
      category: 'VTOL Drones',
      drones: [
        {
          id: '4',
          title: 'Think VTOL Striker',
          image: '/assets/vtol.webp',
          description: 'Think VTOL Striker is a powerful loitering munition designed for swarm operations with a long endurance and high speed.',
          specs: [
            { label: 'Payload', value: '26.46 lb (12 kg with EO+IR Camera)' },
            { label: 'Endurance', value: 'Up to 4 hours' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '67.11 mph (30 m/s)' },
            { label: 'Max speed', value: '89.48 mph (40 m/s)' },
            { label: 'Range', value: '62.14 mi (100 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service ceiling', value: '12000 ft AMSL' },
            { label: 'Use Case', value: 'Swarm missions, ISTAR surveillance, and battlefield reconnaissance' }
          ]
        },
        {
          id: '5',
          title: 'Think VTOL IronReach',
          image: 'assets/vtol-Ironreach.webp',
          description: 'Think VTOL IronReach is a high-endurance, heavy-lift unmanned aircraft designed for material transport, search and rescue, and communication relay in difficult environments.',
          specs: [
            { label: 'Payload', value: '220.46 lb (100 kg with EO+IR Camera)' },
            { label: 'Wingspan', value: '29.5 feet (9 m)' },
            { label: 'Endurance', value: 'Up to 10 hours' },
            { label: 'Operating temperature', value: '4°F to 131°F (−20°C to 55°C)' },
            { label: 'Wind resistance', value: '78.29 mph (35 m/s)' },
            { label: 'Cruising speed', value: '56 to 74.56 mph (90 to 120 km/h)' },
            { label: 'Range', value: '62.14 miles (100 km)' },
            { label: 'Waterproof Rating', value: 'IP33' },
            { label: 'Maximum take-off weight', value: '881.85 lbs (400 kg)' },
            { label: 'Service ceiling', value: '19685 ft AMSL (6000 m)' },
            { label: 'Use Case', value: 'Transport of materials, Search and rescue, Communication relay, Aerial monitoring' }
          ]
        }
      ]
    },
    {
      category: 'Surveillance Drones',
      drones: [
        {
          id: '6',
          title: 'Think FalconEye',
          image: '/assets/s111.webp',
          description: 'The Think FalconEye is a versatile surveillance drone designed for intelligence gathering and reconnaissance.',
          specs: [
            { label: 'Payload', value: '2.2 lb (1000 g)' },
            { label: 'Endurance', value: 'Up to 75 minutes' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '33.55 mph (15 m/s)' },
            { label: 'Max speed', value: '40.26 mph (18 m/s)' },
            { label: 'Range', value: '6.21 mi (10 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service Ceiling', value: '20000 ft AMSL' },
            { label: 'Use Case', value: 'Law enforcement, border security, crowd monitoring, and anti-terror operations' }
          ]
        },
        {
          id: '7',
          title: 'Think TraceOne',
          image: '/assets/s11.webp',
          description: 'The Think TraceOne is used for search and rescue, with capabilities for facial and vehicle recognition and anti-terror surveillance.',
          specs: [
            { label: 'Payload', value: '2.2 lb (1000 g)' },
            { label: 'Endurance', value: 'Up to 60 minutes' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '33.55 mph (15 m/s)' },
            { label: 'Max speed', value: '40.26 mph (18 m/s)' },
            { label: 'Range', value: '6.21 mi (10 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service Ceiling', value: '20000 ft AMSL' },
            { label: 'Use Case', value: 'Search and rescue, surveillance, and urban security for smart cities' }
          ]
        },
        {
          id: '8',
          title: 'Think ReconNova',
          image: '/assets/s11hs12.webp',
          description: 'The Think ReconNova is designed for military and enemy movement AI tracking reconnaissance.',
          specs: [
            { label: 'Payload', value: '2.2 lb (1000 g)' },
            { label: 'Endurance', value: 'Up to 60 minutes' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '33.55 mph (15 m/s)' },
            { label: 'Max speed', value: '40.26 mph (18 m/s)' },
            { label: 'Range', value: '6.21 mi (10 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service Ceiling', value: '20000 ft AMSL' },
            { label: 'Use Case', value: 'Military reconnaissance, border patrol, and tactical surveillance' }
          ]
        }
      ]
    },
    {
      category: 'Agricultural Drones',
      drones: [
        {
          id: '9',
          title: 'Think AgriMist10',
          image: '/assets/agr10.webp',
          description: 'The Think AgriMist10 is a compact agricultural drone designed for efficient crop spraying and spreading operations with fast deployment and intelligent flight control.',
          specs: [
            { label: 'Max Speed', value: '13.4 mph (6 m/s)' },
            { label: 'Wind Resistance', value: '17.9 mph (8 m/s)' },
            { label: 'Payload Options', value: 'Sprayer (2.64 gal)' },
            { label: 'Operating Altitude', value: '98.4 ft (30 meters)' },
            { label: 'Range', value: '0.62 mi (1000 meters)' },
            { label: 'Dimensions', value: '6.53 x 5.9 x 1.4 ft (1992 x 1799 x 427 mm)' },
            { label: 'Use Case', value: 'Precision agriculture, spraying and field monitoring' }
          ]
        },
        {
          id: '10',
          title: 'Think AgriMist16',
          image: '/assets/agr16.webp',
          description: 'The Think AgriMist16 drone is a powerful solution for large-scale agricultural tasks. With extended range, speed, and payload, it ensures precise spraying and efficient crop monitoring.',
          specs: [
            { label: 'Camera', value: 'MIPI-DCAM (high-resolution agricultural imaging)' },
            { label: 'Range', value: '0.62 mi (1 km)' },
            { label: 'Flight Time', value: '14.2 minutes' },
            { label: 'Payload', value: 'Sprayer (3.96 gal), Spreader (3.96 gal) [15 L]' },
            { label: 'Max Speed', value: '13.4 mph (6 m/s)' },
            { label: 'Weight', value: '94.4 lb (42.8 kg)' },
            { label: 'Use Case', value: 'Large-scale crop spraying, seed spreading, fertilizer distribution, fish feeding, and environmental monitoring' }
          ]
        }
      ]
    }, 
    {
      category: 'Tethered Drones',
      drones: [
        {
          id: '11',
          title: 'Think TetherOps',
          image: '/assets/tethered.webp',
          description: 'Think TetherOps is a continuous surveillance drone system built for critical infrastructure monitoring, crowd observation, and tactical overwatch. With a power and data tether, it offers uninterrupted aerial operation.',
          specs: [
            { label: 'Payload', value: '2.2 lb (1 kg)' },
            { label: 'Endurance', value: 'Unlimited (via tethered power supply)' },
            { label: 'Operating temperature', value: '−4°F to 113°F (−20°C to 45°C)' },
            { label: 'Wind resistance', value: '39.1 mph (17.5 m/s)' },
            { label: 'Max altitude (above ground)', value: '492 ft (150 m)' },
            { label: 'Communication Link', value: 'Wired + Wireless hybrid' },
            { label: 'Waterproof Rating', value: 'IP54' },
            { label: 'Use Case', value: 'Surveillance over crowds, critical asset monitoring, tactical overwatch' }
          ]
        }
      ]
    },
    {
      category: 'Mining Drones',
      drones: [
        {
          id: '12',
          title: 'ThinkGeo',
          image: '/assets/mine.webp',
          description: 'ThinkGeo is designed for mining site operations including volume estimation, 3D terrain mapping, and tunnel assessment. Its compact structure and advanced sensors ensure reliable performance in challenging environments.',
          specs: [
            { label: 'Payload', value: '4.4 lb (2 kg) with LiDAR + optional EO camera' },
            { label: 'Endurance', value: '60 minutes' },
            { label: 'Operating temperature', value: '14°F to 122°F (−10°C to 50°C)' },
            { label: 'Wind resistance', value: '33.5 mph (15 m/s)' },
            { label: 'Max speed', value: '40.3 mph (18 m/s)' },
            { label: 'Range', value: '3.1 mi (5 km)' },
            { label: 'Waterproof Rating', value: 'IP53' },
            { label: 'Use Case', value: 'Mining volume estimation, terrain mapping, tunnel mapping' }
          ]
        }
      ]
    },
    {
      category: 'Custom Drones',
      drones: [
        {
          id: '13',
          title: 'Think Custom Drone',
          // image: '/assets/custom-drone.webp',
          description: 'We specialize in building custom drone platforms based on client-specific needs. All units are manufactured using our OEM infrastructure sourced exclusively from UDCG (Ukraine Defense Contact Group) members.',
          specs: [
            {
              label: 'Key Capabilities Include',
              value: '• Heavy-lift performance with payload/endurance optimization\n• Thermal, infrared, night vision, and HD imaging systems\n• GPS-denied and obstacle-aware autonomous navigation\n• Rugged, mission-ready airframes with advanced safety systems\n• Full development cycle: Design → Prototype → Test → Deploy'
            }
          ]
        }
      ]
    }
  ];
  const renderCategoryTitle = (category) => (
    <h1 className="category-title" data-aos="fade-up">
      <img src={drone} className="category-title-icon" alt="drone icon" />
      {category}
      <img src={drone} className="category-title-icon" alt="drone icon" />
    </h1>
  );

  const renderDroneSpecs = (specs) => (
    <table className="pro-item-specs" data-aos="fade-down">
      <thead>
        <tr>
          <th>Specification</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {specs.map((spec, idx) => (
          <tr key={idx}>
            <td>{spec.label}</td>
            <td>
              {spec.label === 'Key Capabilities Include' ? (
                <div className="bullet-points">
                  {spec.value.split('\n').map((item, i) => {
                    const parts = item.split(/(→)/g);
                    return (
                      <div key={i} className="bullet-item">
                        {parts.map((part, partIdx) =>
                          part === '→' ? (
                            <span key={partIdx} className="blue-arrow">→</span>
                          ) : (
                            part
                          )
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                (() => {
                  const parts = spec.value.split(/(→)/g);
                  return parts.map((part, i) =>
                    part === '→' ? (
                      <span key={i} className="blue-arrow">→</span>
                    ) : (
                      part
                    )
                  );
                })()
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderDroneCard = (drone, category) => {
    console.log("Rendering drone:", drone.title);
    return (
      <div
        key={drone.id}
        className="pro-item-card"
        id={drone.id}
        ref={(el) => (droneRefs.current[drone.id] = el)}
      >
        <h2 className="pro-item-title">{drone.title}</h2>
        <div className="pro-item-image">
          <img src={drone.image} alt={drone.title} />
        </div>
        <p className="pro-item-description">{drone.description}</p>
        {renderDroneSpecs(drone.specs)}
      </div>
    );
  };

  const renderCategorySection = (categoryGroup) => (
    <div key={categoryGroup.category} className="category-section">
      {renderCategoryTitle(categoryGroup.category)}
      {categoryGroup.drones.map((drone) =>
        renderDroneCard(drone, categoryGroup.category)
      )}
    </div>
  );

  return (
    <div className="pro-item-container">
      {droneCategories.map(renderCategorySection)}
    </div>
  );
};

export default Product;
