import { getLinkWhatsapp } from '../config';
import { ShieldCheck, HardHat, Forklift, Users, ShieldAlert, ArrowDown } from "lucide-react";

const recursos = [
  { icone: HardHat, titulo: 'NRs', texto: 'Treinamentos regulamentados' },
  { icone: Forklift, titulo: 'Máquinas', texto: 'Capacitação em equipamentos' },
  { icone: Users, titulo: 'Empresas', texto: 'Soluções para sua equipe' },
  { icone: ShieldAlert, titulo: 'Segurança', texto: 'Mais proteção no trabalho' },
];

function Hero() {
  const mensagem =
    'Olá! Gostaria de saber mais sobre os cursos e treinamentos da MB Consultoria e Treinamento Neves.';
  const linkWhatsapp = getLinkWhatsapp(mensagem);

  return (
    <section className="hero">
      <div className="hero-conteudo">
        {/* Coluna esquerda: texto */}
        <div className="hero-texto">
          {/* Logo — só existe aqui no Hero, não no header (que é fixo/sticky).
              Duas versões (texto escuro/claro), o CSS mostra a certa conforme o tema. */}
          <div className="hero-logo">
            <img
              src="/logo-mb-clara.png"
              alt="MB Consultoria e Treinamento Neves"
              className="hero-logo-img hero-logo-clara"
            />
            <img
              src="/logo-mb-escura.png"
              alt="MB Consultoria e Treinamento Neves"
              className="hero-logo-img hero-logo-escura"
            />
          </div>

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

          {/* Faixa de recursos - substitui as tags antigas */}
          <div className="hero-recursos">
            {recursos.map((item) => (
              <div key={item.titulo} className="hero-recurso">
                <item.icone className="hero-recurso-icone" size={22} aria-hidden="true" />
                <div>
                  <strong>{item.titulo}</strong>
                  <span>{item.texto}</span>
                </div>
              </div>
            ))}
          </div>

          <a href="#servicos" className="hero-scroll">
            <span className="hero-scroll-seta"><ArrowDown size={16} /></span>
            Conheça mais sobre a MB
          </a>
        </div>

        {/* Coluna direita: foto recortada + selo + frase */}
        <div className="hero-visual">
          <div className="hero-imagem">
            <img src="/hero-visual.jpg" alt="Treinamento prático da MB Consultoria" />
          </div>

          <span className="hero-manuscrito">
            Treinamento é<br />investimento<br />em pessoas!
          </span>

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