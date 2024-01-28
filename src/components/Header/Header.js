import "./Header.scss";
import Logo from "../../assets/images/GHLVolley.png";
import { Link } from "react-router-dom";
import Home  from "../../assets/icons/home-outline.svg";
import Chat from "../../assets/icons/chatbox-outline.svg";
import Location from "../../assets/icons/map-outline.svg";
import Skills from "../../assets/icons/book-outline.svg";
import Profile from "../../assets/icons/person-circle-outline.svg";
import Mohan from "../../assets/images/Mohan-muruge.jpg";

function Header({image}) {
    let navDisplay;

    if(image) {
        navDisplay = <li className="navigation__list-item">
        <span className="navigation__list-item__span"><img className="navigation__list-item__mohan" src={Mohan} alt="Profile icon" /></span>
        <span className="navigation__list-item__span navigation__list-item__title"><Link className="navigation__list-item__title-link" to={'/profile'}>Profile</Link></span>
        </li>;
    } else {
        navDisplay = <li className="navigation__list-item">
        <span className="navigation__list-item__span"><img className="navigation__list-item__icon" src={Profile} alt="Profile icon" /></span>
        <span className="navigation__list-item__span navigation__list-item__title"><Link className="navigation__list-item__title-link" to={'/profile'}>Profile</Link></span>
        </li>;
    }


    return(
        <nav className="navigation">
            <div className="navigation__logo">
                <Link to={'/homepage'}><img className="navigation__logo-img" alt="GHLVolley Logo" src={Logo}/></Link>
            </div>
            <ul className="navigation__list">
                <li className="navigation__list-item">
                    <span className="navigation__list-item__span"><img className="navigation__list-item__icon" src={Home} alt="home icon" /></span>
                    <span className="navigation__list-item__span navigation__list-item__title"><Link className="navigation__list-item__title-link" to={'/homepage'}>Home</Link></span>
                </li>
                <li className="navigation__list-item">
                    <span className="navigation__list-item__span"><img className="navigation__list-item__icon" src={Skills} alt="Skills icon" /></span>
                    <span className="navigation__list-item__span navigation__list-item__title">Skills</span>
                </li>
                <li className="navigation__list-item">
                    <span className="navigation__list-item__span"><img className="navigation__list-item__icon" src={Chat} alt="Chat icon" /></span>
                    <span className="navigation__list-item__span navigation__list-item__title">Chat</span>
                </li>
                <li className="navigation__list-item">
                    <span className="navigation__list-item__span"><img className="navigation__list-item__icon" src={Location} alt="Location icon" /></span>
                    <span className="navigation__list-item__span navigation__list-item__title"><Link className="navigation__list-item__title-link" to={'/location'}>Location</Link></span>
                </li>

                {/* <li className="navigation__list-item">
                    <span className="navigation__list-item__span"><img className="navigation__list-item__icon" src={Mohan} alt="Profile icon" /></span>
                    <span className="navigation__list-item__span navigation__list-item__title">Profile</span>
                </li> */}

                {navDisplay}

            </ul>
        </nav>
    )
}

export default Header;