import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { useMediaQuery, useTheme } from "@mui/material";

const PrivateRoute = () => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("md"))
    return <>
        <Header/>
        <Sidebar/>
        <div style={{marginLeft: 60, marginTop: mobile ? 116 : 57}}>
            <Outlet/>
        </div>
    </>
}

export default PrivateRoute;