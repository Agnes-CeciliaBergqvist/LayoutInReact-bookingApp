import React from "react";

function Card({ tripDestination, tripDescription, tripPrice, tripImage }) {
  return (
    <div className="bg-gray-200 rounded-xl p-6 m-4">
      <h2 className="text-2xl font-bold mb-2">{tripDestination}</h2>
      <div className="text-gray-800 leading-relaxed mb-6">{tripDescription}</div>
      <img src={"http://localhost:1337" + tripImage.url} alt="images from the database strapi"/>
      <div className="text-gray-800 leading-relaxed mb-6">{tripPrice}</div>
      <button className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">
        Book
      </button>
    </div>
  );
  
}

export default Card;
