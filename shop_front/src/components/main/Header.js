import { Link } from "react-router-dom";
import '../../styles/header.css'

export default function Header(props) {
    return (
        <header>

            <div className="header">
                <div className="logo"><Link to="/"><img src="images/logo-big-en.png" alt="logo" /></Link></div>
                <ul>
                    <li>
                        <Link to="/">О компании</Link>
                    </li>
                    <li>
                        <Link to="/">Пресс-центр</Link>
                    </li>
                    <li>
                        <Link to="/">Карьера</Link>
                    </li>
                    <li>
                        <Link to="/">Контакты</Link>
                    </li>
                </ul>
            </div>
            <hr />
            <nav className="nav">
                <div className="menu">
                    <ul>
                        <li><Link to="/catalog">Каталог</Link></li>
                        <li><Link to="/tex">Технологии и оборудование</Link></li>
                        <li><Link to="/potreb">Потребителям</Link></li>
                        <li><Link to="/postav">Поставщикам</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}