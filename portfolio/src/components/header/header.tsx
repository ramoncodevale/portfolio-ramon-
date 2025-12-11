import './header.scss'

import Download from '../../assets/download.png'
import Logo from '../../../public/logo-portfolio.png'


const Header = () => {
    return (
        <header>
            <nav>
                <div className='logo'>
                    <img src={Logo} alt="Logo do Portfólio" />
                    <p>Personal</p>
                </div>

                <ul>
                    <li><a href="#">Sobre Mim</a></li>
                    <li><a href="#">Habilidades</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>


                <a className='link-cv'
                    href="/Curriculo_Ramon_Valentim_Estágio.pdf"
                    download
                >
                    Resume
                    <img src={Download} alt='icon Doownload' />
                </a>
            </nav>
        </header>
    );
}

export default Header;