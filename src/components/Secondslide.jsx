import React from 'react'
// silder
import Carousel from "react-elastic-carousel";
// images
import Secoimg1 from '../images/Rectangle 305.png'
import Secoimg2 from '../images/Rectangle 306.png'
import Secoimg3 from '../images/Rectangle 307.png'
import Secoimg4 from '../images/Rectangle 308.png'
import Cardsecond from './Cardsecond';

const Carouselcards = () => {
  return (
    <div>
        <Carousel itemsToScroll={2} itemsToShow={4}>
          
        <Cardsecond secimage={Secoimg1} />
        <Cardsecond  secimage={Secoimg2} />
        <Cardsecond  secimage={Secoimg3} />
        <Cardsecond  secimage={Secoimg4} />

        <Cardsecond secimage={Secoimg1} />
        <Cardsecond  secimage={Secoimg2} />
        <Cardsecond  secimage={Secoimg3} />
        <Cardsecond  secimage={Secoimg4} />

        <Cardsecond secimage={Secoimg1} />
        <Cardsecond  secimage={Secoimg2} />
        <Cardsecond  secimage={Secoimg3} />
        <Cardsecond  secimage={Secoimg4} />

       
        
        </Carousel>
    </div>
  )
}

export default Carouselcards