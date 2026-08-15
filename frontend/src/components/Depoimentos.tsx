const depoimentos = [
    {
        id: 1,
        texto: 'Fiz o curso de empilhadeira e em duas semanas já estava trabalhando. A prática com a máquina real fez toda a diferença.',
        nome: 'Carlos Silva',
        cargo: 'Operador de Empilhadeira',
        iniciais: 'CS',
    },
    {
         id: 2,
        texto: 'Contratamos a MB para capacitar toda a equipe nas NRs. Documentação impecável e instrutores que entendem de fábrica de verdade.',
        nome: 'Marcos Oliveira',
        cargo: 'Coordenador de Segurança — Ind. Metalúrgica',
        iniciais: 'MO',
    },
    {
        id: 3,
        texto: 'Nunca tinha subido em uma máquina. O curso me deu confiança e o certificado me abriu portas. Recomendo de olhos fechados.',
        nome: 'Ana Rodrigues',
        cargo: 'Ex-aluna — Retroescavadeira',
        iniciais: 'AR',
    },
    ];

function Depoimentos() {
    return (
        <section id="depoimentos" className="container depoimentos">
            <p className="secao-eyebrow">Depoimentos</p>
            <h2 className="secao-titulo">O que Dizem Nossos Alunos</h2>

            <div className="depoimentos-grid">
                {depoimentos.map((dep) => (
                    <div key={dep.id} className="depoimento-card">
                         <div className="depoimento-estrelas" aria-label="5 estrelas">★★★★★</div>
                         <p className="depoimento-texto">"{dep.texto}</p>
                         <div className="depoimento-autor">
                            <span className="depoimento-avatar" aria-hidden="true">{dep.iniciais}</span>
                            <div>
                                <strong className="depoimento-nome">{dep.nome}</strong>
                                <span className="depoimento-cargo">{dep.cargo}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <p className="depoimentos-nota">
                Depoimentos ilustrativos - substituir por relatos reais dos alunos.
            </p>
        </section>
    );
}

export default Depoimentos;
