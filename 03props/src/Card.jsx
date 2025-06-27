import React from 'react';

const Card = ({username,btn='visit me'}) => {
   
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1750672951646-cad9ca5a6776?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Random"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{username}</h2>
        <p className="text-gray-600 text-base mb-4">
          This is a sample card description. It is clean, minimal, and responsive.
        </p>
        <button className="bg-blue-500 text-red-400 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            {btn}
        </button>
      </div>
    </div>
  );
};

export default Card;
