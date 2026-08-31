import { Building2 } from 'lucide-react';
 
//Placeholder - substituir "nome" pelas empresas reais e trocar o icone por <img src="..." />
const parceiros = [
    { id: 1, nome: 'JC Montagem Industrial', logo: '/parceiros/logo-jc.jpeg' },
    { id: 2, nome: 'Pré-Vale Pré Moldados', logo: '/parceiros/logo-prevale.png' },
    { id: 3, nome: 'Imediato Nextey', logo: '/parceiros/logo-imediato.png' },
    { id: 4, nome: 'Parceiros', logo: '' }, 
    { id: 5, nome: 'Parceiros', logo: '' },
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
