import './About.css';
import { distributor } from '../../data';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <img src={distributor.photo} alt="À propos" className="about-image" />
          <div className="about-experience glass">
            <h2>100%</h2>
            <p>Produits Naturels</p>
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Notre <span>Mission</span> et nos <span>Valeurs</span>
          </h2>
          <p className="about-text">{distributor.about}</p>
          <p className="about-mission">{distributor.mission}</p>
          
          <ul className="about-features">
            <li><CheckCircle2 className="feature-icon" /> Produits certifiés et approuvés</li>
            <li><CheckCircle2 className="feature-icon" /> Accompagnement personnalisé</li>
            <li><CheckCircle2 className="feature-icon" /> Des résultats scientifiquement prouvés</li>
            <li><CheckCircle2 className="feature-icon" /> Livraison fiable et rapide</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
