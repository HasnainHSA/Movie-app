import React from "react";
// icons
import { AiTwotoneHeart, AiTwotoneStar } from "react-icons/ai";
// style 
import '../styles/Cardsecond.css'

const Cardsecond = (props) => {
  return (
    <div className="sec-card-main">
      <img src={props.secimage} alt="" className="show-img-op" />

      <div className="likebtn">
        <AiTwotoneHeart color="white" size={25}/>
      </div>

      <div className="sec-img-btn">
        <p className="sec-book">1,000PKR</p>
      </div>

      <div className="show-starname">Star Name</div>

      <div className="show-details">
        <p className="secpara">TV Star</p>
        <p className="sec-stars">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </p>
      </div>
    </div>
  );
};

export default Cardsecond;
