import React from 'react';
import axios from 'axios';
import './hadithButton.css'


const HadithButton = ({setData, setDisplay})=>{
  const getRandomInt = (max)=>{
    return Math.floor(Math.random() * max) + 1;
  }
  const api = axios.create({
    headers:{
      "x-api-key": "SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk"
    }
  });
  
  const getHadith = async()=>{
    try{
      const collectionName = "bukhari";
      const hadithNumber = getRandomInt(7291);
      const result = await api.get(`/v1/collections/${collectionName}/hadiths/${hadithNumber}`);
      console.log(result.data);
      setData(result.data);
    }
    catch(err){
      console.log(err.message);
    }
  }

  return (
    <div id="hadithButton">
      <button
        id="button"
        onClick= {()=> {
          setDisplay(true);
          getHadith();
        }
      }>
        New Hadith
      </button>
    </div>
  )
}

export default HadithButton;