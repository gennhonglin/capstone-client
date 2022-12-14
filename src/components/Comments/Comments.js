import "./Comments.scss"


function Comments() {




    return (
        <div className="comments">
            <form className="comments__form">
                <textarea type="text" className="comments__form-text" placeholder="Comment about what you think"></textarea>
                <button type="submit" className="comments__form-button">Submit Comment</button>
            </form>

        </div>
    )
}

export default Comments