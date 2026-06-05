import {TbBrandMeta} from "react-icons/tb"
import {IoLogoInstagram} from "react-icons/io5"
import {RiTwitterXLine} from "react-icons/ri"

const TopBar = () => {
    return (
        <div className="bg-slate-700 text-white " >
            <div className="container mx-auto flex flex-row justify-between items-center py-2 px-2" >
                
                
                {/* Socials */}
                <div className="hidden md:flex flex-row items-center gap-4">
                    <a href="#" className="hover:text-red-300" >
                        <TbBrandMeta className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-red-300" >
                        <IoLogoInstagram className="h-4 w-4" />
                    </a>
                    <a href="#" className="hover:text-red-300" >
                        <RiTwitterXLine className="h-4 w-4" />
                    </a>
                </div>


                {/* Text */}
                <div className="text-sm text-center flex-grow" >
                    <span>Free Shipping on Orders Over $50!</span>
                </div>


                {/* Buttons */}
                <div className="hidden md:block text-sm">
                    <a href="tel:+1234567890" className="hover:text-red-300" >
                        Call Us
                    </a>
                </div>


            </div>
        </div>
    )
}

export default TopBar