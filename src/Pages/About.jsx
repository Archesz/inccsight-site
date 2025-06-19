import { motion } from 'framer-motion';
import '../styles/About.scss';

export default function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Sobre o projeto</h2>
        <p>
          O <strong>InCCsight</strong> é um software desktop open-source que permite o processamento,
          exploração e visualização de dados de <em>Diffusion Tensor Imaging</em> (DTI) para análise do 
          <strong> Corpo Caloso (CC)</strong>. Portátil e interativo, o InCCsight oferece recursos avançados
          para análise do CC em níveis individual e grupal.
        </p>
        <p>
          A ferramenta incorpora três técnicas diferentes de segmentação e cinco técnicas de parcelamento,
          permitindo a comparação dos dados gerados por diferentes métodos. Um dos destaques é o método
          de segmentação volumétrica baseado em Redes Neurais Convolucionais (<strong>CNN</strong>), que proporciona
          uma abordagem avançada e eficaz para segmentação do Corpo Caloso.
        </p>
        <p>
          Além disso, o software possibilita a visualização 3D do Corpo Caloso, agregando uma dimensão visual
          fundamental ao processo de análise. Como solução open-source, o InCCsight é uma ferramenta acessível
          para a comunidade científica e de pesquisa, promovendo colaboração e avanço do conhecimento na área
          de análise de DTI do Corpo Caloso.
        </p>
        <p>
          Com uma interface amigável e recursos sofisticados, o <strong>InCCsight</strong> é uma escolha poderosa
          para análise de dados DTI relacionados ao Corpo Caloso.
        </p>
      </motion.div>
    </section>
  );
}
