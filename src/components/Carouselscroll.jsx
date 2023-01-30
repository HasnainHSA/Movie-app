import React from "react";
// images
import Testimg1  from '../images/test1.png'
import Testimg2  from '../images/test2.png'
import Testimg3  from '../images/test3.png'
import Testimg4  from '../images/test4.png'
// styling
import '../styles/Carousel.css'
// silder
import Carousel from "react-elastic-carousel";
import Testimonialcard from "./Testimonialcard";

const breakPoint = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Carouselscroll = () => {
  return (
    <div>
      
      <Carousel itemsToScroll={2} itemsToShow={3}>

        
        <Testimonialcard name={"Harry Alexander"} img={Testimg2}/>

        <Testimonialcard name={"Alexa Wood"} img={Testimg1}/>

        <Testimonialcard name={"Liza Grillish"} img={Testimg3}/>

        <Testimonialcard name={"Jack Walter"} img={Testimg4}/>

        <Testimonialcard name={"Harry Alexander"} img={Testimg2}/>

        <Testimonialcard name={"Alexa Wood"} img={Testimg1}/>

        <Testimonialcard name={"Liza Grillish"} img={Testimg3}/>

        <Testimonialcard name={"Jack Walter"} img={Testimg4}/>

        <Testimonialcard name={"Harry Alexander"} img={Testimg2}/>

        <Testimonialcard name={"Alexa Wood"} img={Testimg1}/>

        <Testimonialcard name={"Liza Grillish"} img={Testimg3}/>

        <Testimonialcard name={"Jack Walter"} img={Testimg4}/>

        <Testimonialcard name={"Harry Alexander"} img={Testimg2}/>

        <Testimonialcard name={"Jack Walter"} img={Testimg4}/>

        <Testimonialcard name={"Harry Alexander"} img={Testimg2}/>
        

      </Carousel>
      </div>

  );
};

export default Carouselscroll;
