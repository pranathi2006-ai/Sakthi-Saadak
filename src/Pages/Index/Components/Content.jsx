
import Image from '../../../Images/final logo left.png'
import {useNavigate } from 'react-router-dom';

function Content(){

    const navigate = useNavigate()

    function handleSignUp(){
        navigate('/Signup')
    }

    return(
        <>
            <div className="content-wrapper">
                <div className="text-section">
                    <h1 id="side_heading">Linking Today with a <span className ="highlight">Sustainable Energy</span> Tomorrow.</h1>   
                    <h2>Sakthi Saadak unlocks access to global utility data. Our technology powers the next generation of climate solutions, giving anyone the tools to electrify and decarbonize. Together, we are shaping a cleaner, greener future.</h2>
                </div>
                <img className="Ocean" src={Image} alt="" />
            </div>
            <div className="button-container">
                <button className="styled-button" id="SignUp" onClick={handleSignUp}> Sign Up</button>
                <button className="styled-button">Know More</button>
            </div>
        </>
    );
}

export default Content