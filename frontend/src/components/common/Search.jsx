import React from 'react'
import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { HiMiniXMark } from 'react-icons/hi2'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [formOpen, setFormOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Implement search logic here, e.g., navigate to search results page
        console.log("Searching for:", searchTerm)
        setFormOpen(false) // Close the form after submission
        setSearchTerm('') // Clear the search input after submission
    }

    return (
        <div className={`flex items-center justify-center ${formOpen ? 'absolute top-0 left-0 w-full z-50 h-24 bg-gray-300' : 'w-auto'}`} >
            {
                formOpen ? (
                    <form className="relative flex items-center justify-center w-full" onSubmit={handleSubmit} >
                        <div className="relative w-1/2" >
                            <input className="bg-gray-100 px-4 py-2 rounded-full focus:outline-none w-full"
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit" className="absolute top-3 right-3 cursor-pointer text-slate-500 hover:text-black" >
                                <HiOutlineSearch />
                            </button>

                            <button type="button" className="absolute top-3 right-10 cursor-pointer text-slate-500 hover:text-black" onClick={() => setFormOpen(false)} >
                                {/* Close Icon */}
                                <HiMiniXMark />
                            </button>
                        </div>
                    </form>
                ) : (
                    <button onClick={() => setFormOpen(!formOpen)} >
                        <HiOutlineSearch className="h-5 w-5 cursor-pointer text-slate-500 hover:text-black"/>
                    </button>
                )
            }
        </div>
    )
}

export default Search