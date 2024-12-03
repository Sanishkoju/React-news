import React, {useState, useEffect} from 'react'
import Card from './Card'

const Newsapp = () => {
    let noofpost = 8;
    const [search ,setSearch] = useState("nepal")
    const [newsData, setNewsData] = useState(null)
    const [number, setNumber] = useState(noofpost)
    const [Updatednumber, setUpdatednumber] = useState(noofpost); 
    const [Totalarticles, setTotalarticles] = useState(0); 
    const API_KEY ='0108ed76dbb34b7489049c85f4d1f639'

    const getData =async() =>{
        try{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData =await response.json();
        const Totalarticles = jsonData.articles.length;
        setTotalarticles(Totalarticles);
        console.log("Totalarticle",Totalarticles)
        console.log(jsonData.articles);
        console.log("Total articles:", jsonData.articles.length);


        if (!jsonData.articles) {
            throw new Error("No articles found");
          }
      
          const dt = jsonData.articles.slice(0, number); // Only slice if articles are available
          setNewsData(dt);
        } catch (error) {
          console.error("Error fetching data:", error);
          setNewsData([]); // Set empty data to avoid rendering errors
        }


    }
    useEffect(()=>{
        getData();
        
    },[])
    const handleInput =(e) =>{
        console.log(e.target.value);
        setSearch(e.target.value);
        getData()
        setNumber(noofpost);
        
    }
    const userInput = (event) =>{
        setSearch(event.target.value)
        setNumber(noofpost)
        getData()
        console.log(event.target.value);
    }
    const handleLoad = () =>{
        setNumber((number) => number + noofpost);
       console.log("number",number);

       
    }
    useEffect(() => {
        
        console.log("Updated number:", number);
        getData();
        setUpdatednumber(number);
        console.log("Updatednumber",Updatednumber)
      }, [number]);


  return (
    <section>
    <nav>
        <div>
            <h1>Trendy News</h1>
        </div>
        <ul style={{display:"flex", gap:"11px"}}>
            <span style={{fontWeight:600, fontSize:"17px"}}>All News ({Totalarticles})</span>
            <span style={{fontWeight:600, fontSize:"17px"}}>Current News ({Updatednumber})</span>

        </ul>
        <div className='searchBar'>
            <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
            <button onClick={getData}>Search</button>
        </div>
    </nav>
    <div>
        <p className='head'>Stay Update with TrendyNews</p>
    </div>
    <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
    </div>

    <div className="container">
    {newsData?  <Card data={newsData}/> : null}
    {(Totalarticles >= Updatednumber) ? <button onClick={handleLoad} className="learnmore">
        Learn More
    </button> : null } 
    </div>

</section>
  )
}

export default Newsapp