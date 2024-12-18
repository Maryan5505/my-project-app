import './App.css';
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";
import Categories from "./components/Categories";
import Productlist from "./components/Productlist";
import NewArrivals from './components/NewArrivals';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Banner title="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"/>
      <Navigation/>
      <Categories/>
      <Productlist/>
      <NewArrivals/>
      <Footer/>
    </div>
  );
}

export default App;
