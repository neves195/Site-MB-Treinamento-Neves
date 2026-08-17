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
            Opere máquinas com segurança - e com <span className="destaque"> certificado na hora</span>.
          </h1>

          <p className="hero-subtitulo">
            Treinamentos prático com máquinas de verdade e certificado válido em
            todo o Brasil, emitido na hora. Atendemos empresas em todo o país
            (in company) e alunos em Agudos/SP e região.
          </p>

          <div className="hero-botoes">
            <a className="btn-primario" href={linkWhatsapp} target="_blank" rel="noopener">
              Falar no WhatsApp
            </a>
            <a className="btn-secundario" href="#cursos">
              Ver Cursos
            </a>
          </div>

          <div className="hero-tags">
            <span className="hero-tag hero-tag-ok">✓ Certificado na hora</span>
            <span className="hero-tag">In company em todo o Brasil · Turmas em Agudos/SP</span>
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