import React, { useState } from 'react'
import './Calendar.css'

const daysofweek=['Sunday','Monday','Tueday','Wednesday','Thursday','Friday','Saturday'];
const monthsofyear=['January','February','March','April','May','June','July','August','September','October','November','December'];

const daysinmonth = (date) =>{
  const daysArray=[];
  const firstday=new Date(date.getFullYear(),date.getMonth(),1);
  const lastday=new Date(date.getFullYear(),date.getMonth()+1,0);

  for(let i=0;i<firstday.getDay();i++){
    daysArray.push(null);
  }

  for(let j=1;j<=lastday.getDate();j++){
    daysArray.push(new Date(date.getFullYear(),date.getMonth(),j));
  }
return daysArray;
}
const Calendar = () => {
  const[date,setDate]=useState(new Date());
   
  const changeMonth=(e)=>{
     const newmonth=parseInt(e.target.value,10);
     setDate(new Date(date.getFullYear(),newmonth,1));
  }
  const changeYear=(e)=>{
    const newyear=parseInt(e.target.value,10);
    setDate(new Date(newyear,date.getMonth(),1));
  }

  const red =(day)=>{

  }
  const sameday=(date1,date2)=>{
    
    if ( date1 == null ) 
      return false; 

    return date1.getDate()==date2.getDate() &&date1.getMonth()==date2.getMonth()&&date1.getFullYear()==date2.getFullYear();
  }

  return (
    <div className='content'>
        <div className="header">
            <button onClick={()=>{
              setDate(new Date(date.getFullYear(),date.getMonth()-1,1))
            }}>&lt;
            </button>

            <select onChange={changeYear} value={date.getFullYear()}>
              {Array.from({length:20},(_,i)=>date.getFullYear()-5+i).map((year)=>(
                <option key={year} value={year}>{year}</option> 
              ))}
            </select>

            <select onChange={changeMonth} value={date.getMonth()}>
          {monthsofyear.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>

            <button onClick={()=>{
              setDate(new Date(date.getFullYear(),date.getMonth()+1,1))
            }}>&gt;
            </button>

        </div>
        <div className="headdays">
        {daysofweek.map((day)=>(
                <option key={day}>{day.substring(0,3)}</option>
              ))}
        </div>
        <div className="days">
          {daysinmonth(date).map((day,index)=>(
            <div className={`box ${ sameday( day, new Date()) ? 'day-high' : '' }`} key={index}>{day?day.getDate():" "}</div>
          ))}
        </div>
       
    </div>
  )
}

export default Calendar
