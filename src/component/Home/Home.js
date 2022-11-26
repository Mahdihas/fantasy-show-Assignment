import Bannar from './Bannar/Bannar'
import Shows from './Shows/Shows'
import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'



const Home = () => {

  const  show  = useLoaderData([]);
  // console.log(show);

  
// console.log(orders);        
    
      // useEffect(() => {
      //     fetch(`http://localhost:5000/products?category=${data?.category}`)
            
      //     .then(res => res.json())
      //         .then(data => {
      //             setOrders(data);
               
      //         })
      // }, [orders,data])

  return (
    <div className='bg-[#362c38]'>

      <Bannar></Bannar>
      <div className="grid grid-cols-1 py-6  sm:grid-cols-2 lg:grid-cols-3 container1 gap-4 px-4 bg-[#362c38]">
        
      {

show.map(movie=> <Shows key={movie.score} movie={movie} > </Shows>)
}   
      </div>

     
    </div>
  )
}

export default Home