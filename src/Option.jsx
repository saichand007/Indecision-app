import React from 'react';

import './App.css';


const Option =(props)=>{

  return (
      
    <div className="App">
     <div>
      
     <p> Option:{props.text}
     <button onClick={(e)=>{
       props.deleteOption(props.text)
     }}>remove</button>
     </p>
     </div>
    </div>
  );
}

export default Option;
