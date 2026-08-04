import './Hero.css';
import { distributor } from '../../data';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">Distributrice Officielle Dynace Global</span>
          <h1 className="hero-title">
            Révélez votre <span>Santé</span> et votre <span>Beauté</span> naturelle.
          </h1>
          <p className="hero-subtitle">
            Découvrez une gamme de produits premium à base de cellules souches végétales pour régénérer votre corps et améliorer votre quotidien.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              <ShoppingBag size={20} /> Découvrir les produits
            </a>
            <a href={`https://wa.me/${distributor.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Commander maintenant <ArrowRight size={20} />
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-bg"></div>
          <img src={distributor.photo} alt={distributor.name} className="hero-image" />
          <div className="hero-card glass">
            <h3>{distributor.name}</h3>
            <p>Experte Bien-être</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
