import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ChefCard = () => {
    const chefCard = useLoaderData();
   
   
    return (
        <Container className="d-flex justify-content-center align-items-center mt-4" >
        <div className="">
            {chefCard.map(chef => (
                <Card key={chef.id} style={{ width: '18rem', margin: '10px' }}>
                    <Card.Body>
                        <Card.Title>{chef.name}
                        {/* <Button variant="secondary"> View Recipe</Button> */}
                        </Card.Title>
                       
                        
                    </Card.Body>
                </Card>
            ))}
        </div>
    </Container>
    );
};

export default ChefCard;