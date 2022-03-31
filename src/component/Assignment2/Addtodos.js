import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import validator from 'validator'

export default function Addtodo(prop) {
  const {checktodos}=prop;

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  

  const submit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname) {
      alert("First Name $ Last Name not defined");
    }
    else {
      // prop.addTodo(firstname, lastname);
    checktodos(firstname,lastname);
    // console.log('checktodos',firstname,lastname);
      setfirstname("");
      setlastname("");
    }
  }
  
  

  return (
    <div className=''>
      <div className="row">
      <div className=' App-header d-flex flex-row justify-content-evenly my-6'>
        <Link to="/">
          <i className='fa fa-home h-2 '></i>
          </Link>
        <h1  >Assignment 2 </h1>
        <p></p>
        </div>
        <div className="col-10 mx-auto col-lg-7 col-sm-8  my-5">
      <form action="" onSubmit={submit} className='container' >
        <div className="mb-3 row">
          <label htmlFor="tittle" className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-5">
            <input type="text" value={firstname} onChange={(e) => { setfirstname(validator.trim(e.target.value)) }} className="form-control border-primary rounded " id="firstname" />

          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="lastname" className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-5">
            <input type="text" value={lastname} onChange={(e) => { setlastname(validator.trim(e.target.value)) }} className="form-control border-primary rounded" id="lastname" />
          </div>
        </div  >
        <div className='ml-0'> 
        <button className='btn-sm btn-success ' disabled={!firstname || !lastname || !firstname.trim()  || !lastname.trim() } >Submit</button>
        </div>
      </form>
      </div>
    </div>
    </div>
    
  )
}
