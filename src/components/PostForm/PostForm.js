import "./PostForm.scss";
import back from "../../assets/icons/chevron-back-outline.svg";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostForm() {
    const form = useRef();
    const Navigate = useNavigate();

    const newPost = (e) => {
        e.preventDefault();

        const newPost = {
            player_id: 1,
            location_name: form.current.name.value,
            address: form.current.address.value,
            city: form.current.city.value,
            level: form.current.level.value,
            registration: form.current.registration.value
        }
        
        axios.post('http://localhost:8080/location', newPost)
        .then((response) => {
            if(response.status === 201) {
                Navigate(-1);
            }
        })



    }


    return (
        <div className="post-form">
            <div className="post-form__container">
                <div className="post-form__container__header">
                    <a href="/location"><img className="post-form__container__header-img" alt="back-icon" src={back} /></a>
                    <h2 className="post-form__container__header-title">Add New Place</h2>
                </div>
                <form onSubmit={newPost} className="post-form__container__form" ref={form}>
                    <label className="post-form__container__form-label">Location Name:</label>
                    <input type="text" name="name" className="post-form__container__form-input"></input>
                    <label className="post-form__container__form-label">Location Address:</label>
                    <input type="text" name="address" className="post-form__container__form-input"></input>
                    <label className="post-form__container__form-label">City:</label>
                    <input type="text" name="city" className="post-form__container__form-input"></input>
                    <label className="post-form__container__form-label">Level:</label>
                    <input type="text" name="level" className="post-form__container__form-input"></input>
                    <label className="post-form__container__form-label">Registration URL:</label>
                    <input type="text" name="registration" className="post-form__container__form-input"></input>
                    <button type="submit" className="post-form__container__form-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PostForm