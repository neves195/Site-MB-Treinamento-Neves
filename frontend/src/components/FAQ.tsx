import { useState } from 'react';

const perguntas = [
    { id: 1, pergunta: 'Como faço minha matrícula?', resposta: 'É simples: fale com a gente pelo WhatsApp, escolha o curso e a data, e cuidamos do resto.' },
  { id: 2, pergunta: 'Quando começam as próximas turmas?', resposta: 'Temos turmas abertas ao longo do mês. Consulte a próxima data pelo WhatsApp — também montamos turmas in company na sua empresa.' },
  { id: 3, pergunta: 'Quais documentos preciso apresentar?', resposta: 'Geralmente RG, CPF e comprovante de escolaridade. Alguns cursos podem exigir ASO — a gente te orienta na inscrição.' },
  { id: 4, pergunta: 'O certificado é válido em todo o Brasil?', resposta: 'Sim. Nossos certificados seguem as Normas Regulamentadoras e têm validade em todo o território nacional.' },
  { id: 5, pergunta: 'Vocês atendem empresas?', resposta: 'Sim! Fazemos treinamentos in company, na sua planta e no seu turno, além da consultoria de segurança do trabalho.' },
  { id: 6, pergunta: 'Posso parcelar o valor?', resposta: 'Sim, temos condições de pagamento. Fale com a gente pelo WhatsApp para conhecer as opções.' },
];

function FAQ() {
    const [abertoId, setAbertoId] = useState<number | null>(null);

    function alternar(id: number) {
        setAbertoId(abertoId === id ? null : id);
    }

    return (
        <section id="faq" className="container faq">
            <div className="faq-conteudo">
        {/* Coluna esquerda: título */}
        <div className="faq-texto">
          <p className="secao-eyebrow">Dúvidas Frequentes</p>
          <h2 className="secao-titulo">Tire Suas Dúvidas</h2>
          <p className="secao-subtitulo faq-sub">
            Respostas para as principais perguntas sobre matrículas, documentação,
            turmas e certificação.
          </p>
        </div>

        {/* Coluna direita: a lista de perguntas */}
        <div className="faq-lista">
          {perguntas.map((item) => {
            const aberta = item.id === abertoId;
            return (
              <div key={item.id} className="faq-item">
                <button
                  className="faq-pergunta"
                  onClick={() => alternar(item.id)}
                  aria-expanded={aberta}
                >
                  <span>{item.pergunta}</span>
                  <span className="faq-sinal">{aberta ? '−' : '+'}</span>
                </button>
                {aberta && <p className="faq-resposta">{item.resposta}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;