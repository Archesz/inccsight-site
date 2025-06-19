import { FaBrain, FaChartBar, FaBalanceScale, FaFilePdf, FaMobileAlt, FaGithub } from 'react-icons/fa';
import { Md3dRotation } from "react-icons/md";
import { AiFillExperiment } from "react-icons/ai";

import { motion } from 'framer-motion';
import '../styles/Features.scss';

const featuresList = [
  {
    icon: <FaBrain />,
    title: 'Interactive Visualization',
    description: 'Interact with and explore detailed brain images.',
  },
  {
    icon: <FaChartBar />,
    title: 'Metric Extraction',
    description: 'Obtain precise morphometric metrics of the corpus callosum.',
  },
  {
    icon: <FaBalanceScale />,
    title: 'Data Comparison',
    description: 'Compare your results with reliable reference datasets.',
  },
  {
    icon: <FaFilePdf />,
    title: 'Customizable Reports',
    description: 'Generate PDF and CSV reports for analysis and presentations.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive Interface',
    description: 'Use the software on multiple devices with a modern interface.',
  },
  {
    icon: <FaGithub />,
    title: 'Open Source',
    description: 'Adapt, implement, and create new solutions through our GitHub.',
  },
  {
    icon: <Md3dRotation />,
    title: '3D Visualization',
    description: 'Visualize the Corpus Callosum in real-time 3D format.',
  },
  {
    icon: <AiFillExperiment />,
    title: 'New Methods Integration',
    description: 'Implement and test your own segmentation or parcelation methods and compare them.',
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <h2>Features</h2>
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
