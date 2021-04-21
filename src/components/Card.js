import React from "react";

function Card({ destination, description, price }) {
  return (

    <div className="bg-gray-200 rounded-xl p-6 m-4">

      <h2 className="text-2xl font-bold mb-2">{destination}</h2>
        <div className="text-gray-800 leading-relaxed mb-6">{description}</div>
        <img src="https://images.unsplash.com/photo-1508855173839-a6d69c12573a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=50" />
        <div className="text-gray-800 leading-relaxed mb-6">{price}</div>
        <button className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">
        Book
        </button>

    </div>
  );
}

export default Card;
