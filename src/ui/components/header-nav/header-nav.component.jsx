import './header-nav.component.styles.css'
import { Link, animateScroll } from 'react-scroll'
import { Hamburger } from '../hamburger/hamburger.component'
export function HeaderNav() {
    return (
        <>
            <Hamburger />
            <div id='nav' className='div-header-nav'>
                <Link activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}>Home</Link>
                <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}>Sobre</Link>
                <Link activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    duration={500}>Projetos</Link>
                <Link to="/">Contato</Link>
            </div>
        </>
    )
}