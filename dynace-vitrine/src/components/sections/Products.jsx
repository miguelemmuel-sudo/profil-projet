import { useState } from 'react';
import './Products.css';
import { products, distributor } from '../../data';
import { ShoppingCart, Check } from 'lucide-react';

const Products = () => {
  return (
    <section id="products" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Nos Produits <span>Exclusifs</span></h2>
        <p className="section-subtitle">
          Découvrez la puissance de la nature et de la science combinées pour votre bien-être.
        </p>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <span className="product-tagline">{product.tagline}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-benefits">
                  <h4>Bienfaits clés :</h4>
                  <ul>
                    {product.benefits.slice(0, 4).map((benefit, idx) => (
                      <li key={idx}><Check size={16} className="benefit-icon" /> {benefit}</li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={`https://wa.me/${distributor.whatsapp}?text=${encodeURIComponent(`Bonjour, je souhaite commander le produit ${product.name}. Pouvez-vous me donner plus d'informations ?`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary w-100"
                >
                  <ShoppingCart size={18} /> Commander via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
