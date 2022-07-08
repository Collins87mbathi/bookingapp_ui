import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './Hotels.css'

const Hotels = () => {
  return (
    <div>
      <Navbar/>
      <Header type="hotels"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <div className="hotelSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input type="text"/>
          </div>
          <div className="lsItem">
            <label>Destination</label>
            <input type="text"/>
          </div>
          </div>
          <div className="hotelResult"></div>
        </div>
      </div>
    </div>
  )
}

export default Hotels