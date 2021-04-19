import React from 'react'; 

function card({destination, description, price}) {
    return (
        <div class="container mx-auto flex flex-wrap items-start my-16">
            <div class="lg:w-1/4 w-full lg:pr-3">
                <div class="bg-gray-200 rounded-xl p-6">
            
                    <h2 class="text-2xl font-bold mb-2">{destination}</h2>
                    <div class="text-gray-800 leading-relaxed mb-6">{description}</div>
                    <img src="jjj.jpeg"/>
                    <div class="text-gray-800 leading-relaxed mb-6">{price}</div>
                    <button class="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">See more</button>

                </div>
            </div>
        </div>
    )
}

export default card;
