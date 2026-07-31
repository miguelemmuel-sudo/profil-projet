import './Footer.css';
import { distributor } from '../../data';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>Dynace<span className="logo-accent">Global</span></h2>
          <p>{distributor.mission}</p>
        </div>
        
        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#about">À Propos</a></li>
            <li><a href="#products">Nos Produits</a></li>
            <li><a href="#testimonials">Témoignages</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li><Phone size={18} /> {distributor.whatsapp}</li>
            <li><MapPin size={18} /> Distributrice Officielle</li>
          </ul>
          <a href={`https://wa.me/${distributor.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-4">
            Discuter sur WhatsApp
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Dynace Global. Tous droits réservés.</p>
        <div className="footer-policy">
          <a href="#">Politique de confidentialité</a>
          <a href="#">Conditions d'utilisation</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
