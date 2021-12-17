import React from "react";

class MyComp extends React.Component {
    
    state={
        someNumber:0,
    }

    render=()=>{
        return (
            <div>
                <button onClick={ ()=>{
                    this.setState({someNumber:this.state.someNumber+1})
                } 

                }>increment</button>
                <h1>{this.state.someNumber}</h1>
                <button onClick={ ()=>{
                    this.setState({someNumber:this.state.someNumber-1})
                } 

                }>decrement</button>
                
            </div>
        );
    };
};

export default MyComp;