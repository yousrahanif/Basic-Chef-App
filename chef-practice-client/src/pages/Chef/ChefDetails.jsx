import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ChefDetails = ({chefDetails}) => {
    const {id}=useParams();
    const {img,name,recipeNumber,experience,likes}=chefDetails;
 
    return (

      <Row xs={1} md={2} className="g-4 mb-4 justify-content-center">
     
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                Years of Experience :{experience}
              </Card.Text>
              <Card.Text>
                Award Winning Number of Recipes :{recipeNumber}
              </Card.Text>
              <Card.Text>
                Total Likes :{likes}
              </Card.Text>
              <Link to={`/chef/${chefDetails.id}`} ><Button variant="secondary">Award Winning Recipes</Button></Link>
            
            </Card.Body>
          </Card>
        </Col>
   
    </Row>




    //     <Row xs={1} md={2} className="g-4 mb-4 justify-content-center">
      
    //     <Col >
    //       <Card>
          
    //         <Card.Body className="text-center" >
    //           <Card.Title>{chefDetails.name}</Card.Title>
    //           <Link to={`/chef/${chefDetails.id}`} ><Button variant="secondary">View Recipes</Button></Link>
            
              
    //         </Card.Body>
    //       </Card>
    //     </Col>
 
    // </Row>
    );
};

export default ChefDetails;