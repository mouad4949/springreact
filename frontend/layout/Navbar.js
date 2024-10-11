import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {
    return (
        <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              <h1 className='text-xl font-bold text-white'>Full stack application</h1>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to="/ADDUSER" class=" text-white font-bold border-2 border-gray-300  px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-black">
              Add User
             </Link>

              
            </div>
          </div>
        </div>
      
        
        
      </nav>
      
    )
  }
