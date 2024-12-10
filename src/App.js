import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Receipe from './pages/Receipe.js';
import SingleReceipe from './pages/SingleReceipe.js';


export default function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route index element ={<Receipe />} />
          <Route path="/news" element ={<Home />} />
          <Route path="/contact" element ={<Contact />} />
          <Route path="/receipe" element ={<Receipe />} />
          <Route path='/:mealids' element={<SingleReceipe/>}/>
        </Routes>
    </BrowserRouter>
 
    </>
  );
}