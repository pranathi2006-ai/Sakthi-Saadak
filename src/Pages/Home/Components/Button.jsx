import { useNavigate } from "react-router-dom";


function Button(){

    const navigate = useNavigate();

    function handleClick(){
        navigate('/Input')
    }

    return(
        <button id="Input" onClick={handleClick}>Input Energy Usage</button>
    );
}

export default Button