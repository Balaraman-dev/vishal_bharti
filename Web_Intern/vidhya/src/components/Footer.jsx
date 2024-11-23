import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#C2FFC7] to-white flex text-[#526E48] justify-center items-center p-16'>
        <div className='w-7/12  text-xl pr-5 space-y-3'>
          <h2 className='font-bold'>Goals :</h2>
           <ul className='grid grid-cols-4'>
                <li>Excellence</li>
                <li>Inspiration</li>
                <li>Foundation</li>
                <li>Leadership</li>
                <li>Dreams</li>
                <li>Success</li>
                <li>Potential</li>
                <li>Knowledge</li>
                <li>Growth</li>
                <li>Innovation</li>
                <li>Opportunities</li>
                <li>Future</li>
                <li>Guidance</li>
                <li>Learning</li>
                <li>Education</li>
                <li>Aspiration</li>
           </ul> 
        </div>
           <div className='border-2 border-[#62825D] bg-gradient-to-b text-black  from-[#C2FFC7] to-white  shadow-md p-10 rounded-xl font-mono text-lg'>
             <h2>Address:</h2>
             <h2>Vishal Bharti Senior Secondary School</h2>
             <h2>Parwana Road, Pundrik Vihar,<br/>  Pitam Pura, New Delhi,<br/>  Delhi, India <br/> ph.9354937851/54</h2>
           </div>
    </div>
  )
}

export default Footer
