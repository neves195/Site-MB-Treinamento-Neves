function Header() {
    return (
        <header className="header">
            <div className="header-logo">MB Consultoria e Treinamento Neves</div>  {/*Logo em texto por enquanto */}

            {/* Direita:  navegação + botão do whatsapp */}
            <nav className="header-nav">
                <a href="#cursos">Cursos</a>
                <a href="#contato">Contato</a>
                <a href="#turmas">Turmas</a>

                <a
                    className="btn-whatsapp"
                    href="https://wa.me/5514991839851"
                    target="_blank"
                    rel="noopener"
                    >
                    Fale no WhatsApp
                </a>
            </nav>
        </header>
    );
}

export default Header;
