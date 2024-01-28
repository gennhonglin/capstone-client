import "./Homepage.scss";
import Header from "../../components/Header/Header";
import DisplayUser from "../../components/DisplayUser/DisplayUser";

function Homepage() {
        const token = sessionStorage.getItem("token");
        let image = sessionStorage.getItem("image");

        if(token === "guest" || token === null) {
            image = true;
        } else {
            image = false;
        }


    return(
        <div className="homepage">
            <DisplayUser token = {token} />
            <section className="homepage__hero">
                <div className="homepage__hero__intro">
                    <h1 className="homepage__hero__intro-text">Welcome to GHLVolley!</h1>
                </div>
            </section>
            <section className="homepage__about">
                <h2 className="homepage__about-title">ABOUT</h2>
                <p className="homepage__about-details">
                Welcome to our volleyball hub, your go-to resource for both beginner and intermediate players seeking to enhance their game.
                This project was born out of a desire to simplify the journey of improvement for volleyball enthusiasts.
                <br></br>
                <br></br>
                As someone who once struggled to find reliable content for game enhancement, I understand the challenges of navigating through scattered resources.
                This website aims to be the solution by providing a centralized platform with carefully curated and easily accessible resources.
                <br></br>
                <br></br>
                Our focus goes beyond content – we also guide players in finding local facilities and aspire to create opportunities for connections with experienced mentors.
                Join us in building a community that supports and empowers players on their volleyball journey.
                </p>
            </section>
            <Header image = {image}/>
        </div>
    )
}


export default Homepage