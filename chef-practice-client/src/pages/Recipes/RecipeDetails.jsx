import React from 'react';
import RecipeCard from './RecipeCard';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

const RecipeDetails = ({recipeMap}) => {
  const {id,name, description, chefName,minutesToCook,ingredients,img,recipe}=recipeMap;
 
    return (
      <Row xs={1} md={2} className="g-4 mb-4 justify-content-center">
      
        <Col >
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body className="text-center" >
              <Card.Title>{name}</Card.Title>
              <Card.Text>
               {description}
              </Card.Text>
              <Link to={`/recipes/${id}`}><Button variant="secondary">View Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
 
    </Row>
    );
};

export default RecipeDetails;