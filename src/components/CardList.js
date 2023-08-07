import React from "react";
import Card from "./Card";
import Data from "./Data";

const CardList = () => {

    const List = Data.map((item) => {
        return <Card 
                    openSpots={item.openSpots}
                    key={item.id}
                    imgpath={item.imgpath}
                    review={item.review}
                    reviewCount={item.reviewcount}
                    location={item.location}
                    title={item.title}
                    price={item.price}
                />    
    })
    
    return(
        <div className="cardListCont">
            {List}
        </div>
    );
}

export default CardList;