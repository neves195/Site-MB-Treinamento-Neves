import { Building2 } from 'lucide-react';
 
//Placeholder - substituir "nome" pelas empresas reais e trocar o icone por <img src="..." />
const parceiros = [
    { id: 1, nome: 'JC Montagem Industrial', logo: '/parceiros/logo-jc.jpeg' },
    { id: 2, nome: 'Pré-Vale Pré Moldados', logo: '/parceiros/logo-prevale.png' },
    { id: 3, nome: 'Empresa Parceira 3' },
    { id: 4, nome: 'Empresa Parceira 4' },
    { id: 5, nome: 'Empresa Parceira 5' },
    { id: 6, nome: 'Empresa Parceira 6' },
    { id: 7, nome: 'Empresa Parceira 7' },
    { id: 8, nome: 'Empresa Parceira 8' },
    { id: 9, nome: 'Empresa Parceira 9' },
    { id: 10, nome: 'Empresa Parceira 10' },
];

function Parceiros() {
    return (
        <section className="container parceiros">
            <p className="secao-eyebrow">Empresas Parceiras</p>
            <h2 className='secao-titulo'>Quem confia na MB para capacitar suas equipes.</h2>

            <div className="parceiros-esteira">
                <div className="parceiros-trilho">
                    {/* Lista renderizada 2x seguidas, é o que faz o loop da esteira ficar invisivel */}
                    {[...parceiros, ...parceiros].map((empresa, i) => (
                        <div className="parceiro-logo" key={`${empresa.id}-${i}`}>
                            {empresa.logo ? (
                                <img src={empresa.logo} alt={empresa.nome} className="parceiro-logo-img" />
                            ) : ( 
                                <>
                            <Building2 size={22} aria-hidden="true" />
                            <span>{empresa.nome}</span>
                        </>    
                    )}
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}

export default Parceiros;
