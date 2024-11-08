import Image from '../../../Images/set leaf.png'

function About(){
    return (
        <>
            <section className="about-section">
                <img src={Image} alt="about us" className="about-image" />
                <h2>About Us</h2>
                <p>The mission at Sakthi Saadhak is leading people towards healthier and sustainable ways of energy.</p>
                <p>Through insights, solutions, and tools that help individuals and companies minimize their carbon footprint.</p>
                <p>We make a greener and more energy-efficient world by empowering people to know and be equipped with the necessary</p>
                <p> tools and resources that allow them to optimize their use of energy.</p>
                <p> From smart energy saving tips through the latest in renewable technologies, we are </p>
                <p>focused on driving change and a future of sustainable energy.</p>
            </section>
        </>
    );
}

export default About