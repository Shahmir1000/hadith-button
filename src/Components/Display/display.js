import React, {useState, useEffect} from 'react';
import './display.css'
import {randomImageURL} from './Images/images'
//import components
import HadithButton from '../Button/HadithButton';
import HadithBody from './HadithBody/HadithBody';


const Display = ()=>{
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState(null);
  const [imageURL, setImageURL] = useState('');
  useEffect(()=>{
    setImageURL(randomImageURL());
    console.log(data);
  },[data])


 return(
  <div 
    id="display"
    style = {{backgroundImage: `url("${imageURL}")`}}
  >
    <div id = "color-overlay"></div>
      <HadithBody
        display = {display}
        data = {data}
      />
      <HadithButton
        setDisplay = {setDisplay}
        setData = {setData}
      />
  </div>

 );
}

export default Display;