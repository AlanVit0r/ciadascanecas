import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Cia das Canecas Maringá</h3>
          <p>Sua loja especializada em canecas personalizadas na região de Maringá. Qualidade e criatividade em cada produto.</p>
        </div>
        <div className={styles.section}>
          <h4>Links Rápidos</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/produtos">Produtos</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Contato</h4>
          <p>Telefone: (44) 99999-9999</p>
          <p>Email: contato@ciadanecas.com</p>
          <p>Endereço: Rua Exemplo, 123 - Maringá, PR</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Cia das Canecas Maringá. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}