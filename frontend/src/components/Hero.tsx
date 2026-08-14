import { getLinkWhatsapp } from '../config';

function Hero() {
  const mensagem =
    'Olá! Gostaria de saber mais sobre os cursos e treinamentos da MB Consultoria e Treinamento Neves.';
  const linkWhatsapp = getLinkWhatsapp(mensagem);

  return (
    <section className="hero">
      <div className="hero-conteudo">
        {/* Coluna esquerda: o texto */}
        <div className="hero-texto">
          <span className="hero-badge">🛡️ Referência em Segurança do Trabalho</span>

          <h1 className="hero-titulo">
            Sua escola de <span className="destaque">máquinas</span> e segurança.
          </h1>

          <p className="hero-subtitulo">
            Treinamentos em Normas Regulamentadoras e operação de máquinas
            pesadas, com consultoria para deixar sua empresa 100% em conformidade.
          </p>

          <div className="hero-botoes">
            <a className="btn-primario" href={linkWhatsapp} target="_blank" rel="noopener">
              Fale Conosco
            </a>
            <a className="btn-secundario" href="#cursos">
              Ver Cursos
            </a>
          </div>

          <div className="hero-tags">
            <span className="hero-tag hero-tag-ok">✓ Certificado na hora</span>
            <span className="hero-tag">Turmas abertas e in company — Agudos/SP</span>
          </div>
        </div>

        {/* Coluna direita: imagem + card flutuante "15+ anos" */}
        <div className="hero-visual">
          <div className="hero-imagem">
            <span className="hero-imagem-placeholder">
              📷 Foto principal — treinamento com máquina
            </span>
          </div>
          <div className="hero-flutuante">
            <strong>15+ anos</strong>
            <span>de experiência</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;