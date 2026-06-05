import CartDrawer from "../layout/CartDrawer"
import TopBar from "../layout/TopBar"
import NavBar from "./NavBar"

const Header = () => {
    return (
        <div className="border-b border-gray-300" >
            {/* Top Bar */}
            <TopBar />
            {/* Nav Bar */}
            <NavBar />
            {/* Cart Drawer */}
        </div>
    )
}

export default Header