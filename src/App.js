import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useState} from 'react';
const App = () => {

  const [email, setEmail] = useState("")
  const [message, setMessage] =useState("")



  function handleChange(e){
    setEmail(e.target.value)
  }

const checkValidation = (e) =>{
  e.preventDefault();
  const Express =/^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
  if(Express.test(email)){
      setMessage("Email is Valid");
  }else if(email === ""){
    setMessage("Please Enter Email")
  }else if(!Express.test(email)){
    setMessage("Email is not Valid")
  }else{
    setMessage("")
  }
}

  return (
    <>
    <div className='wrapper w-100 d-flex justify-content-center align0items-center bg-dark'>
      <div className='card bg-light w-50 p-5'>
        <h2> Email Validation</h2>
        <form onSubmit={checkValidation}>
          <label htmlFor='email'>Email</label>
          <input type='email' value={email}  className='form-control' onChange={handleChange}></input>
          <p>{message}</p>
          <button className='btn btn-success mt-2'>check</button>
         
        </form>
      </div>
    </div>
    </>
  )
}

export default App
