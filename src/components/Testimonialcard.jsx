import React from 'react'
import '../styles/Testimonial.css'
// images
import Image from '../images/profile.jpg'

// icons 
import {ImQuotesLeft} from 'react-icons/im'
import {AiFillStar} from 'react-icons/ai'

const Testimonialcard = (props) => {
  return (
    // <div className="main">

    // <div className='wrapper'>
    //     <div className="box">
    //         <i className='fas fa-quote-left quote'></i>

    //         <p className='testpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe facilis consequuntur neque, mollitia repellendus quas non? Quae, incidunt natus!</p>

    //         <div className="content">

    //             <div className="info">
    //                 <div className="name">Jack Walter</div>

    //                 <div className="stars">
    //                     <i className='fas fa-star'></i>
    //                     <i className='fas fa-star'></i>
    //                     <i className='fas fa-star'></i>
    //                     <i className='fas fa-star'></i>
    //                     <i className='fas fa-star'></i>
    //                 </div>

    //             </div>

    //             <div className='image'>
    //                 <img src={Image} alt="" />
    //             </div>

    //         </div>

    //     </div>
    // </div>

    // </div>


    <div className='text-wrapper'>

        <div className='test-box'>
          <span className="testquote"><ImQuotesLeft color=' #CEA234'/></span>  
            <p className='test-para'>“Quisque massa ipsum luctus at tempus eleifend congue lectus an bibendum porttito praesent eliter sapien venenatis nec urna vitae pulvinar an fringilla bibe cras axx scelerisque le sem quis consectetur dolor vitae lacinia.”</p>
        </div>

        <div className='testshape'></div>

<div className='profilecon'>
        <div className='test-img'>
            <img src={props.img} alt="" />
        </div>

        <div className='test-text'>
          <span className='test-star'>
          <AiFillStar color=' #CEA234'/>
          <AiFillStar color=' #CEA234'/>
          <AiFillStar color=' #CEA234'/>
          <AiFillStar color=' #CEA234'/>
          <AiFillStar color=' #CEA234'/>
          </span>
          <p className='test-name'>{props.name}</p>
        </div>

         
        </div>

    </div>
  )
}

export default Testimonialcard