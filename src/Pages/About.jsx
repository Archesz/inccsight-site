import { motion } from 'framer-motion';
import '../styles/About.scss';
import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  const stats = [
    [a.stat1n, a.stat1l],
    [a.stat2n, a.stat2l],
    [a.stat3n, a.stat3l],
    [a.stat4n, a.stat4l],
  ];

  return (
    <section className="about" id="about">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="eyebrow">{a.eyebrow}</span>
        <h2>{a.title}</h2>

        <div className="about-text">
          <p dangerouslySetInnerHTML={{ __html: a.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: a.p2 }} />
          <p dangerouslySetInnerHTML={{ __html: a.p3 }} />
          <p dangerouslySetInnerHTML={{ __html: a.p4 }} />
        </div>

        <div className="about-stats">
          {stats.map(([n, l], i) => (
            <div className="stat" key={i}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
