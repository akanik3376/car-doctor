import { useContext } from "react";
import { AuthContext } from "../Provoidor/AuthProvidor";

const useAuth = () => {
    const auth = useContext(AuthContext)

    return auth
};

export default useAuth;