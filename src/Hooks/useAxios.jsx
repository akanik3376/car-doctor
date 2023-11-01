import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosLink = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})


const useAxios = () => {
    const { logoutUser } = useAuth()
    const Navigate = useNavigate()
    useEffect(() => {
        axios.interceptors.response.use(res => {
            return res;
        })
        error => {

            if (error.response.status === 401 || error.response.status === 403) {
                logoutUser()
                    .then(result => {
                        console.log(result)
                        Navigate('/login')
                    })
                    .catch(err => {
                        console.log(err)

                    })
            }
        }
    }, [logoutUser, Navigate])

    return axiosLink
};

export default useAxios;