import { Link } from "react-router-dom";
import "./index.css"

function Header(){
    return(
        <ul>
            <li><Link to="/"><a>Home</a></Link></li>
            <li><Link to="/Sobre"><a>Sobre</a></Link></li>
        </ul>
    )
}

export default Header;