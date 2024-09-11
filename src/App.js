import logo from './logo.svg';
import './App.css';


import { BrowserRouter,Routes,Route,Router } from 'react-router-dom';
import Home from'./pages/Home';
import AboutUs from  './pages/Aboutus';
import Contact from './pages/Contact';
import ContactDetails from './pages/ContactDetails';
import User from './pages/User'

function App() {
  return (
    <div >
    
     <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/AboutUs" element={<AboutUs/>}></Route>
        <Route  path="/Contact" element={<Contact/>}></Route>
        <Route  path="/contact/contactdetails" element={<ContactDetails/>}></Route>
        <Route  path="/contact/:id" element={<User/>}></Route>

       
      </Routes>
     </BrowserRouter>

     

    </div>
  );
}

export default App;
