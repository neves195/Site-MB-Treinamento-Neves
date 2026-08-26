import { Image as ImageIcon, Maximize2 } from 'lucide-react';

const turmas = [ 
    { id: 1, titulo: 'Turma de Empilhadeira - Jul/2026', local: 'Prática em pátio logístico' },
    { id: 2, titulo: 'Turma de Ponte Rolante - Jun/2026', local: 'Treinamento in company' },
    { id: 3, titulo: 'Turma de NR-35 - Jun/2026', local: 'Trabalho em altura' },
    { id: 4, titulo: 'Turma de Caminhão Munck - Jun/2026', local: 'Aula prática de içamento' },
    { id: 5, titulo: 'Turma de Retroescavadeira - Jul/2026', local: 'Canteiro de obras' },
    { id: 6, titulo: 'Turma de NR-33 - Jul/2026', local: 'Simulação de espaço confinado' },
];  

function Turmas() {
    return (
        <section id="turmas" className="container turmas">
            <p className="secao-eyebrow">Nossas Turmas</p>
            <h2 className="secao-titulo">Direto do campo, treinamento em ação</h2>

                  <div className="turmas-grid">
        {turmas.map((turma) => (
          <div key={turma.id} className="turma-card">
            <span className="turma-expandir" aria-hidden="true"><Maximize2 size={16} /></span>
            <div className="turma-imagem">
             <ImageIcon size={34} aria-hidden="true" />
            </div>
            <div className="turma-legenda">
              <strong>{turma.titulo}</strong>
              <span>{turma.local}</span>
            </div>
          </div>
        ))}
      </div>

            <p className="turmas-nota">
                Fotos ilustrativas - substituir pelos registros reais das turmas.
            </p>
        </section>
    );
}

export default Turmas;