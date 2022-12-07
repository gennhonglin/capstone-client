import "./Signup.scss";
import Volleyball from "../../assets/icons/volleyball.png";
import Email from "../../assets/icons/mail-outline.svg";
import Password from "../../assets/icons/lock-closed-outline.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";


function Signup() {
    const form = useRef();

    const newUser = (e) => {
        e.preventDefault();

        if(form.current.password.value === form.current.confirm.value) {
            const newUser = {
                email: form.current.email.value,
                password: form.current.password.value
            }
            
            console.log(newUser);
        } else {
            console.log("false");
        }

    }
    return (
        <div className="signup">
            <div className="signup__container">
                <img src={Volleyball} alt="volleyball icon" className="signup__container-img" />

                <h1 className="signup__container-title">Sign Up</h1>

                <form onSubmit={newUser} className="signup__container__form" ref={form}>
                    <div className="signup__container__form-item">
                        <img src={Email} alt="Email Icon" className="signup__container__form-item-img" />
                        <input type="text" name="email" className="signup__container__form-item__email" placeholder="Email" />
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
                        <button className="signup__container__form__sign-up__button">Sign Up</button>
                    </div>
                </form>

                <div className="signup__container__footer">
                    <span>Already have an account? <Link className="signup__container__footer-login" to={"/login"}>Login</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Signup