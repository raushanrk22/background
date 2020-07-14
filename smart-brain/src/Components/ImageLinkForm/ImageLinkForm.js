import React from 'react';


const ImageLinkForm =({onInputChange,onButtonSumbit})=>{
	return(
		<div className='center'>
            <div className='form pa4 br3 shadow-50'>
                <p className='f3'>
                   {'This magic brain will detect faces in your pictures.Get it a try.'}
                </p>
                <div>
                 <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                 <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                 onClick={onButtonSumbit} >Detect</button>
                
                </div> 
            </div>   		
        </div>
		);
}
export default ImageLinkForm;