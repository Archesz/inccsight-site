import './Hero.scss';
import video from '../../assets/brain_cc.mp4';

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
        Your browser does not support background video.
      </video>

      <div className="content">
        <h1>InCCsight</h1>
        <p>
          A cutting-edge desktop application designed for detailed analysis and visualization of the corpus callosum
          using advanced Diffusion Tensor Imaging (DTI) techniques. InCCsight provides researchers and healthcare
          professionals with interactive tools to explore brain connectivity with precision and ease.
        </p>
        <div className="buttons">
          <a href="https://github.com/MICLab-Unicamp/inccsight/tree/inccsight-v2.0" className="btn-outline">View on GitHub</a>
          <a href="/downloads/inccsight-setup.exe" className="btn-filled" onClick={() => {alert("Falta validar")}}>Download</a>
        </div>
      </div>
    </section>
  );
}
