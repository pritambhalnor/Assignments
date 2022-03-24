import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Content.css'

export default function Content() {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [total, settotal] = useState("");


  const add = () => {
    // console.log( parseInt(num1) + parseInt(num2) );
    settotal(parseInt(num1) + parseInt(num2));
  }

  const substract = () => {
    // console.log( parseInt(num1) + parseInt(num2) );
    settotal(parseInt(num1) - parseInt(num2));
  }

  const multiply = () => {
    // console.log( parseInt(num1) + parseInt(num2) );
    settotal(parseInt(num1) * parseInt(num2));
  }

  const division = () => {
    // console.log( parseInt(num1) + parseInt(num2) );
    settotal(parseInt(num1) / parseInt(num2));
  }

  return (
    <div className="Container">
      <div className="row">
        <div className='App-header d-flex flex-row justify-content-evenly'>
          <Link to="/">
            <i className='fa fa-home h-2 '></i>
          </Link>
          <h1  >Assignment 1 </h1>
          <p></p>
        </div>
        <div className="col-10 mx-auto col-lg-4 col-sm-8  my-5">
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Number 1: </label>
            <input type="number" value={num1} onChange={(e) => { setnum1(e.target.value) }} className="form-control inputStyle b" id="num1" />
          </div>
          <div className="row">
            <label className="col-sm-5 col-form-label">Number 2: </label>
            <input type="number" value={num2} onChange={(e) => { setnum2(e.target.value) }} className="form-control inputStyle b" id="num2" />
          </div>

          <div className='my-5'>
            <button className='btn btn-outline-success me-2 ' onClick={() => { add() }} disabled={!num1 || !num2}>Add </button>

            <button className='btn btn-outline-success me-2 ' onClick={() => { substract() } } disabled={!num1 || !num2} >Substract </button>

            <button className='btn btn-outline-success me-2 ' onClick={() => { multiply() }} disabled={!num1 || !num2}>Multiply </button>

            <button className='btn btn-outline-success me-2 ' onClick={() => { division() }} disabled={!num1 || !num2}>Division </button>

          </div>
          <div>
            <input type="number" readOnly={true} className="outStyle a" defaultValue={total} />
          </div>
        </div>
      </div>
    </div>
  )
}
