import React from 'react'
import './Shows.css'
import { Link } from 'react-router-dom';


import { BsPlayCircleFill,BsPlayCircle,BsStarFill } from "react-icons/bs";

const Shows = ({ movie }) => {
    
    const { show } = movie;

    const { name, genres, status, rating,runtime, links, summary, original, medium, schedule, premiered
        ,image} = show;
    console.log(show.id);

  return (
    <div className="px-4 shadow-2xl container1 " >
                  
                  <Link to={`/show/${show.id}`} >  <div className="img-area1">
        
        <img src={image.medium} alt="" />
        
        <div className="img-text1">
            <p className=''>
              <span className='mx-2 font-bold text-5xl'><BsPlayCircleFill></BsPlayCircleFill></span>
            

            </p>
           
         </div>
         
          </div>
          </Link>
          <div className="py-6">
              <p className='text-1xl uppercase font-semibold text-white'>
                  Show Name : {name}
              </p>
              <p className=' py-2 text-[14px] uppercase font-normal  text-[#D74F6A]'>
                  Category :  <span className='px-4'>{genres[0]}</span>
              </p>
              <p className=' uppercase font-normal flex items-center py-2 justify-start  text-[#D74F6A]'>
                  <span><BsStarFill></BsStarFill> </span><span className='px-4 '>{rating.average}</span>
              </p>



          </div>

</div>

  )
}

export default Shows