import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/Form'
import Contador from './components/Contador'
import Onoff from './components/Onoff'

function App() {

  return (
    <div className="App">
      <Form />
      <Contador /> 
      <Onoff />
    </div>
  )
}

export default App
