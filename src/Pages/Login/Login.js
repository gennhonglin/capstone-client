import "./Login.scss";
import Volleyball from "../../assets/icons/volleyball.png";
import Email from "../../assets/icons/mail-outline.svg";
import Password from "../../assets/icons/lock-closed-outline.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Login() {
    const form = useRef();
    return (
        <div className="login__page">
            <div className="login__page-container">
                <img alt="Volleyball-Icon" className="login__page-container__img" src={Volleyball} />
                <h1 className="login__page-container__title">Sign In</h1>
                <form className="login__page-container__form" ref = {form} >
                    <div className="login__page-container__form-item">
                        <img src={Email} alt="Email Icon" className="login__page-container__form-item-img" />
                        <input className="login__page-container__form-item__email" type="text" placeholder="Enter Email"></input>
                    </div>
                    <div className="login__page-container__form-item">
                        <img src={Password} alt="Lock Icon" className="login__page-container__form-item-img" />
                        <input className="login__page-container__form-item__password" type="text" placeholder="Enter Password"></input>
                    </div>
                    <div className="login__page-container__form__sign-in">
                        <button className="login__page-container__form__sign-in__button">Sign in</button>
                    </div>
                </form>
                <div className="login__page-container__footer">
                    <span>Don't have an account? <Link className="login__page-container__footer-login" to={"/signup"}>Create an Account</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Login