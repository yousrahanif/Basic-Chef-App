import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate =useNavigate();
  const location =useLocation();
  const from = location.state?.from?.pathname;
  const {signIn}=useContext(AuthContext);
  const [showPassword, setShowPassword]=useState(false);
  
  const handleSignIn=event =>{
    event.preventDefault();
    const form =event.target;
    const email =form.email.value;
    const password =form.password.value;

    signIn(email,password)
    .then(result=>{
      const loggedUser =result.user;
      console.log(loggedUser)
      navigate(from, {replace:true})
      form.reset();
    })
    .catch(error=>{
     alert('Email is not registered. Please register first.')
    })

    
  }
  const handleCheckboxChange =()=>{
    setShowPassword(!showPassword);
  }
    return (
        <div >
        <div className="d-flex justify-content-center">
        <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type={showPassword ? 'text':'password'} placeholder="Password"  name="password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" label="Show Password"
        
        onChange={handleCheckboxChange} />
      </Form.Group>
      <Form.Text className="text-secondary">
                    New User? <Link to="/register">Register Now</Link>
                </Form.Text>
                <br />
                <br />
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <div className='mt-4'>
   
    </div>
        </div>
        
    </div>
    );
};

export default Login;