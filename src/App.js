import './App.css';
import Home from "./components/pages/Home";
import { AppProvider } from './components/AppContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wishlist from './components/pages/Wishlist';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Cart from './components/pages/Cart';



function App() {
  return (
    <div className="App">
      
      <AppProvider>
      <Router>
      <Banner title="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"/>
      
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/wishlist" element={<Wishlist />} /> 
      </Routes>
      <Footer /> 
    </Router>
      </AppProvider>
      
      
      
      
    </div>
  );
}

export default App;
