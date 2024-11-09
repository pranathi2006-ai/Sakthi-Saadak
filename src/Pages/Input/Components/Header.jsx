import Image from '../../../Images/logo png.png'

function Header(){
    
    return(
        <h1 id="input-main_heading">
            <img className ="input-logo" src={Image} alt="" />SAKTHI SAADHAK
        </h1>
    );
}

export default Header