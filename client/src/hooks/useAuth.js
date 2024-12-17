import { useState } from "react";
import axios from '@/lib/axiosInstance'

import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const navigate = useNavigate();
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


    return { userLogin, userRegister, loading, error };
};

export default useAuth;
