import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from './ChefDetails';

const Chef = () => {
    
    const chefData = useLoaderData();
    // console.log(chefData);
    const selectedChef = chefData.filter(chef=>chef.id>0);
   
    return (
        <div>
          <h2 className='text-center text-danger mt-4 mb-4'>Our Chefs</h2>
          {
            selectedChef.map(chef=><ChefDetails
            key={chefData.id}
            chefDetails={chef}
            ></ChefDetails>)
          }
           
        </div>
    );
};

export default Chef;