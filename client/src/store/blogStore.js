
import { toast } from "react-toastify";
import axios from "@/lib/axiosInstance";
import { create } from "zustand";

const blogStore = create((set) => ({
    blogs: [],
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
                toast.success(response.data.message)
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
                console.log("Blog deleted successfully", response.data.message);
                toast.success(response.data.message)
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
