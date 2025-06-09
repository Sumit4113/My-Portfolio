import { useEffect } from 'react';
import "../styles/Hero.css";



export default function Hero() {

  useEffect(() => {
    // Light ring animation on mount
    const lightRing = document.querySelector('.light-ring');
    if (lightRing) {
      lightRing.style.animation = 'none';
      setTimeout(() => {
        lightRing.style.animation = 'ring-rotate 3s linear infinite';
      }, 10);
    }
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      {/* Profile Section */}
      <section className="profile-section " id="home" >
        <div className="profile-container">
          <div>
            <img
             src={`${process.env.PUBLIC_URL}/images/default.png`}
              alt="Profile"
              className="profile-image"
            />
            
          </div>
          <div className="light-ring"></div>
        </div>

        <div className="profile-info">
          <h1>Sumit Jamod</h1>
          <div className="hero-title">
            <span>Java Developer</span>
            <span>Web Developer</span>
            <span>Backend Engineer</span>
            <span>Creative Coder</span>
            <span>Problem Solver</span>
          </div>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </section>
    </div>
  );
}
