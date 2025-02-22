import { Routes, Route } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Landing from "../pages/Shared/LandingPage";
import Login from "../pages/Shared/Login";
import SignUp from "../pages/Shared/Signup";
import Clientroutes from "./Clientroutes";
import Adminroutes from "./Adminroutes";
import Superadmin from "./Superadmin";

export default function AppRoutes(){

    const {userToken,userData} = useContext(AuthContext)


    return(
        <>     
        
        {userToken ?
            (
                <div className="flex">
                {/* Sidebar */}
                <div className="hidden md:block md:w-64 bg-gray-100"> {/* Adjust this if you have a Sidebar */}
                {/* Sidebar contents */}
                </div>

                {/* Main Content */}
                <div className="flex-grow">
                {userData?.userDetails.role.toLowerCase() === 'student' && <Clientroutes/>}
                {userData?.userDetails.role.toLowerCase() === 'admin' && <Adminroutes/>}
                {userData?.userDetails.role.toLowerCase() === 'superadmin' && <Superadmin/>}
                </div>
            </div>
    
            ) : (
                <Routes>
                    <Route path="/*" element = {<Landing />} />
                    <Route path="/login" element = {<Login />}/>
                    <Route path="/signup" element = {<SignUp/>} />
                </Routes>
            )
        }

        </>
        
    )
}