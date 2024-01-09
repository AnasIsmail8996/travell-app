import { useEffect, useState } from 'react'
import './Scroll.css'
import { FaArrowUp } from "react-icons/fa";
const Scroll = () => {

    const [isvisivle, setVisible]=useState(false)

  const GoToTop =()=>{  window.scroll({top:0, left:0, behavior:'smooth'})} 


const makeToTop =()=>{
    
     const showHide= 250;

     const userScroll= document.body.scrollTop || document.documentElement.scrollTop;
    
    if(userScroll > showHide){
      setVisible(true)
    }
    else{
        setVisible(false)
    }

}


   useEffect(()=>{
  window.addEventListener('scroll', makeToTop)
   },[])


  return (
    <>
    { isvisivle &&
    <div className='top-btn' onClick={GoToTop}>
        <FaArrowUp  className='top-btn-icon'/>
    </div>
    }
    </>
  )
}

export default Scroll;