import { useState, useEffect } from "react"
import { getLinkWhatsapp } from "../config";

function Header() {
    const [tema, setTema] = useState<'claro' | 'escuro'>('claro');

    useEffect(() => {
        if (tema === 'escuro') {
            document.documentElement.setAttribute('data-theme', 'escuro');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [tema]);

    function alterarTema() {
        setTema(tema === 'claro' ? 'escuro' : 'claro');
    }

    const mensagem = "Olá! Gostaria de saber mais sobre os treinamentos da MB Consultoria Neves.";
    const linkWhatsapp = getLinkWhatsapp(mensagem);

    return (
        
        <header className="header">
            {/* Esquerda: logo */}
            <div className="header-logo">
           <img 
           src={tema === 'escuro' ? '/logo-branca.png' : '/logo-azul.png'}
           alt="MB Consultoria Neves"
           className="header-logo-img"
           />
        </div>

            {/* Centro: os atalhos */}

            <nav className="header-nav">
                <a href="#servicos">Serviços</a>
                <a href="#cursos">Cursos</a>
                <a href="#diferenciais">Diferenciais</a>
                <a href="#turmas">Turmas</a> 
                 <a href="#depoimentos">Depoimentos</a>
                <a href="#contato">Contato</a>

            </nav>

            { /* Direita: tema + whatsapp */}
            <div className="header-acoes">
            <button
                className="btn-tema"
                onClick={alterarTema}
                aria-label="Alterar tema"
                >
                    {tema === 'claro' ? '🌙' : '☀️'}
                </button>
                
                <a
                    className="btn-whatsapp"
                    href={linkWhatsapp}
                    target="_blank"
                    rel="noopener"
                    >
                    Fale no WhatsApp
                </a>
            </div>
        </header>
    );
}

export default Header;
