import React, { useContext, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
  const {createUser}=useContext(AuthContext);
 

const handleRegister =event =>{
  event.preventDefault();
  
  const form = event.target;
  

  const email= form.email.value;
  const password= form.password.value;
  const confirm =form.confirm.value;
  if(password!=confirm){
    alert('Password did not match')
    return;
  }
  else if(password==='' || email===''){
    alert('Insert Valid Email or Password')
    return
  }
  else if (password.length <6){
    alert('Password must have to at least 6 characters')
  return;
  }
  

  createUser(email,password)
  .then(result =>{
    const createdUser =result.user;
    console.log(createdUser);
    alert('Success')
    form.reset();
    
  })
  .catch(error=>console.log(error))
  
}

    return (
        <div className="d-flex justify-content-center">
        <Form onSubmit={handleRegister} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Choose Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name="confirm" />
      </Form.Group>
      <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <br />
                <br />
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    );
};

export default Register;