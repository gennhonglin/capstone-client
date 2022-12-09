import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
    return(
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__list-item">
                    <span className="navigation__list-item__icon"></span>
                    <span className="navigation__list-item__title"></span>
                </li>
                <li className="navigation__list-item">
                    <span className="navigation__list-item__icon"></span>
                    <span className="navigation__list-item__title"></span>
                </li>
                <li className="navigation__list-item">
                    <span className="navigation__list-item__icon"></span>
                    <span className="navigation__list-item__title"></span>
                </li>
                <li className="navigation__list-item">
                    <span className="navigation__list-item__icon"></span>
                    <span className="navigation__list-item__title"></span>
                </li>
                <li className="navigation__list-item">
                    <span className="navigation__list-item__icon"></span>
                    <span className="navigation__list-item__title"></span>
                </li>

            </ul>
        </nav>
    )
}

export default Header;