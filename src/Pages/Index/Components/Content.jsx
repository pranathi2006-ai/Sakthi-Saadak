
import Image from '../../../Images/final logo left.png'
import {useNavigate } from 'react-router-dom';

function Content(){

    const navigate = useNavigate()

    function handleSignUp(){
        navigate('/Signup')
    }

    return(
        <>
            <div className="index-content-wrapper">
                <div className="index-text-section">
                    <h1 id="index-side_heading">Linking Today with a <span className ="highlight">Sustainable Energy</span> Tomorrow.</h1>   
                    <h2 id="index-below-heading">Sakthi Saadak unlocks access to global utility data. Our technology powers the next generation of climate solutions, giving anyone the tools to electrify and decarbonize. Together, we are shaping a cleaner, greener future.</h2>
                </div>
                <img className="Ocean" src={Image} alt="" />
            </div>
            <div className="index-button-container">
                <button className="index-styled-button" id="SignUp" onClick={handleSignUp}> Sign Up</button>
                <button className="index-styled-button">Know More</button>
            </div>
        </>
    );
}

export default Content