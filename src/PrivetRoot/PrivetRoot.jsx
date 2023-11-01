/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provoidor/AuthProvidor";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoot = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    // console.log(location?.pathname)

    if (loading) {
        return <div className="flex justify-center items-center h-[100vh] w-[100vw] my-auto">
            <span className="loading loading-spinner text-secondary"></span>
        </div>

    }

    if (user?.email) {
        return children;
    }
    return <Navigate state={location?.pathname} to='/login' replace></Navigate>
};

export default PrivetRoot;