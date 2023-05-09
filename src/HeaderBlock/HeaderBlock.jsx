import logo from '../logo.svg';
import './HeaderBlock.css'
function HeaderBlock () {
    return (
        <header className='header'>
            <img src={logo} className="App-logo logo" alt="logo" />
            <ul className='header__nav'>
                <li className='header__nav_element'>
                    <a className='header__nav_link' href="#">Главная</a>
                </li>
                <li className='header__nav_element'>
                    <a className='header__nav_link' href="#">О нас</a>
                </li>
                <li className='header__nav_element'>
                    <a className='header__nav_link' href="#">Контакты</a>
                </li>
            </ul>
        </header>
    )
}
export default HeaderBlock