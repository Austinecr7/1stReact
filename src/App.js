import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Testimonial from './Components/Testimonial';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
    <Home />
    <About />
    <Contact />
    <Footer />
    <Testimonial />
    <Work />
    </div>
  );
}

export default App;

// import {Daniel, Banji} from "./Components/Daniel"

// // import React from 'react'

// // const App = () => {

// //   const cars = ["bmw", "Toyota", "benz", "lexus", "audi", "volvo"]
// //   const foodItems = ["oil", "salt", "beans", "eba", "efo"]
// //   return (
// //     <div>
// //        {
// //          foodItems.map((food) => (
// //           <h1>{food}</h1>
// //          ))
// //        }
// //     </div>
// //   )
// // }

// // export default App