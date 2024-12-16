import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollection from '../Components/Newcollection/Newcollection';
import Newsletter from '../Components/Newsletter/Newsletter';

function Shop() {
  return (
   <>
    <Hero/>
    <Popular/>
    <Offers/>
    <Newcollection/>
    <Newsletter/>
   </>
  )
}

export default Shop