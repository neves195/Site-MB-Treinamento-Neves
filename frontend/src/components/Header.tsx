import { getLinkWhatsapp } from "../config";

function Header() {
    const mensagem = "Olá! Gostaria de saber mais sobre os treinamentos da MB Consultoria Neves.";
    const linkWhatsapp = getLinkWhatsapp(mensagem);

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
                    href={linkWhatsapp}
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
