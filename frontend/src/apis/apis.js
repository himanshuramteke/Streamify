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

export const getAuthUserApi = async () => {
    try {
        const response = await axiosInstance.get("/auth/me");
        return response.data;
    } catch (error) {
        console.log("Error in getAuthUser Api", error.message);
        throw error;
    }
}

export const completeOnboardingApi = async (userData) => {
    try {
        const response = await axiosInstance.post("/auth/onboarding", userData);
        return response.data;
    } catch (error) {
        console.log("Error in completeOnboarding Api", error.message);
        throw error;
    }
}