import { useEffect, useState } from 'react';
import { API_URL } from '../config';
import type { FotoTurma } from '../types/fotoTurma';
import Carousel from './Carousel';

function Turmas() {
    const [fotos, setFotos] = useState<FotoTurma[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [fotoAberta, setFotoAberta] = useState<string | null>(null);

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
          <div className="turmas-carousel">
            <Carousel
              items={fotos.map((foto) => ({ image: foto.imagem, alt: foto.descricao ?? undefined, id: foto.id }))}
              baseWidth={340}
              loop
              onOpenSlide={(item) => setFotoAberta(item.image)}
            />
          </div>
        )}

        {fotoAberta && (
          <div className="foto-lightbox" onClick={() => setFotoAberta(null)}>
            <button
              className="foto-lightbox-fechar"
              onClick={() => setFotoAberta(null)}
              aria-label="Fechar"
            >
              ✕
            </button>
            <img src={fotoAberta} alt="Foto de turma ampliada" />
          </div>
        )}
      </section>
    );
}

export default Turmas;
