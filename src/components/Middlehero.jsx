import React from "react";
import Goldbtn from "./Goldbtn";
import Trendingbtn from "./Trendingbtn";
import Cardsecond from "./Cardsecond";
import Secondslide from './Secondslide'
// styles
import "../styles/Herosecond.css";

const Middlehero = () => {
  return (
    <div className="mid-hero">
      <div className="midhead">
        <h1 className="midh1">Categories To Explore</h1>
      </div>

      <div className="mid-mulbtn">
        <Trendingbtn btntext={"Actor"} />
        <Trendingbtn btntext={"Actor"} />
        <Trendingbtn btntext={"TV Star"} />
        <Trendingbtn btntext={"Comedian"} />
        <Trendingbtn btntext={"Athletes"} />
        <Trendingbtn btntext={"Musician"} />
        <Trendingbtn btntext={"Reeality"} />
        <Trendingbtn btntext={"Creator"} />
      </div>

      
    </div>
  );
};

export default Middlehero;
