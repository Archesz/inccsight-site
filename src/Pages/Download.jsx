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
        <h2>Baixe agora</h2>
        <p>Escolha a versão para o seu sistema operacional e comece a usar o InCCsight.</p>
        <div className="buttons">
          <a href="/downloads/inccsight-win.exe" className="btn-filled">Windows</a>
          <a href="/downloads/inccsight-linux.AppImage" className="btn-filled">Linux</a>
          <a href="/downloads/inccsight-mac.dmg" className="btn-filled">Mac</a>
        </div>
      </motion.div>
    </section>
  );
}
