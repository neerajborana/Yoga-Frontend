import React from 'react';
import './About.css'; 
import j from './j.jpeg';
import ja from './ja.jpeg';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to our Yoga Studio, where we are dedicated to helping individuals achieve
          physical and mental well-being through the practice of yoga. Our experienced
          instructors are committed to guiding you on your yoga journey, whether you are a
          beginner or an advanced practitioner.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a welcoming and inclusive space for individuals to explore
          the transformative power of yoga. We believe in promoting a holistic approach to
          health, fostering community, and supporting each student in their unique path to
          wellness.
        </p>
      </section>

      <section className="instructors-section">
        <h2>Meet Our Instructors</h2>
        <div className="instructor-card">
          <img src={j} alt="Instructor 1" />
          <h3>John Doe</h3>
          <p>Yoga Instructor</p>
        </div>

        <div className="instructor-card">
          <img src={ja} alt="Instructor 2" />
          <h3>Jane Smith</h3>
          <p>Senior Instructor</p>
        </div>
      </section>
    </div>
  );
};

export default About;
