import { Outlet } from "react-router-dom";
import LayoutNavbar from "../components/LayoutNavbar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <LayoutNavbar />
            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;