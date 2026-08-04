import './Videos.css';
import { videos } from '../../data';
import { Play } from 'lucide-react';

const Videos = () => {
  return (
    <section id="videos" className="section videos-section">
      <div className="container">
        <h2 className="section-title">Galerie <span>Vidéos</span></h2>
        <p className="section-subtitle">
          Découvrez en images les bienfaits et l'utilisation de nos produits Dynace Global.
        </p>

        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-wrapper">
                <video controls className="video-player" poster={video.poster}>
                  <source src={video.src} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
