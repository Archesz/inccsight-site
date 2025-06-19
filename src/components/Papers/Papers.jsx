import { motion } from 'framer-motion';
import './Papers.scss';

const papers = [
  {
    title: 'inCCsight: A software for exploration and visualization of DT-MRI data of the Corpus Callosum',
    authors: 'Thais Caldeira, Leticia Rittner, et al.',
    year: 2021,
    url: 'https://doi.org/10.1016/j.cag.2021.07.012',
  },
  {
    title: 'Volumetric corpus callosum segmentation integrated to inCCsight software for supporting DTI-based studies',
    authors: 'João Vitor Alcantara, Joany Rodrigues, Leticia Rittner, et al.',
    year: 2024,
    url: 'https://doi.org/10.1117/12.2654459',
  },
];

export default function Papers() {
  return (
    <section className="papers" id="papers">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Publications</h2>
        <ul>
          {papers.map(({ title, authors, year, url }, index) => (
            <li key={index} className="paper-item">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <strong>{title}</strong>
              </a>
              <p>{authors} — {year}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
