import React, {useState} from 'react'; 
import resa1 from "./images/resa1.jpeg"; 
import resa2 from "./images/resa2.jpeg"; 
import resa3 from "./images/resa3.jpeg"; 
import resa4 from "./images/resa4.jpeg"; 
import resa5 from "./images/resa5.jpeg"; 
import resa6 from "./images/resa6.jpeg"; 



//const [notLoggedIn, setNotLoggedIn] = useState(); 

function HomePage() {
    return (
        <div>
           
<div className="w-full h-full  py-20 bg-cover bg-white ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Speedo</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        A better way to travel
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        
        If you want to get away to the heat quickly and cheaply, this is the right site. The range of trips is updated daily, so check in often to find your trip.
      </p>
    </div>

    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
             
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">All inclusive</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
          All Inclusive makes the holiday easy because basically everything you could want is included. Avoid discussions about where to eat and how much it can cost. 
          </dd>
          
        </div>

        <div className="relative">
          <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
             
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
 </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Weekend travel</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
          A weekend is a great way to quickly recharge your batteries. In a few days you get memories for life, whether it is a luxury weekend in London, or a mini weekend or short week with sun and swimming in Crete or Mallorca.
          </dd>
        </div>

        <div className="relative">
          <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
             
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
 </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Family hotel</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
           
            Here we suggest our best child friendly family hotels for small and large families. In some hotels there are extra large family rooms, in others you can stay in your own three-room apartment.
          </dd>
        </div>

        <div className="relative">
          <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
             
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
 </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Training trip</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            
        How about gathering your club mates for a camp trip to a wonderful, fun and sun-safe training camp. "A guaranteed memory for life".
          </dd>
        </div>
      </dl>
    </div>
  
  <div className="ml-1 mr-1 mt-14 pb-10 gap-1 grid grid-cols-1 xl:grid-cols-3 ">
      
      
      <div className="border-2 border-black flex flex-col">
        <img className="" src={resa1} alt="images on trips"/>
        </div>
        <div className="border-2 border-black flex flex-col">
            <img className="" src={resa2} alt="images on trips"/>
        </div>
        <div className="border-2 border-black flex flex-col">
            <img className="" src={resa3} alt="images on trips"/>
        </div>
        <div className="border-2 border-black flex flex-col">
            <img className="" src={resa4} alt="images on trips"/>
        </div>
        <div className="border-2 border-black flex flex-col">
            <img className="" src={resa5} alt="images on trips"/>
        </div>
        <div className="border-2 border-black flex flex-col">
            <img className="" src={resa6} alt="images on trips"/>
        
        </div>
        

      
        </div>


</div>

</div>

            
        </div>
    )
}

export default HomePage
