import { useMutation, useQueryClient } from "@tanstack/react-query";
import { paymentRequest, postPaymentProcess } from "./api";

export function usePurchaseFilm() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (details: paymentRequest) =>  postPaymentProcess(details) 
    })
}