const estatistica = [
    { valor: '480+', rotulo: 'Turmas realizadas' },
    { valor: '6.500+', rotulo: 'Alunos certificados' },
    { valor: '15+', rotulo: 'Anos de experiência' },
    { valor: '120+', rotulo: 'Empresas atendidas' },
];

function Numeros() {
    return (
        <section className="numero container">
            <div className="numeros-grid">
                {estatistica.map((item) => (
                <div key={item.rotulo} className="numero-card">
                    <span className="numero-valor">{item.valor}</span>
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
