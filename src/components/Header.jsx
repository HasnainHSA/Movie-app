import React, { useState } from "react";
import '../styles/Header.css'
import Bgimage from '../images/pngwing 1.png'
import {IoMdMenu} from 'react-icons/io'
import {FiSearch} from 'react-icons/fi'
import {TbWorld} from 'react-icons/tb'
import {RxDot , RxDotFilled} from 'react-icons/rx'
import Goldbtn from "./Goldbtn";

const Header = () => {
  const [open, setopen] = useState(false)

  return (
    <div className="headmain">
      <div className="nav">
        <div className="logo">Logo here</div>
        <div className="divtwo"><button className="headmenu iconm" onClick={()=>setopen(!open)}><IoMdMenu /></button>

        { open && <div className="dropdown">
          
          <ul className="headul">
            <li className="headli"><a href="#">Home</a></li>
            <li className="headli"><a href="#">Categores</a></li>
            <li className="headli"><a href="#">How It Works</a></li>
            <li className="headli"><a href="#">For Business</a></li>
            <li className="headli"><a href="#">My Order</a></li>
          </ul>

          <div className="nesul-main">

          <div className="nestul">
            <ul className="nestulnes">
              <li>latest Content</li>
              <li>categories to explore</li>
              <li>Featured Video</li>
              <li>Trending Talent</li>
            </ul>
          </div>
          
          
          <div className="nestul">
            <ul className="nestulnes">
              <li>Viewed Talent</li>
              <li>Suggested talent</li>
              <li>Testimonials</li>
              <li>New Talent</li>
            </ul>
          </div>
          </div>

          </div>}


        </div>
        <div className="divthree">
          <button className="headmenu"><FiSearch/></button>
          <button className="headmenu"><TbWorld/></button>
          <button className="login">Resigster/ login</button>
        </div>
      </div>
      <hr />

      <div className="headertext">
        <h1 className="headh">Lorem ipsum Sed dolor Ded</h1>
        <p className="headpara">
          Elit, sed do eiusmod tempor and incididunt
          <br/> umagna ad minim veniam,
          quis nostrud.
        </p>

        <Goldbtn value={"Discover"}/>
        
      </div>

      <div className="headbg">
        <img src={Bgimage} alt="" className="headimg" />
      </div>

      <div className="dots">
        <RxDot className="doticon" color="white"/>
        <RxDot className="doticon" color="white"/>
        <RxDotFilled className="doticon" color="white"/>
        <RxDot className="doticon" color="white"/>
        <RxDot className="doticon" color="white"/>
      </div>

    </div>

  );
};

export default Header;
