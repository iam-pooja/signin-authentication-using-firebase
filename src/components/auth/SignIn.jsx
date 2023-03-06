import { OperationType, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { auth } from '../../firebaseConfig.js';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

const[email, setEmail] = useState('');
const[password, setPassword] = useState('');

const navigate = useNavigate()

const signIn = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    alert('You have successfully Logged In')
    navigate('/user')
  }).catch(err => {
    alert(err.message)
  })
}

// const login = () => {
//   ({OperationType} ?  : ) 
// }

  return (
    <div className='sign-in-container'>
      <form className='container' onSubmit={signIn}>
        <h1>Sign in</h1>
        <input type="email" 
        placeholder='enter your email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)} /> <br />
        <input type="password" placeholder='enter your password'
         value={password}
         onChange={(e) => setPassword(e.target.value)} /> <br />
         <button type='submit' >Log In</button>
         <p>Not a member? <Link to='/Signup' className='link'>Signup</Link></p>
      </form>
    </div>
  )
}

export default SignIn
