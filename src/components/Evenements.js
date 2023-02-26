import React from 'react';
import Slide4 from './Slide4';

function Evenements() {
  return (
    <div className='containereven'> 
     <div className='contenueven'> 
         <div className='evenement'>
         
            <h1>تخليد سنوي لدكرى المولد النبوي الشريف</h1>
         </div>
         <div className='maoulid'>
         <h3>تخلد جمعية لقصور كل سنة دكرى عيد المولد النبوي الشريف و دلك باقامة حفل ديني باحد القاعات  و يشمل هدا الحفل  تلاوة القران و تجويده  و الامداح النبوية و دروس دينة بالمناسبة, بالاضافة الى مؤدبة عشاء على شرف الحاضرين  </h3>
         </div>
         </div>
        <div className='containerimage'>
             <Slide4 />
           </div>
    </div>

  )
}

export default Evenements