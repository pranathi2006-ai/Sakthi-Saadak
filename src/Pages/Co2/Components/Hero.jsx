import Emmisions from "../JSB/Emmisions";

function Hero(){
    
    function handleEmmision(){
      const token = localStorage.getItem('token');
      console.log('Token:', token);

      Emmisions(token);
    }

    return(
        <section className="hero">
        <div className="hero-content">
          <h1>TRACK YOUR<br />CARBON FOOTPRINT</h1>
          <p>Understand and reduce your environmental impact with our advanced CO2 tracking system. Make informed decisions for a sustainable future.</p>
          <a href="#emissions-data" className="cta-button" onClick={handleEmmision}>Click to know your carbon footprint</a>
        </div>
        <div className="hero-image">
          <img src="eco-earth.svg" alt="Sustainable Earth" />
        </div>
      </section>
    );
}

export default Hero