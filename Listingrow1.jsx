import React from "react";
import "./Listingrow1.css";
import Card from "./Card";
import card1 from "./image/listrow1/sphone-1.jpg"
import card2 from "./image/listrow1/assistant.jpg"
import card3 from "./image/listrow1/dog.jpg"
import card4 from "./image/listrow1/house.jpg"
import card5 from "./image/listrow1/sphone-2.jpg"

export default function Listingrow1() {
  return (
    <>
      <div className="adscard-cont1">
        <div className="adscard-card2">
          <Card
            cardimg={card1}
            cardname="Samsung Galaxy S22 U"
            text1="Mobile Phones"
            add="Bharat"
            rating="5.0"
            price="600"
            fixed="Fixed"
            views="Views:7526"
          />
          <Card
            cardimg={card2}
            cardname="Assistant Accountant"
            text1="Job"
            text2="Accounts"
            add="Canada"
            rating="5.0"
            price="670"
            fixed="Fixed"
            views="Views:4917"
          />
          <Card
            cardimg={card3}
            cardname="German Shepherd For"
            text1="Animal"
            text2="Dogs"
            add="Alaska,USA"
            rating="4.5"
            price="1200"
            fixed="Negotibale"
            views="Views:4470"
          />
          <Card
            cardimg={card4}
            cardname="Luxury Family House"
            text1="Real Estate"
            text2="For rent"
            add="Canada"
            rating="5.0"
            price="399"
            fixed="Fixed"
            views="Views:7698"
          />
          <Card
            cardimg={card5}
            cardname="Samsung Galaxy S9"
            text1="Mobile Phones"
            add="California,USA"
            rating="5.0"
            price="900"
            fixed="Negotiable"
            views="Views:5884"
          />
        </div>
      </div>
    </>
  );
}
