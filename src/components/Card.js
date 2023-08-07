import React from "react";
import star from "./assets/Star.png";
// import image1 from "./assets/image1.png";


const Card = ({imgpath,review,reviewCount,country,title,price,openSpots }) => {
    return(
        <div className="cardCont">
            {openSpots === 0 && <div className="cardBadge bold">SOLD OUT</div>}
            <div className="cardImg">
                <img src={process.env.PUBLIC_URL + imgpath} alt="bbb" />
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