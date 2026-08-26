import { getLinkWhatsapp } from '../config';
import { ShieldCheck, Check } from "lucide-react";

function Hero() {
  const mensagem =
    'Olá! Gostaria de saber mais sobre os cursos e treinamentos da MB Consultoria e Treinamento Neves.';
  const linkWhatsapp = getLinkWhatsapp(mensagem);

  return (
    <section className="hero">
      <div className="hero-conteudo">
        {/* Coluna esquerda: o texto */}
        <div className="hero-texto">
          <span className="hero-badge"><ShieldCheck size={14} /> Referência em Segurança do Trabalho</span>

          <h1 className="hero-titulo">
            Equipes preparadas. <span className="destaque">Empresas protegidas.</span>
          </h1>

          <p className="hero-subtitulo">
            Treinamentos em NRs e Segurança do Trabalho para profissionais e empresas:
            equipes mais capacitadas, riscos prevenidos e carreiras prontas para o mercado.
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
            <span className="hero-tag hero-tag-ok"><Check size={14} /> Certificado na hora</span>
            <span className="hero-tag">In company em todo o Brasil · Turmas em Agudos/SP</span>
          </div>
        </div>

        {/* Coluna direita: imagem + card flutuante "15+ anos" */}
        <div className="hero-visual">
          <div className="hero-imagem">
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