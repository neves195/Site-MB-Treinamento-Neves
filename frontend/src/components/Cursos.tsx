import { useState } from 'react';
import { cursos } from '../data/cursos';
import type { Categoria } from '../types/curso';
import { getLinkWhatsapp } from '../config';
import CursoCard from './CursoCard';

const categorias: {id: Categoria; rotulo: string }[] = [
    { id: 'moveis', rotulo: 'Máquinas móveis' },
    { id: 'industriais', rotulo: 'Industriais' },
    { id: 'nrs', rotulo: 'NRs de segurança' },
];

const VISIVEIS_INICIAL = 6;
const INCREMENTO = 6;

function Cursos() {
    const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria>('moveis');
    const [visiveis, setVisiveis] = useState(VISIVEIS_INICIAL);

    function trocarCategoria(categoria: Categoria) {
        setCategoriaAtiva(categoria);
        setVisiveis(VISIVEIS_INICIAL); // volta a mostrar só os primeiros ao trocar de aba
    }

    const CursosFiltrados = cursos.filter((curso) => curso.categoria === categoriaAtiva);
    const CursosVisiveis = CursosFiltrados.slice(0, visiveis);
    const restantes = CursosFiltrados.length - CursosVisiveis.length;

    return (
        <section id="cursos" className="container cursos">
            <p className="secao-eyebrow">Cursos em Destaque</p>
            <h2 className="secao-titulo">Cursos para Cada Necessidade</h2>

            {/* Abas de categoria */}
            <div  className="cursos-abas">
                {categorias.map((cat) => {
                    const quantidade = cursos.filter((c) => c.categoria === cat.id).length;
                    const ativa = cat.id === categoriaAtiva;
                    return (
                        <button
                            key={cat.id}
                            className={ativa ? 'cursos-aba ativa' : 'cursos-aba'}
                            onClick={() => trocarCategoria(cat.id)}
                            >
                                {cat.rotulo} <span className="cursos-aba-num">{quantidade}</span>
                            </button>
                    );
                })}
            </div>

            {/* grade so com os cursos filtrador */}
            <div className="cursos-grid">
                {CursosVisiveis.map((curso) => (
                    <CursoCard key={curso.id} curso={curso} />
                ))}
            </div>

            {restantes > 0 && (
                <button
                    type="button"
                    className="btn-secundario cursos-mostrar-mais"
                    onClick={() => setVisiveis(visiveis + INCREMENTO)}
                >
                    Mostrar mais ({restantes})
                </button>
            )}

            <p className="cursos-nao-achou">
                Não encontrou o curso que procura?{' '}
                <a
                    href={getLinkWhatsapp('Olá! Não encontrei o curso que procuro no catálogo. Poderia me passar mais informações?')}
                    target="_blank"
                    rel="noopener"
                >
                    Entre em contato
                </a>{' '}
                para mais informações.
            </p>
        </section>
    );
}

export default Cursos;