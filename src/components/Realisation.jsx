import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Realisation.css';
import { motion } from 'framer-motion';

function Realisation() {
  const [realisations, setRealisations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Charger les réalisations depuis Supabase
    const fetchRealisations = async () => {
      const { data, error } = await supabase
        .from('realisations')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error) setRealisations(data || []);
    };
    fetchRealisations();
  }, []);

  const handleReadMore = (item) => {
    navigate(`/realisation/${item.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="realisation-section-container"
    >
      <section className="realisation-hero">
        <video 
            className="realisation-hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
            src="/Vidéo_Irrigation_Automatique_Prête.mp4"
        />
        <div className="realisation-hero-content">
          <h1>Nos Réalisations</h1>
          <p>Découvrez nos projets réussis et l'impact de nos solutions.</p>
        </div>
      </section>
      <section className="realisation-section">
        <div className="realisation-grid">
          {realisations.map((item, idx) => (
            <motion.article
              className="realisation-card"
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="realisation-image-container">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="realisation-image" 
                />
              </div>
              <div className="realisation-content">
                <span className="realisation-date">{item.date}</span>
                <h3 className="realisation-card-title">{item.title}</h3>
                <p className="realisation-excerpt">{item.description}</p>
                <button 
                  className="realisation-read-more"
                  onClick={() => handleReadMore(item)}
                >
                  Voir le projet
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Realisation; 