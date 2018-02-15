import React from 'react';

import './App.css';


const Header= (props)=>{
  return (
      
    <div className="App">
      <h1>Header {props.name}</h1>
    </div>
  );

}

Header.defaultProps={
  name:'component'
}

export default Header;
