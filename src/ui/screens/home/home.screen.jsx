import './home.screen.styles.css'
import { HeaderNav, CollageItem } from '../../components'
import gitIcon from '../../assets/img/github.png'
import linkedinIcon from '../../assets/img/linkedin.png'
import foto1 from '../../assets/img/foto-minha-1.jpeg'
import foto2 from '../../assets/img/foto-minha-2.jpeg'
import foto3 from '../../assets/img/foto-minha-3.jpeg'
import foto4 from '../../assets/img/foto-minha-4.jpeg'
export function HomeScreen({ id }) {
    return (
        <div id={id} className='div-screen-background'>
            <div className='container div-home-container'>
                <div className='div-screen-content'>
                    <div className='div-home-text'>
                        <h1>Oi, eu sou <span>goku <br /></span> João Paulo</h1>
                        <h2>Desenvolvedor FullStack</h2>
                        <div className='div-home-text-icons'>
                            <img src={gitIcon} alt="linkedin" />
                            <img src={linkedinIcon} alt="git" />
                        </div>
                    </div>
                    <div className='div-home-collage'>
                        <CollageItem image={foto1} rotate={2.22} type='item' />
                        <div>
                            <CollageItem image={foto2} rotate={-8.59} type='item' />
                            <CollageItem image={foto3} rotate={-4.98} type='item' />
                        </div>
                        <CollageItem image={foto4} rotate={-4.98} type='item' />
                    </div>
                </div>
            </div>
        </div>

    )
}