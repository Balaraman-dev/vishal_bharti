import React from 'react'
import logo from '../assets/imgs/logo.png';
const Header = () => {
  return (
    <div className='w-full z-20 space-x-4 px-16 py-3 flex justify-around items-center mx-auto  sticky top-0 bg-slate-100'>
        
      <img src={logo} className='w-1/12 rounded-full ' alt="img" />
       <div className='w-full flex justify-around bg-[#C2FFC7] py-4  rounded-full text-[#526E48] text-lg'>
            <h2 className='hover:text-white'>Home</h2>
            <h2>About Us</h2>
            <h2>Infrastructure</h2>
            <h2>Admission</h2>
            <h2>Academics</h2>
            <h2>Activities</h2>
            <h2>Contact Details</h2>
       </div>
    </div>
  )
}

export default Header
