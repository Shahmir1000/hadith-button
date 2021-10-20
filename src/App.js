import React, {useState, useEffect} from 'react';
import './App.css';

//import components  
import Display from './Components/Display/display'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Display/>
      </header>
    </div>
  );
}

export default App;
