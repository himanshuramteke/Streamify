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

export const loginApi = async (loginData) => {
    try {
        const response = await axiosInstance.post("/auth/login", loginData);
        return response.data;
    } catch (error) {
        console.log("Error in loginApi", error.message);
        throw error;
    }
}

export const logoutApi = async () => {
    try {
        const response = await axiosInstance.post("/auth/logout");
        return response.data;
    } catch (error) {
        console.log("Error in logoutApi", error)
        throw error;
    }
}

export const getAuthUserApi = async () => {
    try {
        const response = await axiosInstance.get("/auth/me");
        return response.data;
    } catch (error) {
        console.log("Error in getAuthUser Api", error.message);
        return null;
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

export const getUsersFriendsApi = async () => {
    try {
        const response = await axiosInstance.get("/users/friends");
        return response.data;
    } catch (error) {
        console.log("Error in getUsers friends", error);
        throw error;
    }
}

export const getRecommendedUsersApi = async () => {
    try {
        const response = await axiosInstance.get("/users");
        return response.data;
    } catch (error) {
        console.log("Error in getRecommended Users", error);
        throw error;
    }
}

export const getOutgoingFriendReqsApi = async () => {
    try {
        const response = await axiosInstance.get("/users/outgoing-friend-requests");
        return response.data;
    } catch (error) {
        console.log("Error in getOutgoingFriendsReqs", error);
        throw error;
    }
}

export const sendFriendRequestApi = async (userId) => {
  try {
    const response = await axiosInstance.post(`/users/friend-request/${userId}`);
    return response.data;
  } catch (error) {
    console.log("Error in sendFriendRequest", error);
    throw error;
  }
}

export const getFriendRequestsApi = async () =>  {
  try {
    const response = await axiosInstance.get("/users/friend-requests");
    return response.data;
  } catch (error) {
    console.log("Error in getFriendRequests", error);
    throw error;
  }
}

export const acceptFriendRequestApi = async (requestId) => {
  try {
    const response = await axiosInstance.put(`/users/friend-request/${requestId}/accept`);
    return response.data;
  } catch (error) {
    console.log("Error in acceptFriendRequest", error);
    throw error;
  }
}

export const getStreamTokenApi = async () => {
    try {
        const response = await axiosInstance.get("/chat/token");
        return response.data;
    } catch (error) {
        console.log("Error in getStreamToken Api", error);
        throw error;
    }
}