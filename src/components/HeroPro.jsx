import React from 'react';
import { motion } from 'framer-motion';
import './HeroPro.css'; // Importation du fichier CSS

function HeroPro() {
  
  const scrollToContent = () => {
    // Fait défiler jusqu'à la section suivante (par exemple, les atouts)
    const nextSection = document.querySelector('.atouts-section'); // Assurez-vous que votre section Atouts a cette classe
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-pro-section">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        src="/Vidéo_Irrigation_Automatique_Prête.mp4"
        id="hero-video"
      />

      <motion.div
        className="hero-pro-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>L'agriculture de précision, du champ à votre écran.</h1>
        <p className="hero-pro-desc">
          Optimisez votre rendement et économisez l'eau grâce à nos solutions d'irrigation intelligentes et connectées.
        </p>
        <a href="#atouts" onClick={scrollToContent} className="hero-pro-btn">
          Découvrir nos solutions
          <span className="hero-pro-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </a>
      </motion.div>

      <button className="scroll-down-btn" onClick={scrollToContent} aria-label="Faire défiler vers le bas">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}

export default HeroPro;