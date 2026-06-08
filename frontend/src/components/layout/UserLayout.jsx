import Header from "../common/Header"
import Footer from "../common/Footer"
import { Outlet } from "react-router-dom"

const UserLayout = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* Main Content */}
            <div>
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default UserLayout