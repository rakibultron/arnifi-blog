// import axios from "@/lib/axiosInstance";
// import { create } from "zustand";



// const blogStore = create((set) => ({
//     blogs: [],
//     getBlogs: async () => {
//         try {

//             await axios.get("/blogs").then((res, err) => {
//                 console.log("Zustand blog res ====>>>", res.data)
//                 set({ blogs: res.data.blogs });
//             })
//             // await axios
//             //     .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/analytics/homepage`, {
//             //         withCredentials: true,
//             //     })
//             //     .then((res) => {
//             //         console.log("analytics", res);
//             //         if (res.status === 200) {
//             //             set({ homepageAnalyticsData: res.data });
//             //         }
//             //     });
//         } catch (error) {
//             console.log(error);
//         }
//     },
//     createBlog: async (newBlog, navigate) => {
//         try {
//             const response = await axios.post("/blogs", newBlog);
//             if (response.status === 201) {
//                 console.log("Blog created successfully", response.data);

//                 set((state) => ({
//                     blogs: [...state.blogs, response.data.blog],
//                 }));

//                 const { blogs } = blogStore.getState();
//                 navigate('/')
//                 console.log({ blogs });
//             }
//         } catch (error) {
//             console.error("Error creating blog", error);
//         }
//     },
//     myBlogs: async () => {
//         try {

//             await axios.get("/blogs/user").then((res, err) => {
//                 console.log("Zustand blog res ====>>>", res.data)
//                 set({ blogs: res.data.blogs });
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     },
// }));

// export default blogStore;



import axios from "@/lib/axiosInstance";
import { create } from "zustand";

const blogStore = create((set) => ({
    blogs: [],
    // getBlogs: async () => {
    //     try {
    //         const response = await axios.get("/blogs");
    //         console.log("Zustand blog res ====>>>", response.data);
    //         set({ blogs: response.data.blogs });
    //     } catch (error) {
    //         console.log("Error fetching blogs", error);
    //     }
    // },

    getBlogs: async (filters = {}) => {
        try {
            // Construct query params if filters are provided
            const queryParams = new URLSearchParams(filters).toString();

            const response = await axios.get(`/blogs?${queryParams}`);
            console.log("Zustand blog res ====>>>", response.data);
            set({ blogs: response.data.blogs });
        } catch (error) {
            console.log("Error fetching blogs", error);
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
                navigate("/");
            }
        } catch (error) {
            console.error("Error creating blog", error);
        }
    },
    myBlogs: async () => {
        try {
            const response = await axios.get("/blogs/user");
            console.log("Zustand blog res ====>>>", response.data);
            set({ blogs: response.data.blogs });
        } catch (error) {
            console.log("Error fetching user blogs", error);
        }
    },
    deleteBlog: async (blogId) => {
        try {
            const response = await axios.delete(`/blogs/${blogId}`);
            if (response.status === 200) {
                console.log("Blog deleted successfully", response.data);
                const deletedBlogId = response.data.data._id;
                set((state) => ({
                    blogs: state.blogs.filter((blog) => blog._id !== deletedBlogId),
                }));
            }
        } catch (error) {
            console.error("Error deleting blog", error);
        }
    },

}));

export default blogStore;
