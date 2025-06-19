import { motion } from 'framer-motion';
import '../styles/Download.scss';

export default function Download() {
  return (
    <section className="download" id="download">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Download Now</h2>
        <p>Choose the version for your operating system and start using InCCsight.</p>
        <div className="buttons">
          <a href="/downloads/inccsight-win.exe" className="btn-filled" onClick={() => {alert("Falta validar")}}>Windows</a>
          <a href="/downloads/inccsight-linux.AppImage" className="btn-filled" onClick={() => {alert("Falta validar")}}>Linux</a>
          <a href="/downloads/inccsight-mac.dmg" className="btn-filled" onClick={() => {alert("Falta validar")}}>Mac</a>
        </div>
      </motion.div>
    </section>
  );
}
