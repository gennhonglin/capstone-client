import Header from "../../components/Header/Header";
import PostForm from "../../components/PostForm/PostForm";
import "./AddPost.scss";

function AddPost() {
    let image = sessionStorage.getItem("image");
    if(image === null) {
        image = true;
    }

    return(
        <div className="add-post">
            <PostForm />
            <Header image= {image}/>
        </div>
    );
}

export default AddPost