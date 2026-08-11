function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="rodape">
            <div className="rodape-conteudo">
                <span className="rodape-marca">MB Consultoria e Treinamento Neves</span>
                <span className="rodape-copy">
                    © {anoAtual} · Todos os direitos reservados
                </span>
            </div>
        </footer>
    );
}
 
export default Footer;
