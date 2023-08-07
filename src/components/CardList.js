import React from "react";
import Card from "./Card";

const CardList = () => {


    return(
        <Card 
            imgpath="./images/image1.png"
            review={5.0}
            reviewCount={6}
            country="USA"
            title="Life lessons with Katie Zaferes"
            price="136"
        />
    );
}

export default CardList;