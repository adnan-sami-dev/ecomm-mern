import React from 'react'
import {IoMdClose} from "react-icons/io"

const CartDrawer = ({ cartOpen, toggleCart }) => {

  return (
    <div className={`fixed top-0 right-0 width-3/4 sm:w-1/2 
    md:w-1/4 h-full bg-white shadow-lg flex flex-col z-50 
    transform transition-transform duration-300
    ${cartOpen ? "translate-x-0" : "translate-x-full" }`}>

      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCart}>
          <IoMdClose className="h-6 w-6 text-slate-400 hover:text-slate-800 cursor-pointer" />
        </button>
      </div>

      {/* Cart Content */}
      
    </div>
  )
}

export default CartDrawer