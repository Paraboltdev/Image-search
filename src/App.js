
import './App.css';


import { BrowserRouter , Routes, Route, useSearchParams,  } from "react-router-dom";



import { HomePage } from './Components/HomePage';
import { Pictures } from './Components/Pictures';
import { Footer } from './Components/Footer';
import { Searchbar } from './Components/Searchbar';
import Navbar from './Components/Navbar';
import { useDebounce } from './hooks/useDebounce';





function App() {
  

    
  return (
   <>
  
    <BrowserRouter>
    <Navbar/>
      <Searchbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/photo/:photoId" element={<Pictures />} />
      <Route path="*" element={<div>404 NOT FOUND</div>}/>
    </Routes>
   
    </BrowserRouter>
    <Footer />
  </>
  );
}

export default App;
