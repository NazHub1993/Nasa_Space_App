import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react' 


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="z-50 fixed top-0 left-0 p-6 w-full bg-gray-900 flex justify-between items-center">
            <div className="icon text-white text-4xl font-bold">                
               ORBIT
            </div>
            <div id="nav-items" className='hidden md:flex'>
                <ul className="flex flex-row justify-around items-center gap-5">
                    <li className="me-3">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-black  text-lg py-2.5 px-5 me-2 mb-2
                                focus:outline-none  bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:font-bold
                                ${isActive ? "underline" : ""}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="me-4">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-black  text-lg py-2.5 px-5 me-2 mb-2
                                focus:outline-none  bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:font-bold
                                ${isActive ? "underline" : ""}`}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="me-4">
                        <NavLink
                            to="/sign_up"
                            className={({ isActive }) =>
                                `text-black text-lg py-2.5 px-5 me-2 mb-2
                                focus:outline-none  bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:font-bold
                                ${isActive ? "underline" : ""}`}
                        >
                            Sign Up
                        </NavLink>
                    </li>
                    <li className="me-4">
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `text-black text-lg py-2.5 px-5 me-2 mb-2
                                focus:outline-none  bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:font-bold
                                ${isActive ? "underline" : ""}`}
                        >
                            Log In
                        </NavLink>
                    </li>

                    <li className="me-4">
                        <NavLink
                            to="/pricing"
                            className={({ isActive }) =>
                                `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${isActive ? "underline" : ""}`
                            }
                        >
                            Pricing
                        </NavLink>
                    </li>


                </ul>
            </div>


            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-start px-6 py-4 space-y-3 md:hidden">
                    <NavLink to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400">Home</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400">About</NavLink>
                    <NavLink to="/signin" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400">Sign In</NavLink>
                    <NavLink to="/pricing" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400">Pricing</NavLink>
                </div>
            )}
            

        </div>
    )
}

export default Navbar