import React from 'react';
import './Home.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Our Yoga Studio</h1>
      </header>
      <section className="classes-section">
        <h2>Classes</h2>
        <p>
          Explore our diverse range of yoga classes suitable for practitioners of all levels.
          Whether you're a beginner or an experienced yogi, we have a class for you.
        </p>
      </section>
      <section className="gallery-section">
        <h2>Gallery</h2>
        <div className="image-grid">
          <img src={img1} alt="Yoga Pose 1" />
          <img src={img2} alt="Yoga Pose 2" />
          <img src={img3} alt="Yoga Pose 3" />
          <img src={img4} alt="Yoga Pose 3" />
        </div>
      </section>
    </div>
  );
};

export default Home;
