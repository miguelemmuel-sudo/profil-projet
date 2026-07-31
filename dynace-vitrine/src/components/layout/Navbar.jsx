import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          Dynace<span className="logo-accent">Global</span>
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>À Propos</a>
          <a href="#products" onClick={() => setIsOpen(false)}>Produits</a>
          <a href="#videos" onClick={() => setIsOpen(false)}>Vidéos</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Témoignages</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="https://wa.me/699720197" target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={() => setIsOpen(false)}>
            Commander
          </a>
        </div>

        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
