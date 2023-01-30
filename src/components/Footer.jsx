import React from "react";
// btn component
import Goldbtn from "./Goldbtn";
// style
import "../styles/Footer.css";
// icons
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-text">
        <h1 className="footer-h1">
          We'd love to talk <br /> with you
        </h1>
        <Goldbtn value={"Ask For Help"} />
      </div>

      <div className="all-footer-lines">
        <div className="footer-line1">
          <ul className="footer-ul">
            <h4 className="footer-h4">Navigation</h4>
            <li className="footer-li">Home</li>
            <li className="footer-li">How It Works</li>
            <li className="footer-li">For Business</li>
            <li className="footer-li">My Order</li>
            <li className="footer-li">About Us</li>
          </ul>
        </div>

        <div className="footer-line2">
          <ul className="footer-ul">
            <h4 className="footer-h4">Explore</h4>
            <li className="footer-li">Browse all Celebrities</li>
            <li className="footer-li">Returns & Refunds</li>
            <li className="footer-li">WBS for Change</li>
            <li className="footer-li">How to WBS?</li>
            <li className="footer-li">Accessibility</li>
          </ul>
        </div>

        <div className="footer-line3">
          <ul className="footer-ul">
            <h4 className="footer-h4">LEGAL</h4>
            <li className="footer-li">General Info</li>
            <li className="footer-li">Privacy Policy</li>
            <li className="footer-li">Terms of Service</li>
          </ul>
        </div>

        <div className="footer-line4">
          <ul className="footer-ul">
            <h4 className="footer-h4">TALK TO US</h4>
            <li className="footer-li">wbs@scope.com</li>
            <li className="footer-li">+0 123 456 7890</li>
            <li className="footer-li">Contact Us</li>

            <li className="footer-li"><span className="icon-border"><GrFacebookOption color="#CEA234"/></span> Facebook</li>
            <li className="footer-li"><span className="icon-border"><FaLinkedinIn color="#CEA234"/></span> Linkedin</li>
            <li className="footer-li"><span className="icon-border"><AiOutlineTwitter color="#CEA234"/></span> Twitter</li>
          </ul>
        </div>
      </div>

      <hr className="footer-hr" />

      <div className="footer-last-text">
        <p className="footer-rigths">© 2022 wbsscope. All Rights Reserved. </p>
        <h3 className="footer-logo">Logo Here</h3>
        <p className="footer-create">Created by Hasnain Saleem</p>
      </div>
    </div>
  );
};

export default Footer;
