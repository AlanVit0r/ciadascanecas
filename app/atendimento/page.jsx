import styles from './atendimento.module.css';

export default function Atendimento() {
  return (
    <div className={styles.container}>
      <h1>Atendimento</h1>
      <section className={styles.contactInfo}>
        <h2>Informações de Contato</h2>
        <p><strong>Endereço:</strong> Rua das Canecas, 123 - Centro, Maringá - PR, 87000-000</p>
        <p><strong>Telefone:</strong> (44) 99999-8888</p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/5544999998888" target="_blank" rel="noopener noreferrer">Clique aqui para falar conosco</a></p>
        <p><strong>Horário de Atendimento:</strong> Segunda a Sexta, das 08h às 18h | Sábado, das 08h às 12h</p>
      </section>
      <section className={styles.formSection}>
        <h2>Envie sua Mensagem</h2>
        <form className={styles.form}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" placeholder="Seu nome" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="seu@email.com" required />
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" rows="5" placeholder="Sua mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}