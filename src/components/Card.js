import React from "react";
import star from "./assets/Star.png";
// import image1 from "./assets/image1.png";


const Card = ({imgpath,review,reviewCount,country,title,price }) => {
    return(
        <div className="cardCont">
            <div className="cardImg">
                <img src={process.env.PUBLIC_URL + imgpath} alt="image" />
            </div>
            <div className="cardInfo">
                <img className="imgStar" src={star} alt="star"/>
                <p>{review}</p>
                <p className="gray">({reviewCount})</p>
                <p className="gray">{country}</p>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price} /</span>person</p>
        </div>
    );
}

export default Card;