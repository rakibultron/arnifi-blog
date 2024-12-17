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


    return { userLogin, loading, error };
};

export default useAuth;
