import React from 'react'
import  Header from '../Header'
import Planing from '../components/Planing';

function Home() {
  return (
    
<div className='home'>
       <Header />
   <div className='actualite'>
       
      <div className='titre1'>  <h1>أخبار و مستجدات جمعية لقصور للتنمية و التضامن  </h1></div>
      <div className='titre2'>  <h3>عقد لقاء تواصلي شهر فبراير 2023</h3></div>
      <div className='horaire'> <h3>البرنامج الزمني  لهدا الاجتماع  </h3></div>
   <div className='titre'> 
      <div className='titre3'>  <h4>عقد لقاء تواصلي بين مختلف لجان الجمعية لتهيئ برنامج عام يضم جميع الانشطة والمشاريع لسنة 2023 ودلك يوم الاحد 26 فبراير 2023 بمقر الهلال الاحمر المغربي بالمهدية</h4></div>
      <div className='titre4'> 
      <Planing />
      </div>
   </div>
   </div>
     <div className='historique'>   <h2>نبدة عن جمعية لقصور للتنمية و التعاون</h2></div>
 </div>
  )
}

export default Home