import { useQuery } from "@tanstack/react-query";
import { getPaymentStatus } from "./api";

export function useGetPAymentStatus(orderId: string) {
    return useQuery({
        queryKey: ["paymentStatus"],
        queryFn: () => getPaymentStatus(orderId),
        
    });
}
 
