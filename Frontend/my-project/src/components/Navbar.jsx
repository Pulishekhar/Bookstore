import React from 'react';
import { GiBookshelf } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Login from './login'; // Import Login component

function Navbar() {
  const handleOpenModal = () => {
    document.getElementById('my_modal_3').showModal();
  };

  return (
    <div>
      <div className="navbar bg-gray-800 text-white rounded-lg">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-4xl font-bold flex items-center">
            <GiBookshelf className="mr-2 text-gray-300" />
            <span className="text-orange-400">Bookstore</span>
          </Link>

          <div className="hidden md:block form-control ml-4">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered bg-gray-700 text-white"
            />
          </div>
        </div>

        {/* Normal Menu for larger screens */}
        <ul className="hidden md:flex menu menu-horizontal bg-gray-800 rounded-lg">
          <li><Link to="/" className="rounded-lg p-2 text-white hover:bg-gray-700">Home</Link></li>
          <li><Link to="/course" className="rounded-lg p-2 text-white hover:bg-gray-700">Course</Link></li>
          <li><Link to="/contact" className="rounded-lg p-2 text-white hover:bg-gray-700">Contact</Link></li>
          <li><Link to="/about" className="rounded-lg p-2 text-white hover:bg-gray-700">About</Link></li>
        </ul>

        {/* Login Button */}
        <div className="flex-none gap-2">
          <button
            className="bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded-lg text-sm"
            style={{ height: '30px' }}
            onClick={handleOpenModal}
          >
            Login
          </button>
        </div>
      </div>

      {/* Render the Login component */}
      <Login />
    </div>
  );
}

export default Navbar;