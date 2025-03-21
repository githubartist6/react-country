import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Img from "../images/world.png"

export const HeroSection = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                {/* Text code */}
                <div className="hero-content">
                    <h1 className="heading-text">Explore the word, One Country at aTime.</h1>
                    <p className="paragraph">Discover the history, culture, and beauty of every nation. search, and filter through countries to find the details you need.</p>
                    <button className="btn-darken btn-inline bg-white-box">
                        <NavLink to="/country">
                            Start Exploring <FaLongArrowAltRight />
                        </NavLink>
                    </button>
                </div>
                {/* Image code */}
                <div className="hero-image">
                    <img src={Img} alt="world beauty" className="banner-image" />
                </div>
            </div>
        </main>
    )
}