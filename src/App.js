import { useState } from 'react';
import Hero from './components/Hero'
import AddCoffee from './components/AddCoffee';
import './App.css'

function App() {
  const [coffees, setCoffees] = useState()
  return (
    <>
      <Hero />
      <AddCoffee setCoffees={setCoffees} />
    </>
  );
}

export default App;
