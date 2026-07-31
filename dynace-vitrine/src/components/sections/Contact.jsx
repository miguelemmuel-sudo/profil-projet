import { useState } from 'react';
import './Contact.css';
import { distributor } from '../../data';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    ville: '',
    pays: '',
    produit: 'Dynace Rocenta',
    quantite: 1,
    adresse: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*NOUVELLE COMMANDE* %0A%0A*Nom:* ${formData.nom} ${formData.prenom}%0A*Téléphone:* ${formData.telephone}%0A*Email:* ${formData.email}%0A*Ville/Pays:* ${formData.ville}, ${formData.pays}%0A*Adresse:* ${formData.adresse}%0A%0A*PRODUIT:* ${formData.produit}%0A*Quantité:* ${formData.quantite}%0A%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${distributor.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Prêt à passer <span>Commande</span> ?
          </h2>
          <p className="contact-desc">
            Remplissez ce formulaire et vous serez automatiquement redirigé vers WhatsApp pour finaliser votre commande avec moi en toute sécurité.
          </p>
          <div className="contact-whatsapp-card glass">
            <h3>Contact Direct</h3>
            <p className="phone">{distributor.whatsapp}</p>
            <p>Disponible pour répondre à toutes vos questions.</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form glass" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Nom *</label>
                <input type="text" name="nom" required value={formData.nom} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Prénom *</label>
                <input type="text" name="prenom" required value={formData.prenom} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Téléphone *</label>
                <input type="tel" name="telephone" required value={formData.telephone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Ville *</label>
                <input type="text" name="ville" required value={formData.ville} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Pays *</label>
                <input type="text" name="pays" required value={formData.pays} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Produit souhaité *</label>
                <select name="produit" value={formData.produit} onChange={handleChange}>
                  <option value="Dynace Rocenta">Dynace Rocenta</option>
                  <option value="Dynace Collagène">Dynace Collagène</option>
                  <option value="Dynace Triple Root">Dynace Triple Root</option>
                </select>
              </div>
              <div className="form-group">
                <label>Quantité *</label>
                <input type="number" name="quantite" min="1" required value={formData.quantite} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>Adresse de livraison *</label>
              <textarea name="adresse" rows="2" required value={formData.adresse} onChange={handleChange}></textarea>
            </div>

            <div className="form-group">
              <label>Commentaire</label>
              <textarea name="message" rows="3" value={formData.message} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn btn-whatsapp w-100">
              <Send size={18} /> Continuer sur WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
