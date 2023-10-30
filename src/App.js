import { useState } from 'react';
import CoffeeList from './components/CoffeeList';
import AddCoffee from './components/AddCoffee';
import Hero from './components/Hero'
import './App.css'

function App() {
  const [coffees, setCoffees] = useState()
  return (
    <>
      <Hero />
      <AddCoffee setCoffees={setCoffees} />
      <CoffeeList coffees={coffees} />
    </>
  );
}

export default App;
