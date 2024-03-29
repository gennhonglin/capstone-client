import "./ProfileCard.scss";
import placeholder from "../../assets/images/placeholder-img.jpg";
import Edit from "../../assets/icons/create-outline.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

function ProfileCard() {
    const token = sessionStorage.getItem("token");
    let display;
    let user;
    if (token !== "guest") {
        user = jwt_decode(token);
    }
    const [selectedUser, setSelectedUser] = useState("");

    useEffect(() => {
        if (token !== 'guest') {
            axios.get(`http://localhost:8080/player/${user.data.id}`)
                .then((result) => {
                    setSelectedUser(result.data);
                }).catch((err) => {
                    return err;
                })
        }

    }, [])

    let checkDataNull = (info) => {
        let text;
        if (info === null) {
            text = "Please fill in data";
            return text;

        } else {
            text = info;
            return text;
        }
    }

    if (token === 'guest' || token === null) {
        display =
            <div className="profile-card">
                <div className="profile-card__container">
                    <h1>Please sign in to see user information</h1>
                </div>
            </div>;
    } else {
        display = <div className="profile-card">
            <div className="profile-card__container">
                <div className="profile-card__container-header">
                    <h1 className="profile-card__container-header__title">Profile</h1>
                    <Link to={'/edit-profile'}>
                        <svg className="profile-card__container-header__edit" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="create-outline 1" clipPath="url(#clip0_1_2)">
                                <g id="Group 2">
                                    <path id="Vector" d="M384 224V408C384 413.253 382.965 418.454 380.955 423.307C378.945 428.16 375.999 432.57 372.284 436.284C368.57 439.999 364.16 442.945 359.307 444.955C354.454 446.965 349.253 448 344 448H104C93.3913 448 83.2172 443.786 75.7157 436.284C68.2143 428.783 64 418.609 64 408V168C64 157.391 68.2143 147.217 75.7157 139.716C83.2172 132.214 93.3913 128 104 128H271.48" stroke="black" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <g id="Pen">
                                    <path id="Vector_2" d="M507.941 5.25029C506.48 3.64471 504.708 2.35205 502.733 1.45045C500.759 0.548843 498.621 0.0570115 496.451 0.00466886C494.281 -0.0476738 492.122 0.340559 490.106 1.14591C488.09 1.95126 486.258 3.15701 484.721 4.69029L472.351 17.0003C470.852 18.5004 470.01 20.5345 470.01 22.6553C470.01 24.7761 470.852 26.8102 472.351 28.3103L483.691 39.6303C484.435 40.3771 485.318 40.9697 486.291 41.3741C487.264 41.7785 488.307 41.9866 489.361 41.9866C490.415 41.9866 491.458 41.7785 492.431 41.3741C493.404 40.9697 494.288 40.3771 495.031 39.6303L507.091 27.6303C513.191 21.5403 513.761 11.6203 507.941 5.25029ZM447.341 42.0003L266.821 222.2C265.727 223.29 264.931 224.644 264.511 226.13L256.161 251C255.961 251.675 255.947 252.391 256.12 253.074C256.293 253.756 256.648 254.379 257.145 254.876C257.643 255.374 258.266 255.728 258.948 255.901C259.63 256.075 260.346 256.06 261.021 255.86L285.871 247.51C287.358 247.09 288.711 246.295 289.801 245.2L470.001 64.6603C471.668 62.9753 472.603 60.7006 472.603 58.3303C472.603 55.9599 471.668 53.6853 470.001 52.0003L460.051 42.0003C458.364 40.3179 456.079 39.3732 453.696 39.3732C451.314 39.3732 449.028 40.3179 447.341 42.0003V42.0003Z" fill="black" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2">
                                    <rect width="512" height="512" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </Link>
                </div>
                <div className="profile-card__container__body">
                    <div className="profile-card__container__body-top">
                        <div className="profile-card__container__body-top__profile">
                            <img className="profile-card__container__body-top__profile-img" alt="placeholder img" src={placeholder} />
                        </div>
                        <div className="profile-card__container__body-top__content">
                            <h1 className="profile-card__container__body-top__content-name">{checkDataNull(selectedUser.name)}, {checkDataNull(selectedUser.type)}</h1>
                            <h2 className="profile-card__container__body-top__content-position">{checkDataNull(selectedUser.position)}</h2>
                        </div>
                    </div>
                    <div className="profile-card__container__body-bottom">
                        <div className="profile-card__container__body-bottom__location">
                            <div className="profile-card__container__body-bottom__location-information">
                                <h2 className="profile-card__container__body-bottom__location-information-title">City :</h2>
                                <h3 className="profile-card__container__body-bottom__location-information-data">{checkDataNull(selectedUser.city)}</h3>
                            </div>
                            <div className="profile-card__container__body-bottom__location-information">
                                <h2 className="profile-card__container__body-bottom__location-information-title">Country :</h2>
                                <h3 className="profile-card__container__body-bottom__location-information-data">{checkDataNull(selectedUser.country)}</h3>
                            </div>
                        </div>
                        <div className="profile-card__container__body-bottom__details">
                            <div className="profile-card__container__body-bottom__details-information">
                                <h2 className="profile-card__container__body-bottom__details-information-title">Experience :</h2>
                                <h3 className="profile-card__container__body-bottom__details-information-data">{checkDataNull(selectedUser.experience)}</h3>
                            </div>
                            <div className="profile-card__container__body-bottom__details-information">
                                <h2 className="profile-card__container__body-bottom__details-information-title">Email :</h2>
                                <h3 className="profile-card__container__body-bottom__details-information-data">{checkDataNull(selectedUser.email)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }


    return (display)
}

export default ProfileCard