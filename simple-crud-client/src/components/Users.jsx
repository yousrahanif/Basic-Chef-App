import  { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Users.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

const Users = () => {
    const loadedUsers =useLoaderData();
    const [users, setUsers]=useState(loadedUsers);
     const handleDelete = _id=>{
        console.log('Delete', _id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert('Deleted Successfully');
                const remaining =users.filter(user=> user._id!==_id);
                setUsers(remaining);

            }
        })

}    
return (
        <div>
            <h2>Number of Users: {users.length}</h2>
           <div>
           {
                users.map(user => <p 
                key={user._id}>
                   <div className='bordered-element'>
                   Name: {user.name} 
                    <br />
                    Email: {user.email} 
                    <br />
                    Id:  {user._id}
<br />
                    <Link to={`/update/${user._id}`}>
                    <button><FontAwesomeIcon icon={faPencil} /></button>
                    </Link>
                    <button
                    onClick={()=>handleDelete(user._id)}
                    ><FontAwesomeIcon icon={faTrash} /></button>
                   </div>
                </p>)
            }
            
           </div>
        </div>
    );
};

export default Users;