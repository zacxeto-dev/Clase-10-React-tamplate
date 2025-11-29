import React from 'react'
import Encabezado from '../components/Encabezado'
import Contenido404 from './error404/Contenido404'


const Error404 = () => {
  return (
    <>
        <Encabezado titulo={"error404"}/>
        <Contenido404/>
        
    </>
  )
}

export default Error404