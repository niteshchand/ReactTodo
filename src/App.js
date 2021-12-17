import React from "react"
import "./App.css"
import List from "./List"
import Input from "./Input"
class App extends React.Component {

  state={
    task:['Make a coffe','using Mobile',"text him"],
    currentInput:""
  }
deleteTask = (singleTask)=> {
  let currentTaskArr= this.state.task;
  let filltredArr=currentTaskArr.filter( (element)=> {
    return element!==singleTask;
  } );
  this.setState({task:filltredArr})
}
handleCurrentInput=(e)=>{
  return (this.setState({currentInput:e}));
}
handleTask=(e)=>{
  if(e.key==="Enter"){ 
  }
  this.setState(
    {
      task:[...this.state.task,this.state.currentInput],
      currentInput:""
    }
  );
}
  render =()=> {
    return (
      <div >
        <Input task={this.state.task} handleCurrentInput={this.handleCurrentInput} handleTask={this.handleTask} currentInput={this.state.currentInput} />
        {/* <input className="input-box" type="text" onChange={
          (e)=> {
            this.setState({currentInput:e.currentTarget.value})
          }
        }

        onKeyDown={ 
          (e)=> {
            if(e.key=="Enter"){
              this.setState(
                {
                  task:[...this.state.task,this.state.currentInput],
                  currentInput:""
                }
              )
            }
          }
        }

        value={this.state.currentInput} /> */}
        
        <List task={this.state.task}  deleteTask={this.deleteTask} />
        {/* <ul>
          
          {this.state.task.map((ele)=>{
            return <li>{ele}<button onClick={ ()=> {
              let currentTaskArr= this.state.task;
              let filltredArr=currentTaskArr.filter( (element)=> {
                return element!=ele;
              } );
              this.setState({task:filltredArr})
            } } >Delete</button></li>
          })}
        </ul> */}
      </div>
    );
  };
} 

export default App;
