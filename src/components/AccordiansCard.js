import { useState, useEffect, useRef} from 'react'
import React from 'react'

const AccordiansCard = ({data ,index}) => {
    const [isopen, setIsopen] = useState(false)
    const accordianselement = useRef()


    const handleOpen = (index) =>{    
        console.log("index",index)
setIsopen(!isopen)

    }
    useEffect(()=>{ 
        accordianselement.current.style.maxHeight= !isopen ? "0px" : "1000px"
         accordianselement.current.style.paddingBlock= !isopen ? "0px" : "20px"

    },[isopen])
   

  return (
    
    <div className='accordianswrapper'  >
        {data.question?
        (<div style={{position:"relative"}} onClick={() => handleOpen(index)} className={`accordianquestion ${isopen? "open" : " "}`}>
          <span>{data.question}</span>
          <span className='icon' style={{width:"18px", height:"18px"}}><Icon /></span>
        </div>
        ): null
}
{data.answer ?(
        <div className='accordiancontent' ref={accordianselement}>
        {data.answer}
        </div>
) : null
    }
        </div>
  )
}
export default AccordiansCard

const Icon = ()=>{
    return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
)}