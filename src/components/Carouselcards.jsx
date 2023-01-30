import React from 'react'
// silder
import Carousel from "react-elastic-carousel";
// component
import Showscard from './Showscard';
// images
import Showimg1 from '../images/Rectangle 305.png'
import Showimg2 from '../images/Rectangle 306.png'
import Showimg3 from '../images/Rectangle 307.png'
import Showimg4 from '../images/Rectangle 308.png'
import Bookbtn from './Bookbtn';
const Carouselcards = () => {
  return (
    <div>
        <Carousel itemsToScroll={2} itemsToShow={4}>
        <Showscard showimg={Showimg1} showbtn={<Bookbtn/>}/>
        <Showscard  showimg={Showimg2} />
        <Showscard  showimg={Showimg3} />
        <Showscard  showimg={Showimg4} />

        <Showscard showimg={Showimg1} />
        <Showscard  showimg={Showimg2} />
        <Showscard  showimg={Showimg3} />
        <Showscard  showimg={Showimg4} />

        <Showscard showimg={Showimg1}/>
        <Showscard  showimg={Showimg2} />
        <Showscard  showimg={Showimg3} />
        <Showscard  showimg={Showimg4} />
        
        </Carousel>
    </div>
  )
}

export default Carouselcards