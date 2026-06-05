import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {HiOutlineUser, HiOutlineShoppingBag, HiOutlineSearch, HiOutlineMenu} from "react-icons/hi"
import Search from "./Search"
import CartDrawer from '../layout/CartDrawer'


const NavBar = () => {

    const [cartOpen, setCartOpen] = useState(false)
    
    {/* a funcion to help toggle the drawer on and off */}
    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }

    return (
    <div>
        <nav className="container mx-auto flex flex-row justify-between items-center py-3 px-2" >
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

                <button className="md:hidden text-slate-500 hover:text-black" >
                    {/* Menu Icon for Mobile */}
                    <HiOutlineMenu className="h-5 w-5" />
                </button>
            </div>
        </nav>
        <CartDrawer cartOpen={cartOpen} toggleCart={toggleCart} />
    </div>
  )
}

export default NavBar