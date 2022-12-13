import Header from "../../components/Header/Header";
import PostForm from "../../components/PostForm/PostForm";
import "./AddPost.scss";

function AddPost() {
    return(
        <div className="add-post">
            <PostForm />
            <Header/>
        </div>
    );
}

export default AddPost