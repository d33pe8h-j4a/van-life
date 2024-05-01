import { Link } from "react-router-dom";
import bgImg from "../assets/images/about-background.png";
function About() {
    return (
        <section id="about">
            <img
                src={bgImg}
                alt="Van image"
                style={{ width: "100%", aspectRatio: "2/1" }}
            />
            <div className="content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>
                    Our mission is to enliven your road trip with the perfect
                    travel van rental. Our vans are recertified before each trip
                    to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p>
                    Our team is full of vanlife enthusiasts who know firsthand
                    the magic of touring the world on 4 wheels.
                </p>
                <div className="explore-banner">
                    <h2>Your destination is waiting.</h2>
                    <h2>Your van is ready.</h2>
                    <button>
                        <Link to="../vans">Explore our vans</Link>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default About;
