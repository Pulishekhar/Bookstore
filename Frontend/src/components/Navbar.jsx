import React, { useState } from 'react';
import { GiBookshelf } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Login from './login'; // This should be your login component
import Logout from './logout'; // This should be your logout component
import { useAuth } from "../context/AuthProvider"; // Make sure the path to AuthProvider is correct
import ContactModal from './ContactModal'; // Import the ContactModal

function Navbar() {
  const { authUser } = useAuth();
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false); // State for the login modal

  const handleOpenContactModal = () => {
    setContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setContactModalOpen(false);
  };

  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
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

        <ul className="hidden md:flex menu menu-horizontal bg-gray-800 rounded-lg">
          <li><Link to="/" className="rounded-lg p-2 text-white hover:bg-gray-700">Home</Link></li>
          <li><Link to="/course" className="rounded-lg p-2 text-white hover:bg-gray-700">Course</Link></li>
          <li>
            <button onClick={handleOpenContactModal} className="rounded-lg p-2 text-white hover:bg-gray-700">
              Contact
            </button>
          </li>
          <li><Link to="/about" className="rounded-lg p-2 text-white hover:bg-gray-700">About</Link></li>
        </ul>
        
        <div className="flex-none gap-2">
          {authUser ? (
            <Logout />
          ) : (
            <div>
              <a
                className="bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-800 duration-300 cursor-pointer"
                onClick={handleOpenLoginModal} // Open the login modal
              >
                Login
              </a>
              <Login isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} /> {/* Ensure your Login component handles this */}
            </div>
          )}
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContactModal} />
    </div>
  );
}

export default Navbar;
