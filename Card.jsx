import React from "react";
import "./Card.css";
import man from "./image/card/card-man.jpg";
import { FaAngleRight } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { IoHeart } from "react-icons/io5";
import { ImMobile } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";

export default function Card(props) {
  return (
    <>
      <div className="card-main-cont">
        <div className="card-img1">
          <img src={props.cardimg} />
        </div>
        <div className="card-man-img">
          <img src={man} alt="" />
          <div className="card-grey-gola"></div>
        </div>
        <div className="card-text1-cont1">
          <div className="card-text1-cont2">
            <p>{props.text1}</p>
            <span
              style={{
                marginTop: "3px",
                color: "#d3d3d3",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              <FaAngleRight />
            </span>
            <p>{props.text2}</p>
          </div>
        </div>
        <div className="card-text2-cont1">
          <div className="card-text2-cont2">
            <h2>
              {props.cardname}{" "}
              <span style={{ fontSize: "14px" }}>
                <FcOk />
              </span>
            </h2>
          </div>
        </div>
        <div className="card-text3-cont1">
          <div className="card-text3-cont2">
            <p>
              <span>
                <FaLocationDot />
              </span>{" "}
              {props.add}
            </p>
          </div>
        </div>
        <div className="card-text4-cont1">
          <div className="card-text4-cont2">
            <div
              style={{ marginTop: "8px", fontSize: "16px", fontWeight: "bold" }}
            >
              {props.rating}
            </div>
            <div className="text4-cont3">
              <div className="text4-cont4">
                <span>
                  <ImMobile />
                </span>
              </div>
              <div className="text4-cont5">
                <span>
                  <IoHeart />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-text5-cont1">
          <div className="text5-cont2">
            <span className="dollare-icon">
              <BsCurrencyDollar />
            </span>
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>{props.price}</span>
            <span style={{ fontSize: "12px", marginLeft: "5px" }}>
              {props.fixed}
            </span>
          </div>
          <div className="view">{props.views}</div>
        </div>
        <div className="feature">FEATURED</div>
      </div>
    </>
  );
}
