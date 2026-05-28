import styles from './comoFunciona.module.css';

const steps = [
  { id: 1, title: 'Envio da ideia/arte', description: 'Você nos envia sua ideia ou arte personalizada através do nosso formulário ou WhatsApp.', icon: '💡' },
  { id: 2, title: 'Prévia digital', description: 'Criamos uma prévia digital para sua aprovação antes da produção.', icon: '🖥️' },
  { id: 3, title: 'Produção', description: 'Após aprovação, iniciamos a produção com materiais de alta qualidade.', icon: '🖨️' },
  { id: 4, title: 'Retirada/Entrega', description: 'Você retira em nossa loja em Maringá ou recebe em casa pelo nosso serviço de entrega.', icon: '🚚' }
];

export default function ComoFunciona() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Como Funciona</h1>
      <p className={styles.subtitle}>Passo a passo para personalizar sua caneca na Cia das Canecas Maringá</p>
      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.id} className={styles.step}>
            <span className={styles.icon}>{step.icon}</span>
            <h2 className={styles.stepTitle}>{step.title}</h2>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}