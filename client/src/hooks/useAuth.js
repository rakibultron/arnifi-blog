import { useState } from "react";
import axios from '@/lib/axiosInstance'

import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
    const navigate = useNavigate();
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
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

    const userValidate = () => {
        const token = localStorage.getItem("token");

        if (!token) {
            console.warn("No token found");

            navigate("/auth/login");
            return false;
        }

        try {
            const decoded = jwtDecode(token);
            const currentTime = Math.floor(Date.now() / 1000);

            if (decoded.exp && decoded.exp > currentTime) {
                console.log("Token is valid.");

                return true;
            } else {
                console.warn("Token has expired.");

                navigate("/auth/login");
                return false;
            }
        } catch (error) {
            console.error("Failed to decode token:", error.message);

            navigate("/auth/login");
            return false;
        }
    };

    return { userLogin, userRegister, userValidate, loading, error };
};

export default useAuth;