import { motion } from 'framer-motion';
import '../styles/Pipeline.scss';
import { useLanguage } from '../i18n/LanguageContext';

export default function Pipeline() {
  const { t } = useLanguage();
  const p = t.pipeline;

  return (
    <section className="pipeline" id="pipeline">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{p.eyebrow}</span>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
        </div>

        <div className="pipeline-steps">
          <div className="pipeline-line" />
          {p.steps.map((step, idx) => (
            <motion.div
              className="step"
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="step-marker">{step.n}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
