import React from "react";
import star from "./assets/Star.png";
// import image1 from "./assets/image1.png";


const Card = ({imgpath,review,reviewCount,location,title,price,openSpots }) => {

    let badgeTxt;
    if (openSpots === 0){
        badgeTxt = "SOLD OUT";
    } else if (location === "Online") {
        badgeTxt = "ONLINE";
    }

    return(
        <div className="cardCont">
            {badgeTxt !== undefined && <div className="cardBadge bold">{badgeTxt}</div>}
            <div className="cardImg">
                <img src={process.env.PUBLIC_URL + imgpath} alt="bbb" />
            </div>
            <div className="cardInfo">
                <img className="imgStar" src={star} alt="star"/>
                <p>{review}</p>
                <p className="gray">({reviewCount})</p>
                <p className="gray">{location}</p>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price} /</span>person</p>
        </div>
    );
}

export default Card;