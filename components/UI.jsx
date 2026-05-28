import styles from './ui.module.css';

export function Button({ variant = 'primary', children, ...props }) {
  return (
    <button className={`${styles.button} ${styles[variant] || ''}`} {...props}>
      {children}
    </button>
  );
}

export function Card({ image, title, description, ...props }) {
  return (
    <div className={styles.card} {...props}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export function Input({ ...props }) {
  return <input className={styles.input} {...props} />;
}

export function Textarea({ ...props }) {
  return <textarea className={styles.textarea} {...props} />;
}
