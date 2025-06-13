import { useQuery } from "@tanstack/react-query"
import { getAuthUserApi } from "../apis/apis"

export const useAuthUser = () => {
    const authUser = useQuery({
        queryKey: ["authUser"],
        queryFn: getAuthUserApi,
        retry: false, //auth check
    });

    return {
        isLoading: authUser.isLoading,
        authUser: authUser.data?.user
    };
}