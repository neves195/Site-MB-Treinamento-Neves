import { useEffect, useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { API_URL } from '../config';
import type { FotoTurma } from '../types/fotoTurma';

function Turmas() {
    const [fotos, setFotos] = useState<FotoTurma[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
      fetch(`${API_URL}/api/public/turmas/fotos-recentes`)
      .then((resp) => resp.json())
      .then(setFotos)
      .catch(() => setFotos([]))
      .finally(() => setCarregando(false));
    }, []);

    return (
      <section id="turmas" className="container turmas">
        <p className="secao-eyebrow">Nossas Turmas</p>
        <h2 className="secao-titulo">Direto do campo, treinamento em ação</h2>

        {carregando && <p className="turmas-nota">Carregando fotos...</p>}

        {!carregando && fotos.length === 0 && (
          <p className="turmas-nota">Em breve, fotos de nossas turmas.</p>
        )}

        {!carregando && fotos.length > 0 && (
          <div className="turmas-grid">
            {fotos.map((foto) => (
              <div key={foto.id} className="turma-card">
                <span className="turma-expandir" aria-hidden="true"><Maximize2 size={16} /></span>
                <div className="turma-imagem">
                  <img src={foto.imagem} alt={foto.descricao || 'Foto de turma'} />
                </div>
                {foto.descricao && (
                  <div className="turma-legenda">
                    <strong>{foto.descricao}</strong>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    );
}

export default Turmas;
