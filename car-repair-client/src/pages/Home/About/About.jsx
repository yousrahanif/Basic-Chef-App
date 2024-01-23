
import person from '../../../assets/images/about_us/person.jpg'

import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
         <div className='lg:w-1/2 relative'>
         <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
         <img src={parts} className="w-1/2 absolute rounded-lg border-8 border-white shadow-2xl right-5 top-1/2" />
         </div>
          <div className='lg:w-1/2 space-y-5 p-4'>
            <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">Welcome to Car Repair Store, your go-to destination for top-notch automotive care. At our shop, we specialize in comprehensive car repairs, offering expert solutions for all your vehicle needs. Our skilled technicians provide efficient diagnostics and effective repairs, ensuring your vehicle runs smoothly and reliably. From engine issues to brake repairs, trust Car Repair Store for quality service and a seamless driving experience. Visit us today and let us keep your car in peak conditions"</p>
           
            <button className="btn btn-warning">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;