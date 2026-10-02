import { useState } from 'react';
import { User } from 'lucide-react';

interface Pessoa {
    nome: string;
    cargo: string;
    foto: string; // arquivo em frontend/public (ex.: /fundador.jpg)
    bio: string;
}

// Preencha cada pessoa para exibi-la no site. Só inclua dados aprovados por ela
// (cargo exato, formação, registro profissional). Com "nome" vazio a pessoa não
// aparece no site publicado — no ambiente de desenvolvimento aparece um quadrado de teste.
const equipe: Pessoa[] = [
    { nome: 'Marco Antônio das Neves', cargo: 'Fundador e Diretor Técnico', foto: '/fundador.jpg', bio: 'Técnico em Segurança do Trabalho' },
    { nome: 'Marco Antônio das Neves Júnior', cargo: 'Engenheiro de Segurança do Trabalho', foto: '/engenheiro.jpg', bio: '' },
];

function CartaoPessoa({ pessoa }: { pessoa: Pessoa }) {
    // Enquanto a foto não existe (ou falha ao carregar), mostra o ícone no lugar
    const [semFoto, setSemFoto] = useState(!pessoa.foto);

    return (
        <figure className="pessoa-card">
            <div className="quem-somos-foto">
                {semFoto ? (
                    <span className="quem-somos-foto-placeholder">
                        <User size={44} aria-hidden="true" />
                        <span>Foto quadrada</span>
                    </span>
                ) : (
                    <img
                        src={pessoa.foto}
                        alt={pessoa.nome || 'Equipe MB Consultoria'}
                        onError={() => setSemFoto(true)}
                        loading="lazy"
                    />
                )}
            </div>
            <figcaption className="pessoa-legenda">
                <strong>{pessoa.nome || 'Nome'}</strong>
                <span className="pessoa-cargo">{pessoa.cargo || 'Cargo'}</span>
                {pessoa.bio && <span className="pessoa-bio">{pessoa.bio}</span>}
            </figcaption>
        </figure>
    );
}

function QuemSomos() {
    const visiveis = import.meta.env.DEV ? equipe : equipe.filter((p) => p.nome);

    return (
        <section id="quem-somos" className="container quem-somos">
          <div className={visiveis.length > 0 ? 'quem-somos-grid com-equipe' : 'quem-somos-grid'}>
            <div className="quem-somos-conteudo">
                <p className="secao-eyebrow">Quem somos</p>
                <h2 className="secao-titulo">Segurança do trabalho com profissionais qualificados</h2>

                <p className="quem-somos-texto">
                    A MB Consultoria e Treinamento Neves atua há mais de 15 anos na
                    capacitação de profissionais e empresas em Normas Regulamentadoras
                    e na operação de máquinas. Com sede em Agudos/SP, atendemos empresas
                    e pessoas físicas, com aulas teóricas e práticas, certificado na hora
                    e turmas in company em todo o Brasil.
                </p>
                <p className="quem-somos-texto">
                    Nosso trabalho vai da formação do operador à consultoria que adequa
                    a empresa às exigências de segurança do trabalho.
                </p>
            </div>

            {visiveis.length > 0 && (
                <div className="quem-somos-equipe">
                    {visiveis.map((pessoa) => (
                        <CartaoPessoa key={pessoa.foto} pessoa={pessoa} />
                    ))}
                </div>
            )}
          </div>
        </section>
    );
}

export default QuemSomos;
