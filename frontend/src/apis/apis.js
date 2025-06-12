import { axiosInstance } from "../config/axiosConfig"

export const signupApi = async (signupData) => {
    try {
        const response = await axiosInstance.post("/auth/signup", signupData);
        return response.data;
    } catch (error) {
        console.log("Error in signupApi", error.message);
        throw error;
    }
}