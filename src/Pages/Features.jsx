import { FaBrain, FaChartBar, FaBalanceScale, FaFilePdf, FaMobileAlt, FaGithub  } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/Features.scss';

const featuresList = [
  {
    icon: <FaBrain />,
    title: 'Visualização interativa',
    description: 'Interaja e explore imagens cerebrais detalhadamente.',
  },
  {
    icon: <FaChartBar />,
    title: 'Extração de métricas',
    description: 'Obtenha métricas morfométricas precisas do corpo caloso.',
  },
  {
    icon: <FaBalanceScale />,
    title: 'Comparação de dados',
    description: 'Compare seus resultados com bases de referência confiáveis.',
  },
  {
    icon: <FaFilePdf />,
    title: 'Relatórios customizáveis',
    description: 'Gere relatórios em PDF e CSV para análises e apresentações.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Interface responsiva',
    description: 'Use o software em diferentes dispositivos com interface moderna.',
  },
  {
    icon: <FaGithub  />,
    title: 'Código Aberto',
    description: 'Adapte, implemente e crie novas soluções através do nosso github.',
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <h2>Funcionalidades</h2>
      <div className="features-grid">
        {featuresList.map(({ icon, title, description }, idx) => (
          <motion.div
            key={idx}
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
