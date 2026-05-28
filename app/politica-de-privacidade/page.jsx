import styles from './politicaPrivacidade.module.css';

export default function PoliticaDePrivacidade() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Política de Privacidade - Cia das Canecas Maringá</h1>
      
      <section className={styles.section}>
        <h2>Coleta de Dados</h2>
        <p>Coletamos informações pessoais fornecidas voluntariamente por você ao realizar um pedido, como nome, endereço, e-mail e telefone. Também podemos coletar dados automaticamente, como endereço IP e informações de navegação.</p>
      </section>

      <section className={styles.section}>
        <h2>Uso das Informações</h2>
        <p>As informações coletadas são utilizadas para processar pedidos, melhorar nossos serviços, personalizar sua experiência e enviar comunicações relacionadas ao seu pedido.</p>
      </section>

      <section className={styles.section}>
        <h2>Compartilhamento</h2>
        <p>Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para processar pagamentos ou entregar produtos, ou quando exigido por lei.</p>
      </section>

      <section className={styles.section}>
        <h2>Cookies</h2>
        <p>Utilizamos cookies para melhorar a navegação e analisar o uso do site. Você pode gerenciar as preferências de cookies nas configurações do seu navegador.</p>
      </section>

      <section className={styles.section}>
        <h2>Direitos do Usuário</h2>
        <p>Você tem direito a acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Para isso, entre em contato conosco através dos canais abaixo.</p>
      </section>

      <section className={styles.section}>
        <h2>Contato</h2>
        <p>Em caso de dúvidas sobre esta política, entre em contato pelo e-mail: contato@ciadascanecasmaringa.com.br ou pelo telefone: (44) 99999-9999.</p>
      </section>
    </div>
  );
}