import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signupApi } from "../apis/apis";

export const useSignup = () => {
    const queryClient = useQueryClient();
    const {
        mutate,
        isPending,
        error
    } =  useMutation({
        mutationFn: signupApi,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
    });

    return {
        signupMutation: mutate,
        isPending,
        error
    }
}