import "./Login.scss";
import Volleyball from "../../assets/icons/volleyball.png";
import Email from "../../assets/icons/mail-outline.svg";
import Password from "../../assets/icons/lock-closed-outline.svg";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

function Login() {

    //Need useState for authentication true or not

    const navigate = useNavigate();
    const form = useRef();

    const loginUser = (e) => {
        e.preventDefault();

        const loginUser = {
            email: form.current.email.value,
            password: form.current.password.value
        }

        axios.post('http://localhost:8080/player/login', loginUser)
        .then((response) => {
            if(response.status === 201) {
                sessionStorage.setItem('token', response.data);
                sessionStorage.setItem('image', false);
                navigate("/Homepage");
            }
            
        })
    
    }

    const guestUser = (e) => {

        sessionStorage.setItem('token', "guest");
        sessionStorage.setItem('image', true);
    }

    //Create a function that displays authentication true or not
    //Protected Route


    return (
        <div className="login__page">
            <div className="login__page-container">
                <img alt="Volleyball-Icon" className="login__page-container__img" src={Volleyball} />
                <h1 className="login__page-container__title">Sign In</h1>
                <form onSubmit={loginUser} className="login__page-container__form" ref={form} >
                    <div className="login__page-container__form-item">
                        <img src={Email} alt="Email Icon" className="login__page-container__form-item-img" />
                        <input name="email" className="login__page-container__form-item__email" type="text" placeholder="Enter Email"></input>
                    </div>
                    <div className="login__page-container__form-item">
                        <img src={Password} alt="Lock Icon" className="login__page-container__form-item-img" />
                        <input name="password" className="login__page-container__form-item__password" type="password" placeholder="Enter Password"></input>
                    </div>
                    <div className="login__page-container__form__sign-in">
                        <button type="submit" className="login__page-container__form__sign-in__button">Sign in</button>
                    </div>
                </form>
                <div className="login__page-container__footer">
                    <span>Don't have an account? <Link className="login__page-container__footer-login" to={"/signup"}>Create an Account</Link></span>
                    <span>Continue as <Link onClick={guestUser} className="login__page-container__footer-guest" to={"/homepage"}>Guest</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Login