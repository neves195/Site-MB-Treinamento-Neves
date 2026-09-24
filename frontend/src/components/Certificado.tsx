import { GraduationCap } from "lucide-react";
function Certificado() {
    return (
        <section className="certificado">
            <div className="certificado-box">
                <div className="certificado-conteudo">
                <GraduationCap className="certificado-icone" size={36} aria-hidden="true" />

                <h2 className="certificado-titulo">
                    Certificado emitido <span className="destaque-ok">na hora</span> - em 
                    todos os cursos.
                </h2>

                <p className="certificado-texto">
                    Terminou o treinamento, sai com o documento em mãos. Certificado com
                    validade nacional, conteúdo programático e carga horária conforme a
                    Norma Regulamentadora do curso.
                </p>
            </div>

            <div className="certificado-imagem">
                <img src="/certificado-exemplo.png" alt="Exemplo de certificado emitido pela MB Consultoria" />
            </div>
        </div>
    </section>
    );
}

export default Certificado;
