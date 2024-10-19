import React from 'react';

// Function to generate a random price between 800 and 1600
function getRandomPrice() {
  return Math.floor(Math.random() * (1600 - 800 + 1)) + 800;
}

function Cards({ item }) {
  // Generate a random price for each card
  const randomPrice = getRandomPrice();

  return (
    <div
      className="transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
      style={{
        backgroundColor: '#f5f5f5',
        borderRadius: '18px',
        height: '400px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px', // Increased padding for internal spacing
        textAlign: 'center',
      }}
    >
      <figure>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-contain rounded-lg"
        />
      </figure>

      <h3 style={{ fontWeight: 'bold', fontSize: '1rem', margin: '10px 0' }}>
        {item.title}
      </h3>

      {/* Price and Buy Course button section */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-2xl font-bold text-left">₹{randomPrice}</div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Buy Course
        </button>
      </div>
    </div>
  );
}

export default Cards;
