import './about.screen.styles.css'
import { CollageItem } from '../../components'
import fotoSobre from '../../assets/img/foto-sobre.jpeg'
export function AboutScreen({ id }) {
    return (
        <div id={id} className='div-screen-background'>
            <div className='container'>
                <div className='div-screen-content div-screen-content-about'>
                    <CollageItem image={fotoSobre} type='big-item' />
                    <div className='div-about-text'>
                        <h1>Sobre mim</h1>
                        <h3>Tenho 21 anos e moro atualmente
                            na cidade de Rolante-RS.
                            Adoro viajar e me aventurar na natureza.</h3>
                        <h3>Da mesma forma procuro me aventurar
                            em novas técnologias de desenvolvimento</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


