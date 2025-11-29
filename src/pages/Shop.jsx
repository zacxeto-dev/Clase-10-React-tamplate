import React from 'react'
import ShopStart from './shop/ShopStart'
import ShopSinglepages from './shop/ShopSinglepages'
import HomeProduct from '../components/HomeProduct'
import ShopServicesStart from './shop/ShopServicesStart'
import HomeProducBanner from './home/HomeProducBanner'



const Shop = () => {
  return (
    <>
        <ShopSinglepages/>
        <ShopServicesStart/>
        <HomeProduct/>
        <ShopStart/>
        <HomeProducBanner/>
        
        

    </>
  )
}

export default Shop