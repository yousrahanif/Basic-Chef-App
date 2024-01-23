import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices]=useState([]);
    const [asc, setAsc]=useState(true);

    const searchRef = useRef(null)
    const [search, setSearch]=useState('')
    useEffect(()=>{
        // fetch('https://car-doctor-server-orpin-chi.vercel.app/services')

        fetch(`http://localhost:5000/services?search=${search}&sort=${asc ?'asc': 'desc'}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[asc,search])
    const handleSearch =() =>{
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value)
    }
    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-orange-600'>Our Services</h3>
            
        
            <p className='mt-4'>At our Car Repair Store, we pride ourselves on delivering exceptional automotive services tailored to meet your needs. From routine maintenance like oil changes and filter replacements to comprehensive vehicle health checks and full car repairs, our skilled technicians ensure your vehicle performs at its best. Trust us for reliable and efficient service, providing you with peace of mind on every journey. Experience the difference at Car Repair Store – where excellence meets automotive care.</p>
            <br />
            <div className='form-control'>
                <div className='input-group'>
                <input type="text" 
                    ref={searchRef}
                    placeholder='Search...'
                    className='input input-bordered'/>
                    <button onClick={handleSearch} className='btn btn-square'>Search</button>

                </div>

            </div>
            
            <button className='mt-2 btn btn-primary'
            onClick={()=>setAsc(!asc)}
            >{asc ? 'Price: High to Low': 'Price: Low to High'}</button>
            
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;