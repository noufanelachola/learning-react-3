import React from "react";
import MainImg from "./assets/hero-img.png"

const Hero = () => {
    return(
        <div className="heroCont content" >
            <img className="heroImg" src={MainImg} />
            <h2 className="h2Txt heroTxt">Online Experiences</h2>
            <p className="pTxt heroTxt">
                Join unique interactive activities led by one-of-a-kind<br/> 
                hosts-all without leaving home.
            </p>
        </div>
    );

}

export default Hero;