import {React,useEffect,useRef}   from "react";
import { gsap } from "gsap";



const TextAnimer = () => {
  const titleRef = useRef()
  const onLoad = ()=>{
    gsap.timeline({repeat:-1}).fromTo('.letter',
    {  x:-100,
     opacity:0,
     },
     {
       x:0,
       opacity:2,
       stagger:0.10,
       delay:0.2,
     }
    ).to(".title",{
      y:10,
      delay:0.7,
     
    })
    .to(".letter",{
      margin:"0.2vw",
      delay:0.7,
      duration:0.8,
      color:"#912",
      
    })
    .to(".letter",{
      margin:"0",
      delay:0.8,
      duration:0.5
    })
    .to(".letter",{
      x: -titleRef.current.clientWidth,
      delay:1,
      duration:0.8,
      rotate: -360,
    }, 

   
    )
   
   }
  useEffect(()=>{
    onLoad();
  },[])
  
 
  return (
    <div  className="App" >
    <div>
    
    </div>
    <h1 className="title" ref={titleRef}>
    <span className="letter">A</span>
    <span className="letter">S</span>
    <span className="letter">S</span>
    <span className="letter">O</span>
    <span className="letter">C</span>
    <span className="letter">I</span>
    <span className="letter">A</span>
    <span className="letter">T</span>
    <span className="letter">I</span>
    <span className="letter">O</span>
    <span className="letter">N</span>
    <span className="letter">  </span>
       <span className="letter">L</span>
       <span className="letter">A</span>
       <span className="letter">K</span>
       <span className="letter">S</span>
       <span className="letter">O</span>
       <span className="letter">U</span>
       <span className="letter">R</span>
      
     </h1>
     <h1 className="title" ref={titleRef}>
     <span className="letter">P</span>
     <span className="letter">O</span>
     <span className="letter">U</span>
     <span className="letter">R</span>
     </h1>
     <h1 className="title" ref={titleRef}>
     <span className="letter">L</span>
     <span className="letter">E</span>
     <span className="letter"> </span>
     <span className="letter">D</span>
     <span className="letter">E</span>
     <span className="letter">V</span>
     <span className="letter">E</span>
     <span className="letter">L</span>
     <span className="letter">O</span>
     <span className="letter">P</span>
     <span className="letter">P</span>
     <span className="letter">E</span>
     <span className="letter">M</span>
     <span className="letter">E</span>
     <span className="letter">N</span>
     <span className="letter">T</span>
     <span className="letter">  </span>
     <span className="letter">E</span>
     <span className="letter">T</span>
     <span className="letter">  </span>

     <span className="letter">L</span>
     <span className="letter">A</span>
     <span className="letter">  </span>
     <span className="letter">C</span>
     <span className="letter">O</span>
     <span className="letter">O</span>
     <span className="letter">P</span>
     <span className="letter">E</span>
     <span className="letter">R</span>
     <span className="letter">A</span>
     <span className="letter">T</span>
     <span className="letter">I</span>
     <span className="letter">O</span>
     <span className="letter">N</span>
     
     </h1>
      </div>
  );
};

export default TextAnimer;
