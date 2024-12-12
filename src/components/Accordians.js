
import {accordiondata} from ".././accordiansElements"
import AccordiansCard from './AccordiansCard'
import "../CSS/Accordians.css"

const Accordians = () => {


  return (
    <section className='accordians_sec'>
        <div className='container'>
        <h2 style={{ textAlign: "center" }}>Accordians</h2>

    <div className="accordian_container">
    {
        accordiondata ?
        accordiondata.map((item , index) => (
          <AccordiansCard key={index} data={item} index={index} />
        )) : "No Data" 
        
    }
    </div>
    </div>
    </section>
  )
}

export default Accordians