import { useQuery } from "@tanstack/react-query";
import { getDonationStatus, getPaymentStatus } from "./api";

export function useGetPaymentStatus(orderId: string) {
    return useQuery({
        queryKey: ["paymentStatus"],
        queryFn: () => getPaymentStatus(orderId),
        
    });
}

export function useGetDonationStatus(orderId: string) {
    return useQuery({
        queryKey: ["donationStatus"],
        queryFn: () => getDonationStatus(orderId),
        
    });
}
 
