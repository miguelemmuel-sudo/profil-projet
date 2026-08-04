import { useState, useEffect } from 'react';
import './Testimonials.css';
import { testimonials as initialTestimonials } from '../../data';
import { Star, MessageSquarePlus, X } from 'lucide-react';

const Testimonials = () => {
  const [testis, setTestis] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', text: '', rating: 5 });

  useEffect(() => {
    const saved = localStorage.getItem('dynace_testimonials');
    if (saved) {
      setTestis(JSON.parse(saved));
    } else {
      setTestis(initialTestimonials);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (r) => {
    setFormData({ ...formData, rating: r });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;
    
    const newTestimonial = {
      id: Date.now(),
      name: formData.name,
      text: formData.text,
      rating: formData.rating,
      before: null,
      after: null
    };

    const updated = [newTestimonial, ...testis];
    setTestis(updated);
    localStorage.setItem('dynace_testimonials', JSON.stringify(updated));
    setFormData({ name: '', text: '', rating: 5 });
    setShowForm(false);
  };

  return (
    <section id="testimonials" className="section testimonials-section bg-light">
      <div className="container">
        <h2 className="section-title">Ce qu'en disent nos <span>Clients</span></h2>
        <p className="section-subtitle">
          Des résultats authentiques et des vies transformées grâce aux produits Dynace Global.
        </p>

        <div className="testimonials-grid">
          {testis.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--secondary)" color="var(--secondary)" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="testimonial-author">- {testimonial.name}</h4>
              
              {testimonial.before && testimonial.after && (
                <div className="testimonial-images">
                  <div className="t-image">
                    <img src={testimonial.before} alt="Avant" />
                    <span>Avant</span>
                  </div>
                  <div className="t-image">
                    <img src={testimonial.after} alt="Après" />
                    <span>Après</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="add-testimonial-wrapper" style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
          {!showForm ? (
            <button className="btn btn-primary" onClick={() => setShowForm(true)}>
              <MessageSquarePlus size={20} /> Ajouter mon témoignage
            </button>
          ) : (
            <form className="testimonial-form glass" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Partagez votre expérience</h3>
                <button type="button" className="close-btn" onClick={() => setShowForm(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="form-group text-left">
                <label>Votre nom</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jean Dupont" />
              </div>
              
              <div className="form-group text-left">
                <label>Votre avis</label>
                <textarea name="text" rows="4" required value={formData.text} onChange={handleChange} placeholder="Racontez-nous comment les produits vous ont aidé..."></textarea>
              </div>

              <div className="form-group text-left rating-group">
                <label>Note</label>
                <div className="stars-input">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={28} 
                      fill={star <= formData.rating ? "var(--secondary)" : "none"} 
                      color={star <= formData.rating ? "var(--secondary)" : "var(--border)"}
                      style={{ cursor: 'pointer', transition: '0.2s' }}
                      onClick={() => handleRating(star)}
                    />
                  ))}
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100" style={{ marginTop: '1rem' }}>Publier mon témoignage</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
