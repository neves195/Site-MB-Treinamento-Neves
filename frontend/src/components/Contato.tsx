function Contato() {
    const mensagem = 
        'Olá! Gostaria de solicitar um orçamento de treinamento com a MB Consultoria e Treinamento Neves.';
    const linkWhatsapp = `https://wa.me/5514991839851?text=${encodeURIComponent(mensagem)}`;

    return (
        <section id="contato" className="contato">
            <div className="contato-box">
                <h2 className="contato-titulo">Vamos capacitar sua equipe?</h2>
                <p className="contato-texto">
                    Resposta rápida no WhatsApp. Conte quantas pessoas precisa capacitar e 
                    em qual curso - montamos a proposta.
                </p>
                <a
                className="btn-primario"
                href={linkWhatsapp}
                target="_blank"
                rel="noopener"
                >
                    Fale no WhatsApp
                </a>
            </div>
        </section>
    );
}

export default Contato;