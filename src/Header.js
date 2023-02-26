import React from 'react'
import TextAnimer from './components/TextAnimer';
import laksour from './components/images/laksour.png'
const Header = () => {
    return (
 <div className='hautpage'>
        <div className="entete">
          <TextAnimer />
        </div>
        <div className='logo1'> 
           <img src={laksour} alt=""/>
        </div>
 </div>  
       
     
    )
}

export default  Header
