import { Navigate } from 'react-router-dom';
import FullPageImage from "../../Header/Header"
import FullPageImage1 from "../../Header/Header1"
import FullPageImage2 from "../../Header/Header2"
import FullPageImage3 from "../../Header/Header3"
import FullPageImage4 from "../../Header/Header4"
import FullPageImage5 from "../../Header/Header5"
import FullPageImage6 from "../../Header/Header6"
import "../../Header/Header.css"

const authProtectedRoutes = [

    { path: "/home", component: <FullPageImage/> },
    { path: "/", exact: true ,component: <Navigate to="/home" /> },
    { path: "/", component: <Navigate to="/home" /> },


    {path:"/home", component: <FullPageImage1/>},

    {path:"/about", component: <FullPageImage2/>},
    {path:"/service", component: <FullPageImage3/>},
    {path:"/caseStudies", component: <FullPageImage4/>},
    {path:"/contact", component: <FullPageImage5/>},
    {path:"/SignUp", component: <FullPageImage6/>}
    
]
export {authProtectedRoutes}