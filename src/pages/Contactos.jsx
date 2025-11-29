import React from 'react'
import Encabezado from '../components/Encabezado'
import InicioContacto from './contacto/InicioContacto'

const Contactos = () => {
  return (
    <>
      <Encabezado titulo={"contactos"}/>
      <InicioContacto />
    </>
  )
}

export default Contactos