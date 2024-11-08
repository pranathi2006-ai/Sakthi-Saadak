import Article from "./Components/Article";
import Button from "./Components/Button";
import Header from "./Components/Header";
import NavArticle from "./Components/NavArticle";
import NavBar from "./Components/NavBar";
import './Home.css'

function Home(){
    
    return(
        <div id="home-body">
            <Header />
            <NavBar />
            <Article />
            <Button />
            <NavArticle />
        </div>
    );
}

export default Home