import React, { useContext } from 'react';
import { Button, Col, Container, Form, Image, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';



const Header = () => {
  const {user, logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then()
    .catch(error=>{
      console.log(error)
    })
  }
    return (
     <div >
      <h2 className='text-center mt-2'>Welcome to Yousra's Food Blogs</h2>
      {/* <Container className='d-flex'>
      <Row>
        <Col sm={4}><Link to='/' className='text-decoration-none'>Home</Link>
        </Col>
        <Col sm={4}><Link className='text-decoration-none' to='/recipes'>Recipes</Link></Col>
        <Col><Link className='text-decoration-none' to='/chef'>Chef</Link></Col>
      </Row>
      <Row>
        <Col sm={4}> <Link className='text-decoration-none' to='/login'>Login</Link>
        </Col>
        <Col sm={4}><Link className='text-decoration-none' to='/register'>Register</Link></Col>
        <Col><Link className='text-decoration-none' to='/search'>Search</Link></Col>
      </Row>
    </Container> */}
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"> <Link className='text-decoration-none text-danger fw-bold' to='/'>Yousra's Food Blog</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">
            <Link to='/' className='text-decoration-none text-black'> Home</Link>
            </Nav.Link> */}
            <Nav.Link href="#action2">

            <Link to='/recipes' className='text-decoration-none text-black'> Recipes</Link>


            </Nav.Link>
            <Nav.Link href="#action3">
            <Link to='/chef' className='text-decoration-none text-black'> Chefs</Link>
            </Nav.Link>
           
          </Nav>
   
          
          <Nav style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#action1">
                {user ? (
                  <Link className='text-decoration-none text-black' onClick={handleLogOut} >Logout</Link>
                ) : (
                  <>
                    <Link to='/login' className='text-decoration-none text-black'> Login</Link>
                    <Link to='/google' className='text-decoration-none text-black'> Google</Link>
                    <Link to='/register' className='text-decoration-none text-black'> Register</Link>
                  </>
                )}
              </Nav.Link>
            </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
           
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
     

     </div>



    );
};

export default Header;