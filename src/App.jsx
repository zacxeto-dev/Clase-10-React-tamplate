import React from 'react'
import Header from './components/Header'
import Contactos from './pages/Contactos'
import Footer from './components/Footer'
import Error404 from './pages/Error404'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import SinglePages from './pages/SinglePages'


const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>

        <Header/>
          <Routes>

         <Route path='/contacto' element={<Contactos/>} />
         <Route path='/error404' element={<Error404/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/shop' element={<Shop/>} />
         <Route path='/single' element={<SinglePages/>} />
         

          </Routes>

        <Footer/>
        
     </div>
    </BrowserRouter>
  )
}

export default App