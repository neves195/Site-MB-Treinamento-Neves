import { cursos } from './data/cursos';
import Header from './components/Header';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import CursoCard from './components/CursoCard';
import Certificado from './components/Certificado';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Reveal from './components/Reveal';

function App() {
  return (
    <>
      <Header />
      <Hero />

      <Reveal>
      <Servicos />
      </Reveal>

      <Reveal>
      {/* id="cursos" → destino do botão "Ver cursos" e do menu */}
      <section id="cursos" className="container">
        <h2 className="secao-titulo">Nossos cursos</h2>

        <div className="cursos-grid">
          {cursos.map((curso) => (
            <CursoCard key={curso.id} curso={curso} />
          ))}
        </div>
      </section>
      </Reveal>

    <Reveal>
      <Certificado />
    </Reveal>

    <Reveal>
      <Contato />
    </Reveal>

      <Footer />
    </>
  );
}

export default App;
