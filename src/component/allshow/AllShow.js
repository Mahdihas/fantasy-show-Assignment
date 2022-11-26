import React from 'react'
import Shows from '../Home/Shows/Shows'
import { useLoaderData } from 'react-router-dom'


const AllShow = () => {
  const  show  = useLoaderData([]);




  
  return (
    <div>

<div className="grid grid-cols-1 py-6  sm:grid-cols-2 lg:grid-cols-3 container1 gap-4 px-4 bg-[#362c38]">
        
        {
  
  show.map(movie=> <Shows key={movie.score} movie={movie} > </Shows>)
  }   
        </div>
  
    </div>
  )
}

export default AllShow