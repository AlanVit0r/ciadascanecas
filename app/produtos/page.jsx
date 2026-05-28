import styles from './produtos.module.css';

export default function Produtos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nossos Produtos</h1>
      <section className={styles.section}>
        <h2>Canecas</h2>
        <p>Canecas personalizadas para todas as ocasiões. Desde canecas de porcelana até canecas térmicas, temos o modelo ideal para você.</p>
      </section>
      <section className={styles.section}>
        <h2>Squeezes</h2>
        <p>Squeezes práticas e estilosas para hidratação no dia a dia. Personalize com sua marca ou frase favorita.</p>
      </section>
      <section className={styles.section}>
        <h2>Brindes Corporativos</h2>
        <p>Soluções em brindes personalizados para empresas. Canecas, squeezes e muito mais para fortalecer sua marca.</p>
      </section>
      <section className={styles.section}>
        <h2>Presentes Personalizados</h2>
        <p>Presentes únicos que encantam. Personalize canecas, squeezes e outros itens com fotos e textos especiais.</p>
      </section>
    </div>
  );
}