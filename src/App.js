import React, { Component } from 'react';
import Header from './Header';
import Options from './Options';
import AddOption from './AddOption';
import Action from './Action';
import './App.css';


class App extends Component {

  constructor(props)
  {
    super(props);
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    this.handlePickOptions=this.handlePickOptions.bind(this);
    this.handleAddOption=this.handleAddOption.bind(this);
    this.handleDeleteOption=this.handleDeleteOption.bind(this);
    this.state=
    {
      option:[]
    }
    
  }

 componentDidMount(prevState,prevProps) // fetching data from local storage and updating the state of component
 {
   try{ 
    const data=localStorage.getItem('option');
    const datavalue=JSON.parse(data);
 
    if(datavalue)
    {
     this.setState(()=>({option:datavalue}))
    }

   }
   
   catch(e)
   {
  /// do nothing 
   }
  
   
 }
   componentDidUpdate(prevProps,prevState) //saving data to localstorage
   {
     if(prevState.option.length !== this.state.option.length)
     {
      const json=JSON.stringify(this.state.option);
      localStorage.setItem('option',json);
     }
   }

 
  handlePickOptions()
  {
    const rand = this.state.option[Math.floor(Math.random() * this.state.option.length)];
    alert(rand);
  }

  handleDeleteOptions()
  {
   this.setState(()=> ({ option:[]}) )
  }

  handleDeleteOption(newopt)
  {

 this.setState((prevState)=>
   ( {option: prevState.option.filter((elements)=> elements !== newopt)  }))
 
  }

 

  handleAddOption(newoption)
  {
    if(!newoption)
    {
      return 'Enter valid value to add item';
    }

    else if(this.state.option.indexOf(newoption)>-1)
    {
      return 'This option already exists';
    }
   
      this.setState((prevState)=>
        ({ option: prevState.option.concat(newoption)})
      );
  }

  render()
   {
    const addoptions="AddOptions";

    return (
     
      <div className="App">
        <p>Basic React App</p>
        <Header />

        <Action  hasOptions={this.state.option.length > 0}
                 handlePickOptions={this.handlePickOptions}/>

        <Options  options={this.state.option}
                  del={this.handleDeleteOptions}
                  deleteOption={this.handleDeleteOption}/>

        <AddOption addoptions={addoptions}
             handleAddOption={this.handleAddOption} />
      </div>
             );
    }
}  

export default App;
