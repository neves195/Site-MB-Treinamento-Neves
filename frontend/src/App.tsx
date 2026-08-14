import Header from './components/Header';
import Hero from './components/Hero';
import Numeros from './components/Numeros';
import Servicos from './components/Servicos';
import Cursos from './components/Cursos';
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
        <Numeros />
      </Reveal>

      <Reveal>
        <Servicos />
      </Reveal>

      <Reveal>
        <Cursos />
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