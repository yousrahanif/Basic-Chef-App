import img1 from '../../../assets/images/banner/4.jpg'
import img2 from '../../../assets/images/banner/6.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/1.jpg'



const Banner = () => {
    
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center  h-full  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <div className='text-white space-y-7 pl-12 w-1/2'>
        <h2 className='text-6xl font-bold'>Affordable Price For Full Car Repair</h2>
        <p>Restore your vehicle to peak performance with our Full Car Repair service. Our skilled technicians address all aspects, ensuring a thorough and effective repair for a reliable and smooth driving experience</p>
        <div>
        {/* <button className="btn btn-primary mr-5">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button> */}
        </div>
     </div>
    </div>

    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={img2} className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center  h-full  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <div className='text-white space-y-7 pl-12 w-1/2'>
        <h2 className='text-6xl font-bold'>Affordable Price For Oil Change</h2>
        <p>Ensure optimal engine performance with our quick and efficient oil change service. Regular oil changes extend engine life and enhance fuel efficiency.</p>
        <div>
        {/* <button className="btn btn-primary mr-5">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button> */}
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={img3} className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center  h-full  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <div className='text-white space-y-7 pl-12 w-1/2'>
        <h2 className='text-6xl font-bold'>Affordable Price For Cabin Filter Replacement</h2>
        <p>Create a clean and comfortable driving environment. Replace your cabin filter to ensure fresh, purified air inside your vehicle, promoting a healthier driving experience.</p>
        <div>
        {/* <button className="btn btn-primary mr-5">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button> */}
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={img4} className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center  h-full  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <div className='text-white space-y-7 pl-12 w-1/2'>
        <h2 className='text-6xl font-bold'>Affordable Price For Air Filter Replacement
</h2>
        <p>Breathe easy with a new air filter. Improve engine efficiency and air quality within your vehicle for a smoother driving experience.

</p>
        <div>
        {/* <button className="btn btn-primary mr-5">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button> */}
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;