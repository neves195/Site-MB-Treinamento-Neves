import { getLinkWhatsapp } from '../config';

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
          Resposta rápida no WhatsApp. Conte quantas pessoas precisa capacitar e
          em qual curso — montamos a proposta na hora.
        </p>
        <a
          className="btn-primario cta-botao"
          href={linkWhatsapp}
          target="_blank"
          rel="noopener"
        >
          Quero Me Inscrever
        </a>
      </div>
    </section>
  );
}

export default Contato;