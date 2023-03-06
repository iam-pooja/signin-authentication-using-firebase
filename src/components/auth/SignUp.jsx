import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { auth } from '../../firebaseConfig.js';
import { Link,Navigate,useNavigate } from 'react-router-dom';
import '../../App.css';


const SignUp = () => {

const[email, setEmail] = useState('');
const[password, setPassword] = useState('');

const navigate = useNavigate()

const signUp = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    alert('You have successfully Signed In');
    navigate('/')
  }).catch(err => {
    console.log(err)
  })
}


// const signedIn = () => {
  

// }

  return (
    <div className='sign-in-container'>
      <form className='container' onSubmit={signUp}>
        <h1>Create an account</h1>
        <input type="email" 
        placeholder='enter your email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password atleast 6 characters'
         value={password}
         onChange={(e) => setPassword(e.target.value)} />
         <button type='submit'>Sign up</button>
         <p>Already have an account? <Link to='/' className='link'>Login</Link></p>
      </form>
    </div>
  )
}

export default SignUp;
