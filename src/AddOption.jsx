import React, { Component } from 'react';


import './App.css';

class AddOption extends Component {

    constructor(props)
    {
        super(props)
        
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error: undefined
        };
      
    }

  ;
    handleAddOption(e)
    {
        
       e.preventDefault();
     const newoption=e.target.elements.demo.value.trim();
    
     const error = this.props.handleAddOption(newoption);
     if(!error)
     {
      e.target.elements.demo.value='';
     }
     
     this.setState(() => {
        return { error:error };
      });
 
    }


  render() {
    
    return (
      
      <div className="App">
       <h3>{this.state.error}</h3>
       <form onSubmit={this.handleAddOption}>
           <input  name='demo' type='text' placeholder='Enter'/>
           <button type='submit'>{this.props.addoptions}</button>
       </form>

      </div>
    );
  }
}

export default AddOption;
