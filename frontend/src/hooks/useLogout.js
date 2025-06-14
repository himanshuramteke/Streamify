import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logoutApi } from "../apis/apis";

export const useLogout = () => {
    const queryClient = useQueryClient();
    
    const {
        mutate: logoutMutation,
        isPending,
        error
    } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
    });

    return {
        logoutMutation, 
        isPending, 
        error
    }
}