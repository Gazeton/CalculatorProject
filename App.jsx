import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from "./components/Calculator";


function App() {
  return (
    <div className="app">
      <h1>Kalkulator React</h1>
      <Calculator />
    </div>
  );
}

export default App;

