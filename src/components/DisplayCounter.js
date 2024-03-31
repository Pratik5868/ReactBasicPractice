import React from "react";

//Display counter application
class DisplayCounter extends React.Component{
    
    constructor(){
         super();
         this.state={
             counter:0
         }
    }

    IncreaseCount=()=>{
        this.setState(prevstate=>({
            counter:prevstate.counter+1
        }))
    }

    DecreaseCount=()=>{
          this.setState(prevstate=>({
            counter:prevstate.counter-1
          }))
    }

    render(){
       return(
        <div>
            <div>{this.state.counter}</div>
            <button onClick={this.IncreaseCount}>Increase Counter</button>
            
            <button onClick={this.DecreaseCount}>Decrease Count</button>
            
        </div>
       )  
    }
}

export default DisplayCounter