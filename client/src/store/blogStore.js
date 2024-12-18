import axios from "@/lib/axiosInstance";
import { create } from "zustand";



const blogStore = create((set) => ({
    blogs: [],
    getBlogs: async () => {
        try {

            await axios.get("/blogs").then((res, err) => {
                console.log("Zustand blog res ====>>>", res.data)
                set({ blogs: res.data.blogs });
            })
            // await axios
            //     .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/analytics/homepage`, {
            //         withCredentials: true,
            //     })
            //     .then((res) => {
            //         console.log("analytics", res);
            //         if (res.status === 200) {
            //             set({ homepageAnalyticsData: res.data });
            //         }
            //     });
        } catch (error) {
            console.log(error);
        }
    },
}));

export default blogStore;