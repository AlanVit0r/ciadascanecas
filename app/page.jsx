import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Produtos />
      <Sobre />
      <Depoimentos />
      <Contato />
    </main>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Cia das Canecas Maringá</h1>
      <p>Personalização e sublimação com qualidade</p>
    </section>
  );
}

function Produtos() {
  return (
    <section className={styles.produtos}>
      <h2>Nossos Produtos</h2>
      <p>Canecas personalizadas, camisetas, e muito mais.</p>
    </section>
  );
}

function Sobre() {
  return (
    <section className={styles.sobre}>
      <h2>Sobre Nós</h2>
      <p>Empresa líder em sublimação em Maringá.</p>
    </section>
  );
}

function Depoimentos() {
  return (
    <section className={styles.depoimentos}>
      <h2>Depoimentos</h2>
      <p>"Excelente serviço!" - Cliente</p>
    </section>
  );
}

function Contato() {
  return (
    <section className={styles.contato}>
      <h2>Contato</h2>
      <p>Telefone: (44) 9xxxx-xxxx</p>
    </section>
  );
}