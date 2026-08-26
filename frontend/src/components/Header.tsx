import { useState, useEffect } from "react"
import { getLinkWhatsapp } from "../config";
import { X, Moon, Sun, Menu } from "lucide-react";

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

    const [rolado, setRolado] = useState(false);

    useEffect(() => {
        function verificarScroll() {
        setRolado(window.scrollY > 80);
        }
        window.addEventListener('scroll', verificarScroll);
        return () =>window.removeEventListener('scroll', verificarScroll);
        }, []);

    function alterarTema() {
        setTema(tema === 'claro' ? 'escuro' : 'claro');
    }

    const mensagem = "Olá! Gostaria de saber mais sobre os treinamentos da MB Consultoria Neves.";
    const linkWhatsapp = getLinkWhatsapp(mensagem);

    return (
        
        <header className={`header${rolado ? ' rolado' : ''}`}>
            {/* Esquerda: logo */}
            <div className="header-logo">
           <img 
           src="/logo-nova.jpeg"
           alt="MB Consultoria Neves"
           className="header-logo-img"
           />
        </div>

            {/* Centro: os atalhos */}
            <nav className={`header-nav${menuAberto ? ' aberto' : ''}`}>
            {menuAberto && (
            <button className="btn-fechar-menu" onClick={() => setMenuAberto(false)}>
                    <X size={26} />
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
                    {tema === 'claro' ? <Moon size={18} /> : <Sun size={18} />} 
                </button>
                <button className="btn-hamburger" onClick={() => setMenuAberto(true)} aria-label="Abrir menu">
                    <Menu size={26} />
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
