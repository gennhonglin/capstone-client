import DisplayUser from "../../components/DisplayUser/DisplayUser";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm";
import Header from "../../components/Header/Header";
import "./EditProfile.scss";

function EditProfile() {
    const token = sessionStorage.getItem("token");
    let image = sessionStorage.getItem("image");

    if (token === "guest" || token === null) {
        image = true;
    } else {
        image = false;
    }

    return (
        <div className="edit-profile">
            <DisplayUser token={token} />
            <div className="edit-profile__container">
                <EditProfileForm />
            </div>
            <Header image={image} />
        </div>
    )
}

export default EditProfile