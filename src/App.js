import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.js"
import Hero from "./Hero.js"
import Card from "./Card.js"
import data from "./data.js"

function App() {


  const cards= data.map(x=>{
    return(
      <Card 
      key={x.id}
      x={x}
      />
    )
  })
  return (
   <div>
    <Navbar />
    <Hero />
    <section className='card--list'>
    {cards} 
    </section>
   </div>
  );
}

export default App;
