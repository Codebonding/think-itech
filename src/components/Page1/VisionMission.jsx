import React, { useEffect } from 'react';
import { GoGoal } from 'react-icons/go';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const VisionMission = () => {
  const visionAndMission = [
    {
      title: "Our Vision",
      content: (
        <p>
          To position the United States as the global leader in drone manufacturing by driving innovation,
          strengthening national security, and fueling economic growth through advanced unmanned aerial systems.
        </p>
      ),
    },
    {
      title: "Our Mission",
      content: (
        <>
          <p>
            We are expanding from software into hardware manufacturing, delivering advanced drone
            solutions across defense, surveillance, agriculture, logistics, and commercial domains. With 27
            years of proven expertise and in-house Research & Development (R&D), we are investing in
            state-of-the-art U.S. production facilities to ensure:
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
  <li>A secure and transparent supply chain</li>
  <li>The creation of high-tech American jobs</li>
  <li>The continued leadership of the U.S. in drone innovation</li>
</ul>

        </>
      ),
    },
  ];
  

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="vision-mission">
        <h2 className='vis-title'>Pioneering the Future of Unmanned Aerial Systems</h2>
        <p className='vis-desc'>By leading the evolution of next-generation drone technology, we are transforming industries
across the United States through advanced unmanned aerial systems (UAS). Our cutting-edge
drone solutions serve defense, commercial, agricultural, and logistics sectors—integrating
patented technologies and Original Equipment Manufacturer (OEM) components sourced
exclusively from UDCG (Ukraine Defense Contact Group) members.
By setting new standards in aerial intelligence, security, and automation, we are redefining the
future of unmanned flight.</p>
      <div className="background-icon">
        <GoGoal />
      </div>
      {visionAndMission.map((item, index) => (
        <div
          className="vision-mission-item card"
          key={index}
          data-aos="fade-left"   data-aos-delay={index * 200}
        >
          <h2 className="vision-mission-title">{item.title}</h2>
          <div className="vision-mission-content">{item.content}</div>

        </div>
      ))}
    </section>
  );
};

export default VisionMission;
