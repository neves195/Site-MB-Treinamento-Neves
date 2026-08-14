function Servicos() {
    return (
        <section id="servicos" className="container servicos">
            <p className="secao-eyebrow">Nossos Serviços</p>
            <h2 className="secao-titulo">O que torna a MB Consultoria sua Melhor Escolha</h2>
            <p className="secao-subtitulo">
                Unimos experiência, estrutura e compromisso com a
                evolução profissional da sua equipe e do seus colaboradores.
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