import React from "react";
import "./Adscard.css";
import Card from "./Card";
import card1 from "./image/card/card-1.jpg";
import card2 from "./image/card/card-2.jpg";
import card3 from "./image/card/card-3.jpg";
import card4 from "./image/card/card-4.jpg";
import card5 from "./image/card/card-5.jpg";

export default function Adscard() {
  return (
    <>
      <div className="adscard-cont1">
        <div className="adscard-card2">
          <Card
            cardimg={card1}
            cardname="Group Tours"
            text1="Travel"
            text2="Group Tours"
            add="Alabama,USA"
            rating="4.5"
            price="350"
            fixed="Negotiable"
            views="Views:4729"
          />
          <Card
            cardimg={card2}
            cardname="Audi A5 1.8 TFSI 201"
            text1="Vehicles"
            text2="Fancy Cars"
            add="Alaska,USA"
            rating="4.5"
            price="3500"
            fixed="Fixed"
            views="Views:5389"
          />
          <Card
            cardimg={card3}
            cardname="Audi A6 1.8 TFSI 201"
            text1="Vehicles"
            text2="Cars"
            add="Alaska,USA"
            rating="5"
            price="3500"
            fixed="Fixed"
            views="Views:5691"
          />
          <Card
            cardimg={card4}
            cardname="BMW x1 SDrive18i 201"
            text1="Vehicles"
            text2="Classic cars"
            add="Alaska,USA"
            rating="5"
            price="9500"
            fixed="Fixed"
            views="Views:6506"
          />
          <Card
            cardimg={card5}
            cardname="Big Reality Show"
            text1="Events"
            text2="Business"
            add="Washington,USA"
            rating="5"
            price="350"
            fixed="Negotiable"
            views="Views:3899"
          />
        </div>
      </div>
    </>
  );
}
