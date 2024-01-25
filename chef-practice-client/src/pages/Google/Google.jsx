import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Button } from 'react-bootstrap';



const auth =getAuth(app);
const provider = new GoogleAuthProvider();
const Google = () => {
    const signInWithGoogle =()=>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const user =result.user;
            console.log(user)
        }).catch(error=>{
            console.log(error)
        })
    }
   
  
    return (
        <div className='mt-4 d-flex flex-column align-items-center'>
            <div>
                WELCOME TO GOOGLE SIGN IN
            </div>
            <div className='mt-2'>
                <Button className='btn-danger' onClick={signInWithGoogle}>Google</Button>
            </div>
        </div>
    );
};

export default Google;