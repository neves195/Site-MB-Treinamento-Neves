import { Presentation, Award, Users, FileText, Camera } from 'lucide-react';

const diferencias = [
    { icone: Presentation, titulo: 'Aulas Teóricas e Práticas', texto: 'Operação real em máquinas, com instrutores experientes no campo.' },
    { icone: Award, titulo: 'Certificado na Hora', texto: 'Terminou o treinamento, sai com o certificado em mãos - válido em todo o Brasil.' },
    { icone: Users, titulo: 'Empresa e Alunos', texto: 'Turmas in company ou abertas - atendemos empresas e pessoas físicas.' },
    { icone: FileText, titulo: 'Documentação', texto: 'Suporte do início á emissão - inscrição, aprendizado entrega do certificado.' },
];

function Diferenciais() {
    return (
        <section id="diferenciais" className="container diferenciais">
            <div className="diferenciais-conteudo">
                {/* Coluna esquerda: texto + lista */}
                <div className="diferenciais-texto">
                    <p className="secao-eyebrow">Por que nos escolher</p>
                    <h2 className="secao-titulo">Tudo o que você precisa para operar com segurança</h2>
                    <p className="secao-subtitulo diferenciais-sub">
                        Formação completa com instrutores qualificados, estrutura própria e 
                        certificação reconhecida em todo o território nacional.
                    </p>

                    <ul className="diferenciais-lista">
                        {diferencias.map((item) => (
                            <li key={item.titulo} className="diferencial-item">
                                <item.icone className="diferencial-icone" size={22} aria-hidden="true" />
                                <div>
                                    <h3 className="diferencial-titulo">{item.titulo}</h3>
                                    <p className="diferencial-texto">{item.texto}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Coluna direita: imagem */}
                <div className="diferenciais-imagem">
                    <span className="hero-imagem-placeholder">
                        <Camera size={28} aria-hidden="true" />
                        Foto da equipe ou do treinamento prático
                    </span>
                </div>
            </div>

            <p className="diferenciais-nota">
                Conteúdo alinhado às NRs e às práticas de CIPA e SESMT.
            </p>
        </section>
    );
}

export default Diferenciais;