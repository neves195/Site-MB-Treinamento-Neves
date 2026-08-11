function Hero() {
    const mensagem =
    'Olá! Gostaria de saber mais sobre os cursos e treinamentos da MB Consultoria e Treinamento Neves.';
    const linkWhatsapp = `https://wa.me/550000000000000?text=${encodeURIComponent(mensagem)}`;

    return (
        <section className="hero">
            {/* Selo (badge) no topo */}
            <span className="hero-badge">Treinamentos e NRs</span>

            {/* Título com uma parte destacada em azul (o <span destaque>)*/}
            <h1 className="hero-titulo">
                Segurança do trabalho <span className="destaque">sob controle</span>
            </h1>  

            <p className="hero-subtitulo">
                Capacitação em Normas Regulamentadoras e operação de máquinas, com 
                consultoria para deixar sua empresa em conformidade e suas equipes
                preparadas de verdade.
            </p>

            {/* Os dois botões principais */}
            <div className="hero-botoes">
                <a
                className="btn-primario"
                href={linkWhatsapp}
                target="_blank"
                rel="noopener"
                >
                    Fale no WhatsApp
                </a>
                <a className="btn-secundario" href="#cursos">
                    Ver cursos
                </a>
            </div>
        </section>
    );
}

export default Hero;