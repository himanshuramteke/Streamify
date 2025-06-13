import { useMutation, useQueryClient } from "@tanstack/react-query"
import { loginApi } from "../apis/apis";

export const useLogin =  () => {
    const queryClient = useQueryClient();

    const { mutate, isPending, error} = useMutation({
       mutationFn: loginApi,
       onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"]}),
    });

    return {
        isPending,
        error,
        loginMutation: mutate
    }
}