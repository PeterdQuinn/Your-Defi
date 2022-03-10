import React from 'react'
import "./Signup.css"
import Crypto from '../assests/Cryto.jpg'


function Signup() {
  return (
    <div className='signup'>
         <div className='container'>
             <div className='left'>
                  <img src={Crypto} alt ='' />       
            </div>
               <div className='right'>
                   <h2>Earn passive income with your assests</h2>
                    <p>Earn high returns on your assests up to 12 % or more</p> 
                    <div className='input-container'>
                        <input type='email' placeholder='Enter email here'/> 
                        <button className='btn'>Learn more</button>   
                    </div>
                </div>         
        </div>
    </div>
  )
}

export default Signup