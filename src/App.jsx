import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/header'
import Men from './Components/Header/Men'
import Women from './Components/Header/Women'
import Kids from './Components/Header/Kids'
import Beauty from './Components/Header/Beauty'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/men" element={<Men/>}/>
                <Route path="/women" element={<Women/>}/>
                <Route path="/kids" element={<Kids/>}/>
                <Route path="/beauty" element={<Beauty/>}/>
            </Routes>
     
        </BrowserRouter>  
    </>
  )
}

export default App
