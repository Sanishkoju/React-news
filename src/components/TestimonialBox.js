const TestimonialBox= (props)=>{ 

    return(
        <div style={{
            padding: '24px',
            backgroundColor: '#FFFFFF',
            // height: '100%',
            border: "1px solid #000",
            background:"#f1f1f1"
          }}
          >
        <div style={{
            display: 'flex',
            gap: '8px',
            }}
            >
           <img
           src={props.src}
           alt={props.name}
           width={300}
           height={200}
           style={{
            height: '50px',
            width: '50px',
            objectFit: 'cover',
            overflow: 'hidden',
            borderRadius: '50%',
            display: 'inline-block',
          }}
          
           />
           <div className="self-center">
           <img
           src='../../star2.png'
           alt="star"
           width={300}
           height={200}
           style={{
            height: '20px', // Adjust based on your interpretation of `h-[20]`
            objectFit: 'contain',
            width: '80px',
          }}
          
           />
           <p style={{
            color: 'black',
            marginTop: '4px',
            fontStyle: 'italic',
            fontSize: '0.75rem',
            }}
            >{props.position}</p>
           </div>
           </div> 


    <>
           <div style={{
            marginTop: '28px',
            }}
            >
            <p style={{
            color: 'black',
            fontSize: '0.875rem',
            }}
            >{props.desc}</p>
           </div>
           </>

       </div>
    )
}
export default TestimonialBox;