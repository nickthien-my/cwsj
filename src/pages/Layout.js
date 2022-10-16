import { Outlet } from "react-router-dom";
import LayoutNavbar from "../components/LayoutNavbar";

const Layout = () => {
    return (
        <>
            <LayoutNavbar />
            <Outlet />
        </>
    )
};

export default Layout;