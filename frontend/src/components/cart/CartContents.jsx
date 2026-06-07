import React from 'react'
import {RiDeleteBin6Line} from "react-icons/ri"
import { useState } from 'react'

const CartContents = () => {
  let [cartItems, setCartItems] = useState([
    { id: 1,
      name: 'Product 1',
      size: 'M',
      color: 'Red',
      price: 19.99,
      quantity: 2,
      image: 'https://picsum.photos/id/1/200/300'
    },
    { id: 2,
      name: 'Product 2',
      size: 'L',
      color: 'Blue',
      price: 29.99,
      quantity: 1,
      image: 'https://picsum.photos/id/5/200/300'
    }
  ])

  function deleteItem(itemId) {
    setCartItems(cartItems => cartItems.filter(item => item.id !== itemId))
  }

  function updateCartItem(itemId, change) {
    setCartItems(cartItems =>
      cartItems.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + change;
          if (newQuantity <= 0) {
            return null; // Mark for deletion
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean) // Remove null entries (deleted items)
    );
  }

  return (
    <div>

      {cartItems.map(item => (

        <div key={item.id} className="border-b border-slate-200 py-4 flex flex-row">

          {/* Image */}
          <div className="w-1/4 md:h-20 sm:h-10 bg-slate-100 rounded-md overflow-hidden mr-4">
            <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
          </div>

          {/* Details and Quantity */}
          <div className="w-3/4 text-xs flex flex-row justify-between">

            {/* Details and Quantity adjust buttons */}
            <div className="flex flex-col">
              <div className="flex-grow">
                <h3>{item.name}</h3>
                <p className="text-slate-500"> size: {item.size} | color: {item.color} </p>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateCartItem(item.id, -1)}
                  className="cursor-pointer bg-slate-300 hover:bg-slate-400 text-slate-700 font-bold p-2 rounded-l">-</button>

                <span className="mx-2">{item.quantity}</span>

                <button  onClick={() => updateCartItem(item.id, 1)}
                  className="cursor-pointer bg-slate-300 hover:bg-slate-400 text-slate-700 font-bold p-2 rounded-r">+</button>
              </div>
            </div>

            {/* Price and Delete */}
            <div className="flex flex-col items-end">
              <p className="flex-grow">${ (item.quantity * item.price).toFixed(2) }</p>
              <button onClick={() => deleteItem(item.id)}>
                <RiDeleteBin6Line className="h-5 w-5 text-slate-400 hover:text-red-800 cursor-pointer" />
              </button>
            </div>

          </div>

        </div>

      ))}

    </div>
  )
}

export default CartContents