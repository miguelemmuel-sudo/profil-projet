import { useState } from 'react';
import './FAQ.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Qu'est-ce que Dynace Rocenta ?",
    answer: "Dynace Rocenta est un complément alimentaire de haute technologie à base de cellules souches végétales. Il agit comme un puissant antioxydant pour régénérer vos cellules, renforcer votre système immunitaire et retarder le vieillissement."
  },
  {
    question: "Comment puis-je commander les produits ?",
    answer: "Vous pouvez commander directement en remplissant le formulaire de la section Contact ou en cliquant sur les boutons WhatsApp. Cela vous redirigera vers moi pour finaliser votre commande en toute sécurité."
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Les délais de livraison varient en fonction de votre localisation. Généralement, les commandes sont traitées et expédiées sous 24 à 48 heures ouvrables."
  },
  {
    question: "Les produits ont-ils des effets secondaires ?",
    answer: "Nos produits sont 100% naturels et formulés à partir d'ingrédients de première qualité. Ils sont très bien tolérés. Toutefois, si vous avez des conditions médicales spécifiques, il est toujours recommandé de consulter un professionnel de la santé."
  },
  {
    question: "Quels sont les bienfaits du café Triple Root ?",
    answer: "Le café Triple Root stimule l'énergie, améliore la concentration, réduit le stress et soutient la santé globale grâce à l'association du Ginseng, de l'Ashwagandha, du Tongkat Ali et de la Maca. Il est recommandé uniquement aux hommes."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Questions <span>Fréquentes</span></h2>
        <p className="section-subtitle">Tout ce que vous devez savoir sur nos produits et nos services.</p>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleAccordion(index)}>
                {faq.question}
                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
