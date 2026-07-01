import {
  FaBrain,
  FaChartBar,
  FaShieldAlt,
  FaRulerCombined,
  FaBalanceScale,
  FaFileCsv,
  FaGithub,
} from 'react-icons/fa';
import { Md3dRotation } from 'react-icons/md';

import { motion } from 'framer-motion';
import '../styles/Features.scss';
import { useLanguage } from '../i18n/LanguageContext';

const icons = [FaBrain, Md3dRotation, FaShieldAlt, FaRulerCombined, FaBalanceScale, FaChartBar, FaFileCsv, FaGithub];

export default function Features() {
  const { t } = useLanguage();
  const f = t.features;

  return (
    <section className="features" id="features">
      <div className="section-head">
        <span className="eyebrow">{f.eyebrow}</span>
        <h2>{f.title}</h2>
        <p>{f.description}</p>
      </div>
      <div className="features-grid">
        {f.list.map(({ title, description }, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={idx}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.12 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
