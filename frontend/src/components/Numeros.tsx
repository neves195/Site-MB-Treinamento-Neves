import { useEffect, useRef, useState } from 'react';
import Counter from './Counter';

const estatistica = [
    { valor: 480, sufixo: '+', rotulo: 'Turmas realizadas' },
    { valor: 6500, sufixo: '+', rotulo: 'Alunos certificados' },
    { valor: 15, sufixo: '+', rotulo: 'Anos de experiência' },
    { valor: 120, sufixo: '+', rotulo: 'Empresas atendidas' },
];

function Numeros() {
    const ref = useRef<HTMLDivElement>(null);
    const [visivel, setVisivel] = useState(false);

    // Só dispara a contagem quando a grade de números entra na tela
    // (mesmo padrão do Reveal.tsx) — senão anima no carregamento da página,
    // antes de dar tempo da pessoa rolar até aqui.
    useEffect(() => {
        const elemento = ref.current;
        if (!elemento) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisivel(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(elemento);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="numero container">
            <div className="numeros-grid" ref={ref}>
                {estatistica.map((item) => (
                <div key={item.rotulo} className="numero-card">
                    <span className="numero-valor">
                        <Counter valor={item.valor} fontSize={38} cor="#FFFFFF" peso={800} ativo={visivel} />
                        {item.sufixo}
                    </span>
                    <span className="numero-rotulo">{item.rotulo}</span>
                    </div>
                ))}
                </div>
                <p className="numeros-nota">
                    Números ilustrativos - substituir pelos dados reais.
                </p>
            </section>
    );
}

export default Numeros;
