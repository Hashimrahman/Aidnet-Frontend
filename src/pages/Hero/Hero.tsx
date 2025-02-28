import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import ImpactMetrics from "../ImapctMetrics/ImpactMetrics";
import Footer from "../../components/Footer/Footer";

const Hero: React.FC = () => {
    return (
        <>
            <Home />
            {/* <Home /> */}
            <About />
            <ImpactMetrics />
            <Footer />
        </>
    )

}
export default Hero