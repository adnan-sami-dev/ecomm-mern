import React, { useState } from 'react'

const CartDrawer = () => {

  const {cartOpen, setCartOpen} = useState(false)

  {/* a funcion to help toggle the drawer on and off */}
  const toggleCart = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <div className={`fixed top-0 right-0 width-3/4 sm:w-1/2 
    md:w-1/4 h-full bg-white shadow-lg flex flex-col z-50
    ${cartOpen ? "translate-x-0" : "translate-x-full" }`}>

      {/* Close button */}
      <div>
        <button>
          
        </button>
      </div>
    </div>
  )
}

export default CartDrawer