import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Patents = () => {
  const patentsData = [
    {
      title: "Tethered Aerial Platform",
      description: [
        "Unlimited flight time for surveillance, security, and communication relay missions.",
        "Stable and interference-free data transmission, ideal for military and emergency applications.",
        "Enhanced safety features, reducing risks associated with untethered drones.",
      ],
    },
    {
      title: "Ground Object Position Annotation Using Standalone On-Board Embedded System",
      description: [
        "High-precision geospatial mapping for agricultural, defense, and logistics applications.",
        "Automated target recognition and monitoring for enhanced situational awareness.",
        "Seamless AI-driven data processing to streamline drone operations.",
      ],
    },
    {
      title: "Vertical Take-Off and Horizontal Transition Unmanned Aircraft",
      description: [
        "Efficient vertical takeoff without the need for runways, making operations possible in confined spaces.",
        "Extended flight endurance with horizontal transition capabilities, maximizing range and speed.",
        "Versatility across industries, from rapid deployment in military reconnaissance to optimized package delivery in logistics.",
        "GPS-denied navigation Obstacle avoidance system Propeller guards for increased safety - Real-time video streaming",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="patents">
      <div className='patent-title-container'>
      <h2 className="patent-title">PATENTS</h2>
      </div>
      <div className='patent-header'>
      <p className="patent-description">
        Revolutionizing Unmanned Aerial Systems with Cutting-Edge Innovation. At the forefront of next-generation drone technology,
        our company is reshoring and expanding manufacturing in the United States, bringing state-of-the-art unmanned aerial systems
        (UAS) to the defense, commercial, agricultural, and logistical sectors. By integrating patented breakthrough innovations, we
        are setting new standards in aerial intelligence, security, and automation.
      </p>
      <img  className='patent-image' src='/assets/pat.webp'/>
      </div>
      <div className="patent-list">
        {patentsData.map((patent, index) => (
          <div
            className="patent-item card"
            key={index}
          >
            <h3 className="patent-item-title">{patent.title}</h3>
            <div className="patent-card-list">
            {patent.description.map((desc, idx) => (
              <div
                className="patent-card"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                <p className="patent-card-text">{desc}</p>
              </div>
            ))}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Patents;
