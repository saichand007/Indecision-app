
import './App.css';
import React from 'react';


 const Action=(props)=>{
  return (
      
    <div className="App">
    <button type='button' onClick={props.handlePickOptions} 
    disabled={!props.hasOptions}>Click me for Option</button>
    </div>
  );
}

export default Action;