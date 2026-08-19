function Servicos() {
    return (
        <section id="servicos" className="container servicos">
            <p className="secao-eyebrow">Nossos Serviços</p>
            <h2 className="secao-titulo">Treinamento que qualifica, consultoria que protege</h2>
            <p className="secao-subtitulo">
                Da capacitação do operador à documentação da empresa - resolvemos os dois
                lados da segurança do trabalho, com prática de verdade e certificado na hora.
            </p>

            <div className="servicos-grid">

                {/* Pilar 1 - Treinamentos */}
                <div className="servico-card">
          <span className="servico-icone" aria-hidden="true">🏗️</span>
          <h3 className="servico-titulo">Treinamentos em NRs e Máquinas</h3>
          <p className="servico-texto">
            Capacitação, reciclagem e certificação para operadores de
            empilhadeira, retroescavadeira, munck, ponte rolante — além das NRs
            de segurança como NR-35, NR-33 e NR-10.
          </p>
          <a className="servico-link" href="#cursos">Ver catálogo →</a>
        </div>

                {/* Pilar 2 - Consultoria */}
                <div className="servico-card">
          <span className="servico-icone" aria-hidden="true">📋</span>
          <h3 className="servico-titulo">Consultoria Empresarial</h3>
          <p className="servico-texto">
            Diagnóstico, documentação e adequação da sua empresa às exigências
            de segurança do trabalho — com acompanhamento para manter tudo em dia
            entre uma fiscalização e outra.
          </p>
          <a className="servico-link" href="#contato">Solicitar diagnóstico →</a>
        </div>
      </div>
    </section>
    );
}

export default Servicos;