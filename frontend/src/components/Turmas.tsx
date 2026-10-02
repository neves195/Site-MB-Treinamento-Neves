import { useEffect, useState } from 'react';
import { API_URL } from '../config';
import type { FotoTurma } from '../types/fotoTurma';
import Carousel from './Carousel';

function Turmas() {
    const [fotos, setFotos] = useState<FotoTurma[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [fotoAberta, setFotoAberta] = useState<string | null>(null);
    const [larguraJanela, setLarguraJanela] = useState(window.innerWidth);

    // Quantas fotos aparecem ao mesmo tempo, conforme o tamanho da tela -
    // baseWidth={820} fixo quebraria (estouraria a largura) no celular.
    useEffect(() => {
        function aoRedimensionar() {
            setLarguraJanela(window.innerWidth);
        }
        window.addEventListener('resize', aoRedimensionar);
        return () => window.removeEventListener('resize', aoRedimensionar);
    }, []);

    const visibleItems = larguraJanela < 768 ? 1 : larguraJanela < 1024 ? 2 : 3;
    const baseWidth = larguraJanela < 768 ? Math.min(larguraJanela - 48, 340) : larguraJanela < 1024 ? 560 : 820;

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
              baseWidth={baseWidth}
              visibleItems={visibleItems}
              showArrows
              loop
              autoplay
              autoplayDelay={3500}
              pauseOnHover
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
