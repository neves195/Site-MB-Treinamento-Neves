import { useState } from 'react';
import type { Curso } from '../types/curso';
import { getLinkWhatsapp } from '../config';
import { createPortal } from 'react-dom';
import { ImageOff } from 'lucide-react';

interface CursoCardProps {
    curso: Curso;
}

function CursoCard({ curso }: CursoCardProps) {
    const [aberto, setModalAberto] = useState(false);
    // Enquanto a foto real não é enviada (ou se o arquivo não existir), cai no placeholder
    const [semFoto, setSemFoto] = useState(!curso.imagem);

    const mensagem = `Olá! Tenho interesse no curso de ${curso.nome} (${curso.nr}). Poderia me passar mais informações?`;
    const linkWhatsapp = getLinkWhatsapp(mensagem);

return (
    <div className={`card card-${curso.categoria}`}>
        <div className="card-imagem">
            {semFoto ? (
                <span className="card-imagem-placeholder">
                    <ImageOff size={22} aria-hidden="true" />
                </span>
            ) : (
                <img
                    src={curso.imagem}
                    alt={curso.nome}
                    onError={() => setSemFoto(true)}
                    loading="lazy"
                />
            )}
        </div>

        <span className="card-nr">{curso.nr}</span>
        <h3 className="card-nome">{curso.nome}</h3>
        <p className="card-carga">{curso.cargaHoraria}</p>
        <p className="card-desc">{curso.descricaoCurta}</p>

        <div className="card-botoes">

            {/* Abre o modal */}
            <button className="btn-mais-info" onClick={() => setModalAberto(true)}>
                Mais informações
            </button>

            { /* Botão de whatsApp */}
        <a  className="card-whatsapp"
            href={linkWhatsapp}
            target="_blank"
            rel="noopener"
        >
            WhatsApp
        </a>
    </div>

    {/* modal so é desenhado quando modalAberto for true */}
 {aberto && createPortal(
    //overlay = fundo escuro; clica nele fecha o modal
    <div className="modal-overlay" onClick={() => setModalAberto(false)}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
                className="modal-fechar"
                onClick={() => setModalAberto(false)}
                aria-label="Fechar"
                >
                    x
                </button>

                <span className="card-nr">{curso.nr}</span>
                <h3 className="modal-titulo">{curso.nome}</h3>
                <p className="modal-carga">Carga horária: {curso.cargaHoraria}</p>

                <h4 className="modal-subtitulo">Conteúdo programático</h4>
                <ul className="modal-lista">
                    {curso.conteudoProgramatico.map((topico) => (
                        <li key={topico}>{topico}</li>
                    ))}
                </ul>

                <a className="modal-cta" href={linkWhatsapp} target="_blank" rel="noopener">
                    Tenho Interesse
                </a>
        </div>
    </div>,
    document.body
)}
    </div>
    );
}

export default CursoCard;