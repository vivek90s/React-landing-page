import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
              
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl text-blue-800">Gluten</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link to="/about" className="mr-5 hover:text-gray-900">About</Link>
      <Link to="/service" className="mr-5 hover:text-gray-900">Service</Link>
      <Link to="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-800  rounded text-white mt-4 md:mt-0">Sign Up
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
        </>
    )
}

export default Navbar
