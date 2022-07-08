import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import './Home.css'; 
import Featured from '../../components/Featured/Featured';
import PropertyList from '../../components/PropertyList/PropertyList';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
import MailList from '../../components/MailList.jsx/MailList';
import { Footer } from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
   <Navbar />
   <Header />
  <div className="homeContainer">
    <Featured/>
  <h1 className="homeTitle">Browse by property type</h1>
  <PropertyList/>
  <h1 className="homeTitle">Homes guests love</h1>
  <FeaturedProperties/>
  <MailList/>
  <Footer/>
    </div> 
    </div>
  )
}

export default Home