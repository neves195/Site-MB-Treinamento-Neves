// Links de navegação do rodapé (lista para o .map()).
const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#turmas', label: 'Turmas' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="rodape-conteudo">
        {/* Coluna 1: marca */}
        <div>
          <span className="rodape-logo">MB Consultoria Neves</span>
          <p className="rodape-desc">
            Treinamentos em Normas Regulamentadoras e consultoria em segurança
            do trabalho — Agudos/SP.
          </p>
          <div className="rodape-redes">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">📘</a>
          </div>
        </div>

        {/* Coluna 2: navegação */}
        <div>
          <h4 className="rodape-titulo">Navegação</h4>
          <ul className="rodape-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: contato */}
        <div>
          <h4 className="rodape-titulo">Contato</h4>
          <ul className="rodape-contato">
            <li>WhatsApp: (14) 99183-9851</li>
            <li>WhatsApp: (14) 99760-3799</li>
            <li>treinamentombconsultoria@gmail.com</li>
            <li>Rua Celso Morato Leite, 384 — Jardim Cruzeiro, Agudos/SP</li>
            <li>Seg. a sex., 8h às 18h</li>
          </ul>
        </div>
      </div>

      <div className="rodape-base">
        © {anoAtual} MB Consultoria Neves — Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;