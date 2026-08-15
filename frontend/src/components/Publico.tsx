import { getLinkWhatsapp } from '../config';

function Publico() {
  const msgEmpresa =
    'Olá! Gostaria de solicitar um orçamento de treinamento para a minha empresa.';
  const msgAluno = 'Olá! Gostaria de consultar a próxima turma de um curso.';

  return (
    <section className="container publico">
      <div className="publico-grid">
        {/* Para Empresas (card em destaque) */}
        <div className="publico-card publico-card-destaque">
          <p className="secao-eyebrow publico-eyebrow">Para Empresas</p>
          <h3 className="publico-titulo">Equipe capacitada, empresa em conformidade</h3>
          <ul className="publico-lista">
            <li>Turmas in company, na sua planta e no seu turno</li>
            <li>Documentação pronta para auditoria e fiscalização</li>
            <li>Controle de validades e agenda de reciclagem</li>
          </ul>
          <a
            className="btn-primario"
            href={getLinkWhatsapp(msgEmpresa)}
            target="_blank"
            rel="noopener"
          >
            Solicitar orçamento
          </a>
        </div>

        {/* Para Alunos */}
        <div className="publico-card">
          <p className="secao-eyebrow publico-eyebrow">Para Alunos</p>
          <h3 className="publico-titulo">Uma certificação que abre portas</h3>
          <ul className="publico-lista">
            <li>Aulas práticas com máquinas reais</li>
            <li>Certificado válido em todo o território nacional</li>
            <li>Turmas abertas, sem precisar de vínculo com empresa</li>
          </ul>
          <a
            className="btn-secundario"
            href={getLinkWhatsapp(msgAluno)}
            target="_blank"
            rel="noopener"
          >
            Consultar próxima turma
          </a>
        </div>
      </div>
    </section>
  );
}

export default Publico;