import Header from "../../components/Header/Header";
import PostForm from "../../components/PostForm/PostForm";
import "./AddPost.scss";

function AddPost() {
    const image = sessionStorage.getItem("image");

    return(
        <div className="add-post">
            <PostForm />
            <Header image= {image}/>
        </div>
    );
}

export default AddPost