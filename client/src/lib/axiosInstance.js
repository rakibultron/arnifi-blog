import Axios from 'axios'

const axios = Axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_API_BASE,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios