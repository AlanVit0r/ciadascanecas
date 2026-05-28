import styles from './sobre.module.css';

export default function Sobre() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sobre Nós</h1>
      <p className={styles.paragraph}>
        A Cia das Canecas Maringá é uma empresa especializada em personalização de canecas e brindes personalizados. Com anos de experiência no mercado, oferecemos produtos de alta qualidade e atendimento personalizado para tornar seu momento especial ainda mais único.
      </p>
      <p className={styles.paragraph}>
        Localizados em Maringá-PR, atendemos toda a região com rapidez e eficiência. Nosso compromisso é transformar ideias em produtos incríveis que superem as expectativas dos nossos clientes.
      </p>
      <section className={styles.missionValues}>
        <h2 className={styles.subtitle}>Missão</h2>
        <p className={styles.paragraph}>Oferecer produtos personalizados de excelência, com criatividade e inovação, proporcionando satisfação e memórias positivas aos nossos clientes.</p>
        <h2 className={styles.subtitle}>Valores</h2>
        <ul className={styles.list}>
          <li>Qualidade e compromisso</li>
          <li>Criatividade e inovação</li>
          <li>Atendimento personalizado</li>
          <li>Responsabilidade e ética</li>
        </ul>
      </section>
    </div>
  );
}