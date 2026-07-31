import { distributor } from '../../data';
import WhatsAppIcon from './WhatsAppIcon';

const FloatingWhatsApp = () => {
  return (
    <a 
      href={`https://wa.me/${distributor.whatsapp}?text=${encodeURIComponent("Bonjour, je suis intéressé(e) par vos produits Dynace Global.")}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Contacter sur WhatsApp"
    >
      <WhatsAppIcon size={36} color="white" />
    </a>
  );
};

export default FloatingWhatsApp;
