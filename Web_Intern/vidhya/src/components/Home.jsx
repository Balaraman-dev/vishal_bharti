import React from 'react';
import h1 from '../assets/homepic/h1.png';
import h3 from '../assets/homepic/h3.png';
import h4 from '../assets/homepic/h4.png';
import h5 from '../assets/homepic/h5.png';
import h6 from '../assets/homepic/h6.png';
import h8 from '../assets/homepic/h8.png';
import h9 from '../assets/homepic/h9.png';
import h10 from '../assets/homepic/h10.png';
import h11 from '../assets/homepic/h11.png';

const Home = () => {
  const images = [h1, h3, h4, h5, h6, h8, h9, h10, h11];

  return (
    <div className='p-5 w-full gap-6 bg-gradient-to-b from-[#C2FFC7] to-white grid grid-cols-3 py-10 justify-center items-center' >
      {images.map((img, index) => (
        <img className='w-full shadow-md border-2 border-[#62825D] p-6  rounded-3xl flex justify-center items-center hover:scale-95 duration-200' style={{minHeight:"400px", borderRadius:"60px"}}  key={index} src={img} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default Home;
