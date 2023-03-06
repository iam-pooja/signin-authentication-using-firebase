import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import '../App.css'

const AuthDetails = () => {

const[authUser, setAuthUser] = useState(null);

useEffect(() => {
   const listens = onAuthStateChanged(auth, (user) => {
    if(user){
        setAuthUser(user);
    }else{
        setAuthUser(authUser);
    }
   })

   return () => {
    listens();
   }
}, [])

const navigate = useNavigate()

const userSignOut = () => {
    signOut(auth).then(() => {
        alert('sign out successfull');
        navigate('/')
    }).catch(err => {
        console.log(err);
    })
}

  return (
    <div className='details'>
      {authUser && <><p>{`Signed in as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></>}
    </div>
  )
}

export default AuthDetails
