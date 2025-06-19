import './Hero.scss';
import video from '../../assets/brain_cc.mp4'
export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-bg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
        Seu navegador não suporta vídeo em segundo plano.
      </video>

      <div className="content">
        <h1>InCCsight</h1>
        <p>Uma ferramenta moderna para análise do corpo caloso em imagens cerebrais.</p>
        <div className="buttons">
          <a href="https://github.com/MICLab-Unicamp/inCCsight/tree/inccsight-v2.0" className="btn-outline">Ver no GitHub</a>
          <a href="/downloads/inccsight-setup.exe" className="btn-filled">Download</a>
        </div>
      </div>
    </section>
  );
}
