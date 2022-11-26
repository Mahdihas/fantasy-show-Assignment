import React from 'react'

import { useLoaderData } from 'react-router-dom'

import { BsPlayCircleFill,BsPlayCircle,BsStarFill } from "react-icons/bs";

const ShowDetails = () => {
    const show = useLoaderData(); 
    const { name, genres, status, rating,runtime, language,network, averageRuntime, links, summary, original, medium, schedule, premiered
        , image } = show;
    
    
    
    
    const handleBooking = (event) => {
        event.preventDefault()
        console.log(event);
        alert('helo')
    }
    



  return (
      <div className='bg-[#362c38]  px-6 '>
          
          <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 py-6 pb-12 shadow-xl">
              <div className="">  <figure><img className='h-[500px] w-full' src={image.original} alt="Album"/></figure>
              </div>
              <div className="">
                  <h2 className="text-white text-4xl ">Show Title : {name}</h2>
                  <p className=' uppercase font-normal py-4 flex items-center  justify-start  text-[#D74F6A]'>
                      <span className=''><BsStarFill></BsStarFill> </span>
                      <span className='mx-2'><BsStarFill></BsStarFill> </span>
                      <span className='mx-2'><BsStarFill></BsStarFill> </span>
                      <span className='mx-2'><BsStarFill></BsStarFill> </span>
                      <span className='px-4 text-white '>{rating?.average ? rating.average : 0.9}</span>
                  </p>
                  <p className='font-normal text-white py-1'>Genre:  {genres[0] ? genres[0] : genres[1]}</p>
                  <p className='font-normal text-white py-1'> Release year : {premiered} </p>
                  <p className='font-normal text-white py-1'> Running time : {averageRuntime} min </p>
                  <p className='font-normal text-white py-1 '> Language : {language} </p>
                  <p className='font-normal text-white py-1'> Country : {network.country.name} </p>
                  <p className='font-normal text-white my-4'> Show Story : {summary.slice(3, -4)} </p>
                  
                  <label
                       
                        htmlFor="booking-modal"
                        className="btn bg-[#ff55a5] text-white"
                        // onClick={() => setTreatment(appointmentOption)}
                  >Booking Ticket</label>

<input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
        <div className="modal-box relative">
           <img className='h-[150px] w-full' src={image.medium} alt="" />
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
               <h3 className="text-lg font-bold">{''}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
{/*                        
                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} readOnly placeholder="Email Address" className="input w-full input-bordered" /> */}
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                  </form>
                </div>
            </div>
                  






    
  </div>
 
</div>
          


    </div>
  )
}

export default ShowDetails