import { getLinkWhatsapp, ENDERECO_EXIBIDO, HORARIO_EXIBIDO, LINK_MAPA, LINK_ROTA, MAPA_PREVIA } from '../config';
import { FaWhatsapp } from 'react-icons/fa';
import { MapPin, Clock, Navigation } from 'lucide-react';

function Contato() {
  const mensagem =
    'Olá! Quero me inscrever em um curso da MB Consultoria e Treinamento Neves.';
  const linkWhatsapp = getLinkWhatsapp(mensagem);

  return (
    <section id="contato" className="cta">
      <div className="cta-box">
        <h2 className="cta-titulo">
          Pronto para começar sua <span className="destaque">formação</span>?
        </h2>
        <p className="cta-texto">
          Resposta rápida no WhatsApp, sem compromisso. Conte quantas pessoas
          precisa capacitar e em qual curso - montamos a proposta na hora.
        </p>
        <a
          className="btn-primario btn-com-icone btn-wa cta-botao"
          href={linkWhatsapp}
          target="_blank"
          rel="noopener"
        >
          <FaWhatsapp size={18} aria-hidden="true" />
          Quero Me Inscrever
        </a>
      </div>

      <div className="cta-local">
        <div className="cta-local-info">
          <h3 className="cta-local-titulo">Onde estamos</h3>
          <p className="cta-local-linha">
            <MapPin size={18} aria-hidden="true" />
            <span>{ENDERECO_EXIBIDO}</span>
          </p>
          <p className="cta-local-linha">
            <Clock size={18} aria-hidden="true" />
            <span>{HORARIO_EXIBIDO}</span>
          </p>
          <div className="cta-local-botoes">
            <a className="btn-primario btn-com-icone" href={LINK_MAPA} target="_blank" rel="noopener">
              <MapPin size={18} aria-hidden="true" />
              Abrir no Google Maps
            </a>
            <a className="btn-secundario btn-com-icone" href={LINK_ROTA} target="_blank" rel="noopener">
              <Navigation size={18} aria-hidden="true" />
              Como chegar
            </a>
          </div>
        </div>

        {/* A prévia é só visual: o link por cima faz o clique abrir o Google Maps */}
        <a
          className="cta-mapa"
          href={LINK_MAPA}
          target="_blank"
          rel="noopener"
          aria-label="Abrir a localização da MB Consultoria no Google Maps"
        >
          <iframe
            src={MAPA_PREVIA}
            title="Mapa da localização da MB Consultoria e Treinamento Neves"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
          />
        </a>
      </div>
    </section>
  );
}

export default Contato;