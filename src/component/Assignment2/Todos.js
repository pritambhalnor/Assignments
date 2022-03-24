import React  from 'react'
import Todo from './Todo';
import { useNavigate } from "react-router-dom";

export default function Todos(props) {
  const navigate = useNavigate();

  const clear=()=>{
    window.localStorage.clear();
    // window.location = '/assignment2';
    navigate('/assignment2');
  }
  
  return (
    <div className="container" >
      <button className='btn-sm btn-danger' onClick={()=>{clear()}}>Clear All</button> <br />
      
     {props.todos.length===0?  "No First & Last Names to display":
      props.todos.map((todo) => {
        return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })}
    </div>
  )
}
