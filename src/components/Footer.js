import React from "react";


function Footer() {
    return (
        
            <div className=" bg-white pb-12 sm:w-full">
                <div className="mx-auto container pt-20  flex flex-col items-center justify-center">
                    <div>
                        
                        
                    </div>
                    <div className="w-9/12  h-0.5 bg-yellow-400 rounded-full"></div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-black">Speedo</h1>
                        <h3 className="font-black">Travel with us!</h3>

                        
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>                           
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Pricing</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Contact</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Help</li>
                                
                            </ul>
                        </div>
                       
                    </div>
                    <div className="w-9/12  h-0.5 bg-yellow-400 rounded-full" />
                    
                        <p className="mt-4"> © 2021 by Agnes-Cecilia Bergqvist </p>
                   
                            
                        
                    </div>
                </div>
           
        
    );
}

export default Footer;
