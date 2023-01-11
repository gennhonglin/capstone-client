import "./EditProfileForm.scss";
import back from "../../assets/icons/chevron-back-outline.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import placeholder from "../../assets/images/placeholder-img.jpg";
import jwt_decode from "jwt-decode";

function EditProfileForm() {
    const form = useRef();
    const Navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const [selectedUser, setSelectedUser] = useState("");
    let user;
    let username;

    if(token === "guest" || token === null) {
        username = "Guest";
    } else {
        user = jwt_decode(token);
        username = user.data.name;
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/player/${user.data.id}`)
        .then((result) => {
            setSelectedUser(result.data);
        })
    }, [])

    const updateUser = (e) => {
        e.preventDefault();

        const updateUser = {
            city: form.current.city.value,
            country: form.current.country.value,
            experience: form.current.experience.value,
            email: form.current.email.value,
            position: form.current.position.value,
            type: form.current.type.value
        }

        axios.post(`http://localhost:8080/player/${user.data.id}`, updateUser)
            .then((response) => {
                if (response.status === 204) {
                    Navigate(-1);
                }
            })



    }

    return (
        <div className="edit__profile-form">
            <div className="edit__profile-form__container">
                <div className="edit__profile-form__container__header">
                    <a href="/profile"><img className="edit__profile-form__container__header-img" alt="back-icon" src={back} /></a>
                    <h2 className="edit__profile-form__container__header-title">Edit Profile</h2>
                </div>
                <div className="edit__profile-form__container__user-data">
                    <div className="edit__profile-form__container__user-data__profile">
                        <img className="edit__profile-form__container__user-data__profile-img" alt="placeholder img" src={placeholder} />
                    </div>
                    <div className="edit__profile-form__container__user-data__content">
                        <h1 className="edit__profile-form__container__user-data__content-name">{selectedUser.name}</h1>
                    </div>
                </div>
                <form onSubmit={updateUser} className="edit__profile-form__container__form" ref={form}>
                    <div className="edit__profile-form__container__form-container">
                        <input type="text" name="city" className="edit__profile-form__container__form-container__input" defaultValue={selectedUser.city} required></input>
                        <span className="edit__profile-form__container__form-container__label">City</span>
                    </div>
                    <div className="edit__profile-form__container__form-container">
                        <input type="text" name="country" className="edit__profile-form__container__form-container__input" defaultValue={selectedUser.country} required></input>
                        <span className="edit__profile-form__container__form-container__label">Country</span>
                    </div>
                    <div className="edit__profile-form__container__form-container">
                        <input type="text" name="experience" className="edit__profile-form__container__form-container__input" defaultValue={selectedUser.experience} required></input>
                        <span className="edit__profile-form__container__form-container__label">Experience</span>
                    </div>
                    <div className="edit__profile-form__container__form-container">
                        <input type="text" name="position" className="edit__profile-form__container__form-container__input" defaultValue={selectedUser.position} required></input>
                        <span className="edit__profile-form__container__form-container__label">Position</span>
                    </div>
                    <div className="edit__profile-form__container__form-container">
                        <input type="text" name="email" className="edit__profile-form__container__form-container__input" defaultValue={selectedUser.email} required></input>
                        <span className="edit__profile-form__container__form-container__label">Email</span>
                    </div>
                    <div className="edit__profile-form__container__form-container">
                        <input type="text" name="type" className="edit__profile-form__container__form-container__input" defaultValue={selectedUser.type} required></input>
                        <span className="edit__profile-form__container__form-container__label">Player/Coach</span>
                    </div>

                    <button type="submit" className="edit__profile-form__container__form-button">Save</button>
                </form>
            </div>
        </div>
    )
}

export default EditProfileForm