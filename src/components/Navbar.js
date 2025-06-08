import React, { useEffect } from 'react';
import "../styles/Navbar.css";

function Navbar() {
  // Toggle Navbar
  const toggleNav = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  useEffect(() => {
    // Scroll Animation
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    // Smooth Scrolling
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    const smoothScroll = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      document.querySelector('.nav-toggle')?.classList.remove('active');
      document.querySelector('.nav-menu')?.classList.remove('active');
    };

    smoothLinks.forEach(link => link.addEventListener('click', smoothScroll));

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
      smoothLinks.forEach(link => link.removeEventListener('click', smoothScroll));
    };
  }, []);

  return (
    <div>
      {/* Background Animation */}
     <div class="background-animation">
        <svg class="gear" viewBox="0 0 100 100">
            <path d="M50,10 L60,20 L70,10 L80,20 L90,30 L80,40 L90,50 L80,60 L90,70 L80,80 L70,90 L60,80 L50,90 L40,80 L30,90 L20,80 L10,70 L20,60 L10,50 L20,40 L10,30 L20,20 L30,10 L40,20 Z M50,30 A20,20 0 1,1 50,70 A20,20 0 1,1 50,30 Z"/>
        </svg>
        <svg class="gear" viewBox="0 0 100 100">
            <path d="M50,5 L65,15 L75,5 L85,15 L95,25 L85,35 L95,45 L85,55 L95,65 L85,75 L95,85 L85,95 L75,85 L65,95 L55,85 L45,95 L35,85 L25,95 L15,85 L5,75 L15,65 L5,55 L15,45 L5,35 L15,25 L5,15 L15,5 L25,15 L35,5 L45,15 Z M50,25 A25,25 0 1,1 50,75 A25,25 0 1,1 50,25 Z"/>
        </svg>
        <svg class="gear" viewBox="0 0 100 100">
            <path d="M50,15 L58,22 L66,15 L74,22 L82,30 L74,38 L82,46 L74,54 L82,62 L74,70 L82,78 L74,85 L66,78 L58,85 L50,78 L42,85 L34,78 L26,85 L18,78 L10,70 L18,62 L10,54 L18,46 L10,38 L18,30 L10,22 L18,15 L26,22 L34,15 L42,22 Z M50,35 A15,15 0 1,1 50,65 A15,15 0 1,1 50,35 Z"/>
        </svg>
        <svg class="gear" viewBox="0 0 100 100">
            <path d="M50,8 L62,18 L72,8 L82,18 L92,28 L82,38 L92,48 L82,58 L92,68 L82,78 L92,88 L82,92 L72,82 L62,92 L52,82 L42,92 L32,82 L22,92 L12,82 L8,72 L18,62 L8,52 L18,42 L8,32 L18,22 L8,12 L18,8 L28,18 L38,8 L48,18 Z M50,28 A22,22 0 1,1 50,72 A22,22 0 1,1 50,28 Z"/>
        </svg>
    </div>
       <div>  {/* <!-- Light Beams --> */}
        <div class="light-beam beam1"></div>
        <div class="light-beam beam2"></div>
        <div class="light-beam beam3"></div>
    </div>


      {/* Navigation Toggle */}
      <button className="nav-toggle" onClick={toggleNav}>
        <div className="hamburger"></div>
      </button>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
