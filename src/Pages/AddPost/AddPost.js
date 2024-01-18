import Header from "../../components/Header/Header";
import PostForm from "../../components/PostForm/PostForm";
import "./AddPost.scss";
import DisplayUser from "../../components/DisplayUser/DisplayUser";

function AddPost() {
    const token = sessionStorage.getItem("token");
    let image = sessionStorage.getItem("image");
    if(image === null) {
        image = true;
    } else {
        image = false;
    }

    return(
        <div className="add-post">
            <DisplayUser token = {token} />
            <PostForm />
            <Header image= {image}/>
        </div>
    );
}

export default AddPost