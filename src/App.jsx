import { useState } from 'react'
import Navbaar from './components/Navbaar'
import Header from './components/Header'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Client from './components/Client'
import Home from './components/Home/Home'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Navbaar/>
     <Home/>
     <Header/>
     <Experience/>
     <Client/>
     <Footer/>
     
     
    </>
  )
}

export default App
