import React from 'react'
import Link from 'next/link'

function Navbar() {

    return (
        <>
            <nav className="navbar border-b border-[#333333] w-full fixed top-0 left-0 z-20 py-2 md:px-20 lg:px-32 bg-[#000000] ">
                <div className=" flex items-center justify-between w-full p-4 py-1 md:py-4 rounded-2xl text-white">
                    <div className="navbar-start md:hidden">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn pl-0 btn-ghost md:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-0 shadow">
                                <li>
                                    <Link href={'/'}><p className="mr-5 hover:text-[#a855f7]">Home</p></Link>
                                </li>
                                <li>
                                    <Link href={'/about'}><p className="mr-5 hover:text-[#a855f7]">About</p></Link>
                                </li>
                                <li>
                                    <Link href={'/projects'}><p className="mr-5 hover:text-[#a855f7]">Projects</p></Link>
                                </li>
                                <li>
                                    <Link href={'/gallery'}><p className="mr-5 hover:text-[#a855f7]">Gallery</p></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center md:text-2xl text-xl font-bold whitespace-nowrap ">SMP</span>
                        </Link>
                    </div>
                    {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button> */}
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                            <li>
                                <Link href={'/'}><p className="mr-5 hover:text-[#a855f7]">Home</p></Link>
                            </li>
                            <li>
                                <Link href={'/about'}><p className="mr-5 hover:text-[#a855f7]">About</p></Link>
                            </li>
                            <li>
                                <Link href={'/projects'}><p className="mr-5 hover:text-[#a855f7]">Projects</p></Link>
                            </li>
                            <li>
                                <Link href={'/gallery'}><p className="mr-5 hover:text-[#a855f7]">Gallery</p></Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

            {/* <header className="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Still Motion Pictures</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <NavLink to={'/about'}><p class="mr-5 hover:text-gray-900">First Link</p></NavLink>
                        <NavLink to={'/about'}><p class="mr-5 hover:text-gray-900">First Link</p></NavLink>
                        <NavLink to={'/about'}><p class="mr-5 hover:text-gray-900">First Link</p></NavLink>
                    </nav>
                </div>
            </header> */}
        </>
    )
}

export default Navbar
