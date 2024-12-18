import { useState } from "react";
import axios from '@/lib/axiosInstance'

import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const userLogin = async (url, body, { headers = {}, params = {}, ...restOptions } = {}) => {
        try {
            setLoading(true);
            setError(null);
            const res = await axios.post(url, body, { headers, params, ...restOptions });
            navigate("/");
            console.log("User login hook ====>", { res });
            return res.data;
        } catch (error) {
            setError(error);
            throw error;
        }
    };

    const userRegister = async (url, body, { headers = {}, params = {}, ...restOptions } = {}) => {
        try {
            const res = await axios.post(url, body, { headers, params, ...restOptions });
            navigate("/auth/login");
            console.log("User register hook ====>", { res })
        } catch (error) {

            console.log({ error });
            setError(error);
            throw error;
        }
    };


    // const userValidate = () => {
    //     const token = Cookies.get('token')
    //     const decoded = jwtDecode(token);

    //     console.log({ token, decoded })
    //     // if (cookieValue && isCookieValid(cookieValue)) {
    //     //     setIsAuthenticated(true);
    //     //     return true;
    //     // }
    //     // setIsAuthenticated(false);
    //     // return false;
    // };


    const userValidate = () => {
        const token = Cookies.get("token");
        setLoading(true);

        if (!token) {
            console.log("No token found");
            setIsAuthenticated(false);
            setLoading(false); // Always set loading to false
            return false;
        }

        try {
            const decoded = jwtDecode(token);
            const currentTime = Math.floor(Date.now() / 1000);

            if (decoded.exp && decoded.exp > currentTime) {
                console.log("Token is valid.");
                setIsAuthenticated(true);
            } else {
                console.log("Token has expired.");
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error("Failed to decode token:", error.message);
            setIsAuthenticated(false);
        } finally {
            // Always set loading to false at the end
            setLoading(false);
        }
    };

    return { userLogin, userRegister, userValidate, isAuthenticated, loading, error };
};

export default useAuth;
