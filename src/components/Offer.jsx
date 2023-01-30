import React from 'react'
// image
import Offimg from '../images/pngegg 1.png'
// style
import '../styles/Offer.css'

const Offer = () => {
  return (
    <div className='offer-main'>
        
        <div className='offer-txt'>
            <h3 className='offerh3'>Lorem Ipsum dri</h3>
            <p className='offerpara'>Quisque massa ipsum, luctus at tempus eleifende quis lectus morbi bibendum nisl id porttitor ultrices vel consectetur.</p>
            <button className='offerbtn'>Show More Results</button>
        </div>

        <div className='offerimg'>
            <img src={Offimg} alt="" className='off-img'/>
        </div>
    </div>
  )
}

export default Offer