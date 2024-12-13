import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Receipe from './pages/Receipe.js';
import SingleReceipe from './pages/SingleReceipe.js';
import NotFound from './pages/NotFound.js'; 
import Header from './components/Header.js';


export default function App() {

  return (
    <>

    <BrowserRouter>
    <Header />
        <Routes>
          <Route index element ={<Receipe />} />
          <Route path="/news" element ={<Home />} />
          <Route path="/contact" element ={<Contact />} />
          <Route path="/receipe" element ={<Receipe />} />
          <Route path='/:mealids' element={<SingleReceipe/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
 
    </>
  );
}