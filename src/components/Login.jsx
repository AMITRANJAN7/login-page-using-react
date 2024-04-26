import React,{useState} from 'react'
import './Login.css';

const Login = () => {
    const [action, setAction]= useState('Sign Up')
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==='Login'?<div></div>:
        <div className="input">
            <img />
            <input type='text' placeholder='Name' />
        </div>}
        <div className="input">
            <img />
            <input type='email' placeholder='Email' />
        </div>
        <div className="input">
            <img />
            <input type='password' placeholder='Password'/>
        </div>
      </div>
      {action==='Sign Up'?<div></div>:
      <div className="forgot-password">Forgot Password ? <span>Click Here !</span></div>}
      <div className="submit-container">
        <div className={action==='Login'?'Submit gray':'Submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
        <div className={action==='Sign Up'?'Submit gray':'Submit'} onClick={()=>{setAction('Login')}}>Login</div>
      </div>
    </div>
  )
}

export default Login
