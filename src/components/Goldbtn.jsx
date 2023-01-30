import React from 'react'
import '../styles/Goldbtn.css'

const Goldbtn = (props) => {
  return (
    <button className="goldbtn">{props.value}</button>
  )
}

export default Goldbtn