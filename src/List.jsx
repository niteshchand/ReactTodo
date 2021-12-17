let List = (props)=> {
    return ( 
    <ul>
        {props.task.map( (ele,index)=> 
        {
            return (<li key={index}>{ele} {" "}
            <button onClick={ ()=> {
                props.deleteTask(ele)
            } } >Delete</button>
                </li>
            );
        })}
    </ul>
     );
};

export default List;
