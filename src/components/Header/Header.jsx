import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import {DateRange} from 'react-date-range';
import {useNavigate} from 'react-router-dom'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css fi
import './Header.css';
import {format} from "date-fns";

const Header = ({type}) => {

const [date, setDate] = useState([
 {
  startDate: new Date(),
  endDate: new Date(),
  key:'selection'

 }
]);

 const [openDate, setOpenDate] = useState(false);
const [openOptions, setOpenOptions] = useState(false);
const [destination , setDestination] = useState("");
const [option, setOption] = useState({
   adult :1,
   children:0,
   room:1,
})

const handleOption = (name, operation) => {
  setOption((prev) => {
    return {
      ...prev,
      [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
    };
  });
}
const navigate = useNavigate();

const handleSearch = () => {
navigate("/hotels", { state: {destination,date,option}});
}


  return (
    <div className= 'header'>
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
    <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car Rentals</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>
        </div>
    </div>

   { type !== "hotels" && <> <h2 className="headerTitle">The goal is to make our customer satisfied</h2>
    <p className="headerDescription">book with our site and get 10% discount</p>
    <button className="headerBtn">Book</button>
    <div className="headerSearch">
    <div className="headerSearchItem">
    <FontAwesomeIcon icon={faBed} className="headerIcon" />
        <input type="text" placeholder="search for destination" className='headerSearchInput'
        onChange={(e)=> setDestination(e.target.value)}
        />
    </div>
    <div className="headerSearchItem">
    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
       <span className="headerSearchText" onClick={()=>setOpenDate(!openDate)} >{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].startDate,"MM/dd/yyyy")} `}</span>
      
      {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date" 
  minDate={new Date()}
/> }
    </div>
    <div className="headerSearchItem">
    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
      <span onClick={()=>{setOpenOptions(!openOptions)}} className='headerSearchText'>{`${option.adult} adult . ${option.children} children . ${option.room} room`}</span>
      
{openOptions && <div className="options">
        <div className="optionItem">
        <span className="optionText">Adult</span>
        <div className="optionCounter">
        <button className="optionCounterButton" disabled={option.adult <= 1} onClick={() => handleOption("adult", "d")} >-</button>
        <span className="optionCounterNumber">{option.adult}</span>
        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")} >+</button>
        </div>
        </div>
        <div className="optionItem">
        <span className="optionText">Children</span>
        <div className="optionCounter">
        <button className="optionCounterButton" disabled={option.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
        <span className="optionCounterNumber">{option.children}</span>
        <button className="optionCounterButton" onClick={() => handleOption("children", "i")} >+</button>
        </div>
        </div>
        <div className="optionItem">
        <span className="optionText">Rooms</span>
        <div className="optionCounter">
        <button className="optionCounterButton"  disabled={option.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
        <span className="optionCounterNumber">{option.room}</span>
        <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
        </div>
        </div>

      </div>}
    </div>
    <div className="headerSearchItem">
    <button className="headerBtn" onClick={handleSearch}>
       search   
    </button>
    </div>
    </div> </>}
    </div>
    </div>
   
  )
}

export default Header