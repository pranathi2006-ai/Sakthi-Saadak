
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav>
            <ul className="navsbar">
                    <a href="/Login">Log In</a>
                    <a href="#">SignUp</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
            </ul>
        </nav>
    );
}

export default NavBar