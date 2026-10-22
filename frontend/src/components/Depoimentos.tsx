const depoimentos = [
    {
        id: 1,
        texto: 'Excelente curso! Os instrutores são muito comunicativos, atenciosos e gente boa. Sabem ensinar muito bem, explicam o conteúdo com clareza e têm muita paciência para tirar dúvidas. Foi uma ótima experiência, recomendo muito o curso a todos!',
        nome: 'Kaua Carvalho',
        cargo: 'Aluno - Empilhadeira',
        iniciais: 'KC',
    },
    {
         id: 2,
        texto: 'Curso muito bom, principalmente para quem não tem experiência. Os instrutores explicam de forma simples e prática, com bastante conhecimento e paciência. Foi uma experiência muito positiva e de bastante aprendizado!',
        nome: 'Rudinei Leite',
        cargo: 'Funcionário da empresa - Tudor Baterias',
        iniciais: 'RL',
    },
    {
        id: 3,
        texto: 'Foi uma experiência muito boa e de grande aprendizado. Aprendi bastante coisa que vou levar para minha vida profissional. Os instrutores explicaram tudo muito bem e teve muita paciência em ensinar. Foi uma ótima oportunidade para adquirir mais conhecimento e experiência. Agradeço a todos que fizeram parte desse aprendizado!',
        nome: 'Mariana Victoria',
        cargo: 'Aluna - Empilhadeira',
        iniciais: 'MV',
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
                         <p className="depoimento-texto">"{dep.texto}"</p>
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
        </section>
    );
}

export default Depoimentos;
