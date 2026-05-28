import styles from './portfolio.module.css';

const projects = [
  { type: 'Datas Comemorativas', image: 'https://placehold.co/300x200?text=Datas+Comemorativas' },
  { type: 'Corporativos', image: 'https://placehold.co/300x200?text=Corporativos' },
  { type: 'Aniversários', image: 'https://placehold.co/300x200?text=Aniversários' },
  { type: 'Presentes Personalizados', image: 'https://placehold.co/300x200?text=Presentes+Personalizados' }
];

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfólio</h1>
      <p className={styles.subtitle}>Conheça alguns dos nossos trabalhos</p>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.type} className={styles.image} />
            <p className={styles.caption}>{project.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}