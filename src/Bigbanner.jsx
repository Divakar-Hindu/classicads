import React from "react";
import "./Bigbanner.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

export default function Bigbanner() {
  return (
    <>
      <div className="big-maincont">
        <div className="big-imgcont">
          <div className="big-text-cont">
            <div className="big-text1">Over 10,56,432 Active Ads</div>
            <div className="big-text2">Buy, Sell, Rent In One Click.</div>
            <div className="big-serch-cont">
              <div className="big-input1">
                <div>
                  <input type="text" placeholder="Enter Keyword" />
                </div>
                <div>
                  <IoSearchOutline />
                </div>
              </div>
              <div className="big-input2">
                <div>
                  <input type="text" placeholder="Select Location" />
                </div>
                <div>
                  <IoLocationOutline />
                </div>
              </div>
              <div className="big-search-btn">
                <button>
                  <i className="big-search-btn-ii">
                    <IoSearchOutline />
                  </i>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
