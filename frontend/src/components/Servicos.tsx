function Servicos() {
    return (
        <section id="servicos" className="container servicos">
            <h2 className="secao-titulo">O que fazemos</h2>

            <div className="servicos-grid">

                {/* Pilar 1 - Treinamentos */}
                <div className="servico-card">
                    <span className="servico-icone" aria-hidden="true">🎓</span>
                    <h3 className="servico-titulo">Treinamento em NRs</h3>
                    <p className="servico-texto">
                        Capacitação e reciclagem em Normas Regulamentadoras e operação de
                        máquinas, com prática e certificado emitido na hora.
                    </p>
                </div>

                {/* Pilar 2 - Consultoria */}
                <div className="servico-card">
                    <span className="servico-icone" aria-hidden="true">📋</span>
                    <h3 className="servico=titulo">Consultoria empresarial</h3>
                    <p className="servico-texto">
                        Documentações e adequações á segurança do trabalho para deixar sua
                        empresa em conformidade com a fiscalização.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Servicos;