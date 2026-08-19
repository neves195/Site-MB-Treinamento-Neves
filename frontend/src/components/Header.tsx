import { useState, useEffect } from "react"
import { getLinkWhatsapp } from "../config";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
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
           src="/logo-branca.png"
           alt="MB Consultoria Neves"
           className="header-logo-img"
           />
        </div>

            {/* Centro: os atalhos */}
            <nav className={`header-nav${menuAberto ? ' aberto' : ''}`}>
            {menuAberto && (
            <button className="btn-fechar-menu" onClick={() => setMenuAberto(false)}>
                    ✕
                </button>
            )}
            <a href="#servicos" onClick={() => setMenuAberto(false)}>Serviços</a>
            <a href="#cursos" onClick={() => setMenuAberto(false)}>Cursos</a>
            <a href="#diferenciais" onClick={() => setMenuAberto(false)}>Diferenciais</a>
            <a href="#turmas" onClick={() => setMenuAberto(false)}>Turmas</a>
            <a href="#depoimentos" onClick={() => setMenuAberto(false)}>Depoimentos</a>
            <a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a>
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
                <button className="btn-hamburger" onClick={() => setMenuAberto(true)} aria-label="Abrir menu">
                ☰
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
