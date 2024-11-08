import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Output from "./Components/Output";
import SelectBox from "./Components/SelectBox";
import './Input.css'

function Input(){

    return(
        <div id="input-body">
            <Header />
            <NavBar />
            <SelectBox />
            <Output />
        </div>
    );
}

export default Input