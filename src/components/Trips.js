import React from 'react';

function MyTrips({key}) { 
    return(
        <div className="container mx-auto flex justify-center my-16">
            <div className="lg:w-2/4 lg:pr-1">
                <div className="bg-gray-100 rounded-xl p-6">
            
                    <h2 className="text-2xl font-bold mb-2">Boutique by Doryssa Hotel{key}</h2>
                    <div className="text-gray-800 leading-relaxed mb-6">In Pythagorion, Samos, Greece</div>
                    <img src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
                    <div className="text-gray-800 leading-relaxed mb-6">Total price: 15 130:-</div>
                    <button className="text-indigo-500 px-4 py-3 m-4 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Rebook</button>
                    <button className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Cancel</button>
                </div>
            </div>
        </div>
    )    
}

export default MyTrips; 