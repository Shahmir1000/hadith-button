import React from 'react';
import './hadithBody.css';

const HadithBody = (props)=>{
  const data = props.data;
  const display = props.display;

  let discription = "";
  let grade = "";
  let body = "";
  let arabicBody = "";
  let chapterName = "";
  let bookName = "";
  let hadithNumber = "";
  let location = "";

  if(data !== null){
    discription = data.hadith[0].chapterTitle;
    grade = data.hadith[0].grades[0].grade;
    body = data.hadith[0].body;
    arabicBody = data.hadith[1].body;
    chapterName = data.bookNumber;
    bookName = data.collection;
    hadithNumber = data.hadithNumber;
    location = `${grade} ${bookName[0].toUpperCase() + bookName.substring(1)} Hadith Number: ${hadithNumber}`;
    document.getElementById("body").innerHTML = body.slice(0,12)+" by" + body.slice(12, body.search(/[:]/g) +1) + arabicBody + body.slice(body.search(/[:]/g) +1);
  }


  return(
    <div id="hadithBody" className={display ? "show" : "hide"}> 
      <p id="location" className="textStyle">{location}</p>
      <p id="discription" className="textStyle">{`Chapter: ${chapterName} --> ${discription}`}</p>
      <p id="body"></p>
      <p id="arabicBody"></p>
      
    </div>
  )
}

export default HadithBody;