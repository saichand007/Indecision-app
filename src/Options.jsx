import React from 'react';
import Option from './Option';

import './App.css';

const Options=(props)=>{
  return (
      
    <div className="App">
    <div><br/>
  
    <button type='button' onClick={props.del}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
      <h2>Options</h2>
      {props.options.map((a)=><Option key={a}  text={a}  deleteOption={props.deleteOption}/>)}
      </div>
    </div>
  );

}
export default Options;
