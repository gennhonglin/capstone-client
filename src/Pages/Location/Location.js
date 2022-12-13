import Header from "../../components/Header/Header";
import "./Location.scss";
import Maps from "../../components/Maps/Maps";


function Location() {


    return (
        <div className="location">
            <Header />
            <div className="location__maps">
                <Maps />
            </div>
            <div className="location__posts">
                
            </div>
        </div>
    )
}

export default Location