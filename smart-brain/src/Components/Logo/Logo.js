import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png';
import './Logo.css';
const Logo =()=>{
	return(
		<div className='ma4 nt0'>
		  <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> 
                    <img alt='logo'src={brain}/> 
                <p>SMART BRAIN</p>
                </div>
          </Tilt>
        </div>
		);
}
export default Logo;