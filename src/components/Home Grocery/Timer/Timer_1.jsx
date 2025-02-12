import React from 'react';
import './Timer_1.css';
import './MediaQTimer_1.css';
import { useState } from 'react';
import { useEffect } from 'react';

const countDown_Target = new Date('2025-12-31T23:59:59');
const getTimeLeft = () =>{
    const totalTimeLeft = countDown_Target - new Date();
    const Days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const Hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const Min = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const Sec = Math.floor(totalTimeLeft / (1000) % 60);
    return {Days, Hours, Min, Sec}
}

const Timer1 = () => {

    const [timeLeft,setTimeLeft] = useState(()=> getTimeLeft());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeLeft(getTimeLeft());
            console.log(getTimeLeft().minutes);
        }, 1000)
        
        return (()=>{
            clearInterval(timer)
        })
    }, [])

  return (
    <div className='mainContainer p-0'>   
        <div className="timerContainer container-fluid p-0">
            <div className="timerContent d-flex flex-wrap gap-lg-1 gap-md-4 gap-sm-3 gap-1">
                {Object.entries(timeLeft).map((el)=>{
                    const label = el[0];
                    const value = el[1];
                    return(
                        <div className="timerBox px-lg-2 py-lg-1 px-1 rounded-3" key={label}>
                            <div className="value">
                                <span>{value}<span className='label ms-1'>{label}</span></span>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
export default Timer1;

