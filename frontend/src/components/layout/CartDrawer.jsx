import React from 'react'
import {IoMdClose} from "react-icons/io"
import CartContents from '../cart/CartContents'

const CartDrawer = ({ cartOpen, toggleCart }) => {

  return (
    <div className={`fixed top-0 right-0 width-3/4 sm:w-1/2 lg:w-1/3
    xl:w-1/4 h-full bg-white shadow-lg flex flex-col z-50 
    transform transition-transform duration-300
    ${cartOpen ? "translate-x-0" : "translate-x-full" }`}>

      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCart}>
          <IoMdClose className="h-6 w-6 text-slate-400 hover:text-slate-800 cursor-pointer" />
        </button>
      </div>

      {/* Cart Content */}
      <div className="flex flex-col flex-grow overflow-y-auto p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Your Bag</h2>
        {/* Component for cart items */}
        <CartContents />
      </div>

      <div className="p-4 bg-slate-100 sticky bottom-0">
        <button className="w-full p-2 bg-slate-800 text-gray-100 text-sm font-medium rounded-full 
        hover:bg-slate-700 cursor-pointer transition-colors duration-200 mb-2" >
          Checkout
        </button>
        <p className="text-xs text-slate-500 text-center tracking-tight" >
          Shipping & taxes calculated at checkout
        </p>
      </div>
    </div>
  )
}

export default CartDrawer