import { getLinkWhatsapp } from '../config';
import { FaWhatsapp } from 'react-icons/fa';

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
    </section>
  );
}

export default Contato;