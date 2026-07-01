import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTag } from 'react-icons/fa';
import '../styles/Download.scss';
import CopyBlock from '../components/CopyBlock/CopyBlock';
import { useLanguage } from '../i18n/LanguageContext';

const REPO_URL = 'https://github.com/MICLab-Unicamp/inccsight';

export default function Download() {
  const { t } = useLanguage();
  const d = t.download;
  const [tab, setTab] = useState('compose');

  const composeLines = [
    '# 1. ' + d.composeSteps[0],
    'git clone ' + REPO_URL + '.git',
    'cd inccsight',
    '',
    '# 2. ' + d.composeSteps[1],
    'cp .env.example .env',
    '',
    '# 3. ' + d.composeSteps[2],
    'docker compose up --build',
    '',
    '# 4. ' + d.composeSteps[3],
    '# http://localhost:3001',
  ];

  const cliLines = [
    'docker build -t inccsight .',
    'docker run -p 3001:3001 \\',
    '  -v $(pwd)/data:/app/data \\',
    '  -v $(pwd)/subjects:/mnt/subjects:ro \\',
    '  inccsight',
  ];

  const sourceLines = [
    'git clone ' + REPO_URL + '.git',
    'cd inccsight',
    'npm install',
    'npm run dev   # React :3000 + Express :3001',
  ];

  const gpuLines = [
    'docker compose -f docker-compose.yml -f docker-compose.gpu.yml up',
  ];

  const tabs = [
    { id: 'compose', label: d.tabCompose, lines: composeLines },
    { id: 'cli', label: d.tabCli, lines: cliLines },
    { id: 'source', label: d.tabSource, lines: sourceLines },
  ];

  const active = tabs.find((tb) => tb.id === tab);
  const note = tab === 'cli' ? d.cliNote : tab === 'source' ? d.sourceNote : null;

  return (
    <section className="download" id="download">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="eyebrow">{d.eyebrow}</span>
        <h2>{d.title}</h2>
        <p className="lead">{d.description}</p>

        <div className="tabs">
          {tabs.map((tb) => (
            <button
              key={tb.id}
              className={tb.id === tab ? 'active' : ''}
              onClick={() => setTab(tb.id)}
            >
              {tb.label}
            </button>
          ))}
        </div>

        {note && <p className="tab-note">{note}</p>}
        <CopyBlock lines={active.lines} title="bash" />

        <div className="gpu-box">
          <p>{d.gpuNote}</p>
          <CopyBlock lines={gpuLines} title="bash" />
        </div>

        <p className="requirements">{d.requirements}</p>

        <div className="buttons">
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-filled">
            <FaGithub /> {d.ctaRepo}
          </a>
          <a href={`${REPO_URL}/releases`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FaTag /> {d.ctaReleases}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
