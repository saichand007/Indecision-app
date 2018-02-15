import React , {Component} from 'react';

class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleCounter=this.handleCounter.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={
            counter: 1
        }
    }

    componentDidMount(prevProps,prevState)
    {
        
        const datav=localStorage.getItem('count');
        const datavalue=parseInt(datav,10);
       
        if(datavalue)
        {
            this.setState(()=>({counter: datavalue}));
        }
      

    }
     componentDidUpdate(prevProps,prevState)
     {
        
         if(prevState.counter !== this.state.counter)
         {
            localStorage.setItem('count',this.state.counter);
           }     
     }

     handleCounter()
     {
         this.setState((prevState)=>({counter:prevState.counter+1}))
     }
     handleReset()
     {
         this.setState((prevState)=>({counter:1}))
     }
    render()
    {
        return(
            <div>
            <h1>Counter:{this.state.counter}</h1>
            <button type="button" onClick={this.handleCounter}>count</button>
            <button type="button" onClick={this.handleReset}>Reset</button>
        </div>
        );
        
    }
   
}

export default Counter; 