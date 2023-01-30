import React from "react";
import "../styles/Bottomhero.css";
// image
import Botimg from "../images/bottombg.png";
import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
// btn component import
import Goldbtn from "./Goldbtn";
import Carouselscroll from "./Carouselscroll";

const Bottomhero = () => {
  return (
    <div className="hero">
      <img src={Botimg} alt="image" className="bot-image" />
      <div className="bot-img-text">
        <h1 className="bot-h1">
          &nbsp; &nbsp; Ready to give the most <br />
          meaningful gift on earth?
        </h1>
        <div className="bot-img-btn">
          <Goldbtn value={"Discover"} />
        </div>
      </div>

      <div className="bot-text">
        <h1 className="bot-text-h1">How It Works</h1>
      </div>

      <div className="bot-icons-main">
        <div className="bot-icon1">
          <img src={Icon1} alt="" />
          <h3 className="workh3">Search An Star</h3>
          <p className="workpara">
            Find the celeb for any
            <br />
            occasion.
          </p>
        </div>

        <div className="bot-icon2">
          <img src={Icon2} alt="" />
          <h3 className="workh3">Request Them</h3>
          <p className="workpara">
            Get your personalized video <br />
            message.
          </p>
        </div>

        <div className="bot-icon3">
          <img src={Icon3} alt="" />
          <h3 className="workh3">Share The Wow</h3>
          <p className="workpara">
            Capture the WOW. Bonus <br />
            points if you tag us.
          </p>
        </div>
      </div>

      <div className="work-btn">
        <Goldbtn value={"Contact Us Now"} />
      </div>

      <Carouselscroll/>
    </div>
  );
};

export default Bottomhero;
