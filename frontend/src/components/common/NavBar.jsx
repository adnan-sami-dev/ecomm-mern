import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {HiOutlineUser, HiOutlineShoppingBag, HiOutlineSearch, HiOutlineMenu} from "react-icons/hi"
import Search from "./Search"
import CartDrawer from '../layout/CartDrawer'


const NavBar = () => {

    const [cartOpen, setCartOpen] = useState(false)
    const [navDrawerOpen, setNavDrawerOpen] = useState(false)

    {/* a funcion to help toggle the drawer on and off */}
    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen)
    }

    return (
    <div>
        <nav className="w-full flex flex-row justify-between backdrop-blur-sm bg-white/30 items-center py-3 px-10" >
            {/* Logo */}
            <div>
                <Link to="/" className="text-2xl font-bold" >
                    S.I.G.M.A
                </Link>
            </div>
            {/* Nav Links */}
            <div className="hidden md:flex space-x-4" >
                <Link to="#" className="text-slate-500 hover:text-black text-sm font-medium uppercase" >
                    Men
                </Link>
                <Link to="#" className="text-slate-500 hover:text-black text-sm font-medium uppercase" >
                    Women
                </Link>
                <Link to="#" className="text-slate-500 hover:text-black text-sm font-medium uppercase" >
                    Top Wear
                </Link>
                <Link to="#" className="text-slate-500 hover:text-black text-sm font-medium uppercase" >
                    Bottom Wear
                </Link>
            </div>
            {/* Icons */}
            <div className="flex flex-row items-center space-x-4" >
                {/* Search */}
                <Search />

                <Link to="#" className="text-slate-500 hover:text-black" >
                    {/* User Icon */}
                    <HiOutlineUser className="h-5 w-5" />
                </Link>

                <button className="relative text-slate-500 hover:text-black cursor-pointer" onClick={toggleCart}>
                    {/* Cart Icon */}
                    <HiOutlineShoppingBag className="h-5 w-5" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center" >
                        4
                    </span>
                </button>


                <button onClick={toggleNavDrawer}
                    className="md:hidden text-slate-500 hover:text-black flex flex-col space-y-1 align-items cursor-pointer" >
                    {/* Menu Icon for Mobile */}
                    <span className={`block w-4 h-0.5 bg-current transition-all ${navDrawerOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-4 h-0.5 bg-current transition-all ${navDrawerOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-4 h-0.5 bg-current transition-all ${navDrawerOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>

            </div>
        </nav>
        <CartDrawer cartOpen={cartOpen} toggleCart={toggleCart} />


        {/* Mobile Nav Drawer */}
        <div className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-400 ease-in-out ${navDrawerOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="container mx-auto flex flex-col items-center py-3 px-2">
                <Link to="#" className="block p-4 border-b border-gray-200 text-slate-500 hover:text-black hover:text-lg transition-all duration-300 ease-in-out text-sm font-medium uppercase">
                    Men
                </Link>
                <Link to="#" className="block p-4 border-b border-gray-200 text-slate-500 hover:text-black hover:text-lg transition-all duration-300 ease-in-out text-sm font-medium uppercase">
                    Women
                </Link>
                <Link to="#" className="block p-4 border-b border-gray-200 text-slate-500 hover:text-black hover:text-lg transition-all duration-300 ease-in-out text-sm font-medium uppercase">
                    Top Wear
                </Link>
                <Link to="#" className="block p-4 text-slate-500 hover:text-black hover:text-lg transition-all duration-300 ease-in-out text-sm font-medium uppercase">
                    Bottom Wear
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar