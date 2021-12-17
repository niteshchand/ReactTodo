let Input =(props)=> {
    return (
        <input className="input-box" type="text" onChange={
            (e)=> {
            //   this.setState({currentInput:e.currentTarget.value})
            props.handleCurrentInput(e.currentTarget.value);
            } }
  
          onKeyDown={ 
            (e)=> {
                if(e.key==="Enter"){ 
                    props.handleTask(e);
                }
                
            //   if(e.key=="Enter"){
            //     this.setState(
            //       {
            //         task:[...this.state.task,this.state.currentInput],
            //         currentInput:""
            //       }
            //     )
            //   }
            // }
          }
        }
          value={props.currentInput} />
    );
}
export default Input;