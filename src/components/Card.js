import React from 'react'; 


function Card({destination, description, price}) {
    return (
        <div className="container mx-auto flex flex-wrap items-start my-16">
            <div className="lg:w-1/4 w-full lg:pr-3">
                <div className="bg-gray-100 rounded-xl p-6">
            
                    <h2 className="text-2xl font-bold mb-2">{destination}</h2>
                    <div className="text-gray-800 leading-relaxed mb-6">{description}</div>
                    <img src="./images/jjj.jpeg"/>
                    <div className="text-gray-800 leading-relaxed mb-6">{price}</div>
                    <button className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Book</button>

                </div>
            </div>
        </div>
    )
}

export default Card;
