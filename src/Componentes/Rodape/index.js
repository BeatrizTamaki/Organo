import './Rodape.css'

function Rodape() {
    return(
        <footer className='rodape'>
            <div className='rodape-imagens'>
                <img src='/imagens/fb.png' alt='facebook'/>
                <img src='/imagens/tw.png' alt='twitter'/>
                <img src='/imagens/ig.png' alt='instagram'/>
            </div>
            <div>
                <img src='/imagens/logo.png' alt='logo organo'/>
            </div>
            <div className='rodape-titulo'>
                <h3>Desenvolvido por Beatriz Trautwein</h3>
            </div>
        </footer>
    )
}

export default Rodape