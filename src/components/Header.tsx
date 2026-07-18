import React, { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Services from './customServices/Services'

const Header = () => {

    const [menu, setMenu] = useState<boolean>(false)

    const clickMenu = (): void => {
        setMenu(!menu)
    }

    return (
        <>
            <header className='relative px-4'>
                <div className='flex justify-between items-center w-full max-w-7xl mx-auto'>
                    <div>
                        <img className='block max-w-full' src="/logo.png" alt="logo" />
                    </div>

                    <button onClick={clickMenu} className='md:hidden'>
                        <i className={menu ? "fa-solid fa-xmark fa-2xl" : "fa-solid fa-bars fa-2xl"}></i>
                    </button>


                    <nav className={`absolute px-4 left-0 bg-white right-0 transition-all duration-300 ${menu ? 'top-[70px]' : 'top-[-400%]'} md:static`}>
                        <ul className='flex flex-col md:flex-row'>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block p-3 ${isActive ? 'text-[#E51938] border-b' : 'text-black'}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `block p-3 ${isActive ? 'text-[#E51938] border-b' : 'text-black'}`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/pricing"
                                    className={({ isActive }) =>
                                        `block p-3 ${isActive ? 'text-[#E51938] border-b' : 'text-black'}`
                                    }
                                >
                                    Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/pages"
                                    className={({ isActive }) =>
                                        `block p-3 ${isActive ? 'text-[#E51938] border-b' : 'text-black'}`
                                    }
                                >
                                    Pages
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) =>
                                        `block p-3 ${isActive ? 'text-[#E51938] border-b' : 'text-black'}`
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block p-3 ${isActive ? 'text-[#E51938] border-b' : 'text-black'}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header >

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                {/* <Route path='/pricing' element={<Pricing />} />
                <Route path='/pages' element={<Pages />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} /> */}
            </Routes>
        </>
    )
}

export default Header