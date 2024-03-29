import "./Signup.scss";
import Volleyball from "../../assets/icons/volleyball.png";
import Name from "../../assets/icons/person-circle-outline.svg";
import Email from "../../assets/icons/mail-outline.svg";
import Password from "../../assets/icons/lock-closed-outline.svg";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import LoginSVG from "../../components/LoginSVG/LoginSVG";


function Signup() {
    const form = useRef();
    let history = useNavigate();

    const newUser = (e) => {
        e.preventDefault();

        if (form.current.password.value === form.current.confirm.value) {
            const newUser = {
                email: form.current.email.value,
                name: form.current.name.value,
                password: form.current.password.value
            }

            axios.post('http://localhost:8080/player', newUser);

            history("/login");

        } else {
            alert("false");
        }

    }
    return (
        <div className="signup">
            <LoginSVG/>
            <div className="signup__container">
                <div className="signup__container-header">
                    <img src={Volleyball} alt="volleyball icon" className="signup__container-header__img" />
                    <h1 className="signup__container-header-title">Sign Up</h1>
                </div>
                <form onSubmit={newUser} className="signup__container__form" ref={form}>
                    <div className="signup__container__form-item">
                        <img src={Email} alt="Email Icon" className="signup__container__form-item-img" />
                        <input type="text" name="email" className="signup__container__form-item__email" placeholder="Email" />
                    </div>
                    <div className="signup__container__form-item">
                        <img src={Name} alt="User Icon" className="signup__container__form-item-img" />
                        <input type="text" name="name" className="signup__container__form-item__email" placeholder="Name" />
                    </div>
                    <div className="signup__container__form-item">
                        <img src={Password} alt="Lock Icon" className="signup__container__form-item-img" />
                        <input type="password" name="password" className="signup__container__form-item__password" placeholder="Password" />
                    </div>
                    <div className="signup__container__form-item">
                        <img src={Password} alt="Lock Icon" className="signup__container__form-item-img" />
                        <input type="password" name="confirm" className="signup__container__form-item__password-confirm" placeholder="Confirm Password" />
                    </div>
                    <div className="signup__page-container__form__sign-up">
                        <button type="submit" className="signup__container__form__sign-up__button">Sign Up</button>
                    </div>
                    <div className="signup__container__form__footer">
                        <span>Already have an account? <Link className="signup__container__form__footer-login" to={"/login"}>Login</Link></span>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default Signup