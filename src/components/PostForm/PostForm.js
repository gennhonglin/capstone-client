import "./PostForm.scss";
import back from "../../assets/icons/chevron-back-outline.svg";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function PostForm() {
    const form = useRef();
    const Navigate = useNavigate();

    const newPost = (e) => {
        e.preventDefault();
        const address = form.current.address.value.split(" ");

        axios.get(`https://api.geoapify.com/v1/geocode/search?text=${address[0]}%20${address[1]}%20${address[2]}%20${form.current.city.value}%2C%20Canada&apiKey=ca75c7ed0b55440c898fab68a7e5739e`)
        .then((response) => {
                console.log(response.data);
                const newPost = {
                    player_id: 1,
                    location_name: form.current.name.value,
                    address: form.current.address.value,
                    city: form.current.city.value,
                    level: form.current.level.value,
                    registration: form.current.registration.value,
                    lat: response.data.features[0].geometry.coordinates[1],
                    long: response.data.features[0].geometry.coordinates[0]
                }

                axios.post('http://localhost:8080/location', newPost)
                .then((response) => {
                    if (response.status === 201) {
                        Navigate(-1);
                    }
                })
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
                    <div className="post-form__container__form-container">
                        <input type="text" name="name" className="post-form__container__form-container__input" required></input>
                        <span className="post-form__container__form-container__label">Location Name:</span>
                    </div>
                    <div className="post-form__container__form-container">
                        <input type="text" name="address" className="post-form__container__form-container__input" required></input>
                        <span className="post-form__container__form-container__label">Location Address:</span>
                    </div>
                    <div className="post-form__container__form-container">
                        <input type="text" name="city" className="post-form__container__form-container__input" required></input>
                        <span className="post-form__container__form-container__label">City:</span>
                    </div>
                    <div className="post-form__container__form-container">
                        <input type="text" name="level" className="post-form__container__form-container__input" required></input>
                        <span className="post-form__container__form-container__label">Level:</span>
                    </div>
                    <div className="post-form__container__form-container">
                        <input type="text" name="registration" className="post-form__container__form-container__input" required></input>
                        <span className="post-form__container__form-container__label">Registration URL:</span>
                    </div>

                    <button type="submit" className="post-form__container__form-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PostForm