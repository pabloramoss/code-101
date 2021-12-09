import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/Form'
import Contador from './components/Contador'
import Onoff from './components/Onoff'
import Xmas from './components/Xmas'

function App() {

  return (
    <div className="App">
      <Form />
      <Contador /> 
      <Onoff />
      <Xmas />
    </div>
  )
}

export default App
