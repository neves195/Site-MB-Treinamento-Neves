import { useState } from 'react';
import type { Curso } from '../types/curso';


interface CursoCardProps {
    curso: Curso;
}

function CursoCard({ curso }: CursoCardProps) {
    const [aberto, setAberto] = useState(false);

    const mensagem = `Olá! Tenho interesse no curso de ${curso.nome} (${curso.nr}). Poderia me passar mais informações?`;
    const linkWhatsapp = `https://wa.me/5514991839851?text=${encodeURIComponent(mensagem)}`;

return (
    <div className="card">
        <span className="card-nr">{curso.nr}</span>
        <h3 className="card-nome">{curso.nome}</h3>
        <p className="card-carga">{curso.cargaHoraria}</p>
        <p className="card-desc">{curso.descricaoCurta}</p>

        {/* Botão que altera o estado. onClick roda uma função no clique.
            setAberto(!aberto) inverte: se estava falso vira true, e vice-versa. */}
        <button 
            className="card-ementa-btn"
            onClick={() => setAberto(!aberto)}
        >
            {/* Operador ternário: se aberto for true, mostra um texto: senão, outro. */}
            {aberto ? 'Ocultar conteúdo' : 'Ver conteúdo programático'}
        </button>

        {/* Renderização condicional: so mostra a lista se "aberto" for true.
            "aberto && (...)" = " se aberto, desenhe isto". */}
            {aberto && (
                <ul className="card-ementa">
                    {curso.conteudoProgramatico.map((topico) => (
                        <li key={topico}>{topico}</li>
                    ))}
                </ul>
            )}

        <a 
            className="card-whatsapp"
            href={linkWhatsapp}
            target="_blank"
            rel="noopener"
        >
            Tenho interesse
        </a>
    </div>
    );
}

export default CursoCard;