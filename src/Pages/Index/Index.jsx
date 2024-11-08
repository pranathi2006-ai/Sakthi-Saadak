import Header from './Components/Header.jsx'
import NavBar from './Components/NavBar.jsx'
import Content from './Components/Content.jsx'
import About from './Components/About.jsx'
import Footer from './Components/Footer.jsx'
import './Index.css'

function Index(){

    return(
        <div id="index-body">
            <Header />
            <NavBar />
            <Content />
            <About />
            <Footer />
        </div>
    );

}

export default Index