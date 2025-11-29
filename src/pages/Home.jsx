import React from 'react'
import HomeCarru from './home/HomeCarru'
import HomeServices from './home/HomeServices'
import HomeProduct from '../components/HomeProduct'
import HomeProducBanner from './home/HomeProducBanner'
import HomeProductOur from './home/HomeProductOur'
import HomeProductoBets from './home/HomeProductoBets'
import HomeProductList from './home/HomeProductList'

const Home = () => {
  return (
    <>
        <HomeCarru/>
        <HomeServices/>
        <HomeProduct/>
        <HomeProducBanner/>
        <HomeProductOur/>
        <HomeProductoBets/>
        <HomeProductList/>
    </>
  )
}

export default Home