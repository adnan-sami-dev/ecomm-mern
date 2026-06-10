import React from 'react'
import woman_collection from '../../assets/images/woman_collection.jpg'
import male_collection from '../../assets/images/male_collection.jpg'
import collection_section_br from '../../assets/images/collection_section_br.jpg'

const Collections = () => {
  return (
    <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative">
                <button className="z-1 text-base lg:text-lg xl:text-xl bg-white/50 backdrop-blur-sm py-2 px-5 hover:bg-white/75 cursor-pointer absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span>Her's</span>
                </button>
                <div className="overflow-hidden">
                    <div className="w-full h-auto transition-transform duration-300 hover:scale-105">
                        <div className="absolute inset-0 bg-black/50 hover:bg-black/10 cursor-pointer"></div>
                        <img src={woman_collection} alt="Collection" /> 
                    </div>
                </div>
            </div>
            <div className="relative">
                <button className="z-1 text-base lg:text-lg xl:text-xl bg-white/50 backdrop-blur-sm py-2 px-5 hover:bg-white/75 cursor-pointer absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span>His</span>
                </button>
                <div className="overflow-hidden">
                    <div className="w-full h-auto transition-transform duration-300 hover:scale-105">
                        <div className="absolute inset-0 bg-black/50 hover:bg-black/10 cursor-pointer"></div>
                        <img src={male_collection} alt="Collection" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collections