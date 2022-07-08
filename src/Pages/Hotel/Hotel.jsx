import React from 'react'
import './Hotel.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';


const Hotel = () => {
  return (
    <div>
    <Navbar/>
    <Header type="hotels"/>
    </div>
  )
}

export default Hotel