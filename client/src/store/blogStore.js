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
    createBlog: async (newBlog, navigate) => {
        try {
            const response = await axios.post("/blogs", newBlog);
            if (response.status === 201) {
                console.log("Blog created successfully", response.data);

                set((state) => ({
                    blogs: [...state.blogs, response.data.blog],
                }));

                const { blogs } = blogStore.getState();
                navigate('/')
                console.log({ blogs });
            }
        } catch (error) {
            console.error("Error creating blog", error);
        }
    },
}));

export default blogStore;