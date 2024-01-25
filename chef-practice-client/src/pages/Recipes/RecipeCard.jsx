import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const RecipeCard = () => {
    const details =useLoaderData();
    console.log(details);
    return (
    
            <Card className="text-center">
             <Card.Img 
                variant="top" 
                src={details.img} 
                style={{ width: '40%', height: '50%', margin: 'auto' }} 
                className="mx-auto mt-4"
            />
     
      <Card.Body>
        <Card.Title>
            <span className='fw-bold text-danger'>{details.name}</span>
             </Card.Title>
        <Card.Text>
         <span className='fw-bold'>Ingredients</span>: 
         {details.recipe}
        </Card.Text>
        <Card.Text>
        <span className='fw-bold'>Recipe</span>: {details.ingredients}
        </Card.Text>
        
      </Card.Body>
      <Card.Text>
      <span className='fw-bold'>Chef Name: {details.chefName}</span>
        </Card.Text>
    </Card>
       
    );
};

export default RecipeCard;