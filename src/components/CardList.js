import React from "react";
import Card from "./Card";
import Data from "./Data";

const CardList = () => {

    const List = Data.map((item) => {
        return <Card imgpath={item.imgpath}
                    review={item.review}
                    reviewCount={item.reviewcount}
                    country={item.country}
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