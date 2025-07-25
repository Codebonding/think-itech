import React from 'react';

const teamProfiles = [
  {
    name: 'Dr. Joanna Alexander',
    title: 'Chief Administrative Officer',
    photo: '/assets/person1.webp',
  },
  {
    name: 'James Joy',
    title: 'Chief of Business Development',
    photo: '/assets/person2.webp',
  },
  {
    name: 'Joseph Joy',
    title: 'Chief Financial Officer',
    photo: '/assets/person3.webp',
  },
  {
    name: 'Stephen Adams',
    title: 'Chief Operating Officer for Manufacturing',
    photo: '/assets/person4.webp',
  },

];


const AboutProfiles = () => {
  return (
    <div className="about-profiles">
      <h2 className="about-profiles-title">Meet the Team</h2>
      <div className="about-profiles-grid">
        {teamProfiles.map((profile, index) => (
          <div className="about-profile-card" key={index}>
            <img src={profile.photo} alt={profile.name} className="about-profile-photo" />
            <h3 className="about-profile-name">{profile.name}</h3>
            <p className="about-profile-title">{profile.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutProfiles;
