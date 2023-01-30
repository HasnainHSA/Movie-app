import React from 'react'
//styling
import '../styles/Showcard.css'

const Showscard = (props) => {
  return (
    <div className='show-card-main'>
        <img src={props.showimg} alt="" className='show-img-op'/>

 {props.showbtn}

        <div className='show-starname'>
        Star Name
        </div>

        <div className="show-details">
            <p className='showpara'>TV Star</p>
            <p className='showprice'>1,000PKR</p>
        </div>

    </div>
  )
}

export default Showscard