import { useState } from 'react';
import { cursos } from '../data/cursos';
import type { Categoria } from '../types/curso';
import CursoCard from './CursoCard';

const categorias: {id: Categoria; rotulo: string }[] = [
    { id: 'moveis', rotulo: 'Máquinas móveis' },
    { id: 'industriais', rotulo: 'Industriais' },
    { id: 'nrs', rotulo: 'NRs de segurança' },
];

function Cursos() {
    const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria>('moveis');

    const CursosFiltrados = cursos.filter((curso) => curso.categoria === categoriaAtiva);

    return (
        <section id="cursos" className="container cursos">
            <p className="secao-eyebrow">Cursos em Destaque</p>
            <h2 className="secao-titulo">Nossos Cursos Mais Buscados</h2>

            {/* Abas de categoria */}
            <div  className="cursos-abas">
                {categorias.map((cat) => {
                    const quantidade = cursos.filter((c) => c.categoria === cat.id).length;
                    const ativa = cat.id === categoriaAtiva;
                    return (
                        <button
                            key={cat.id}
                            className={ativa ? 'curso-ava ativa' : 'cursos-aba'}
                            onClick={() => setCategoriaAtiva(cat.id)}
                            >
                                {cat.rotulo} <span className="cursos-aba-num">{quantidade}</span>
                            </button>
                    );
                })}
            </div>

            {/* grade so com os cursos filtrador */}
            <div className="cursos-grid">
                {CursosFiltrados.map((curso) => (
                    <CursoCard key={curso.id} curso={curso} />
                ))}
            </div>
        </section>
    );
}

export default Cursos;