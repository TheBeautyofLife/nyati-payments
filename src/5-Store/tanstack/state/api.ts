import { AxiosError } from "axios";
import apiRequest from "../../../3-Middleware/apiRequest";

interface ErrorResponse {
    message: string;
}
export interface paymentRequest {
    userId: string;
    videoId: string;
    option: string;
    phoneCode: string;
    paymentNumber: string;

}
interface paymentRequestResponse {
    orderTrackingId: string;

}

interface paymentStatusResponse {
    status: string;

}

export const postPaymentProcess = async (details: paymentRequest): Promise<paymentRequestResponse>=> {
    try {
        let {userId, videoId, ...rest} = details
        const response = await apiRequest.post<paymentRequestResponse>(
            `/film/purchase/${userId}/${videoId}`,
            rest
          );
           //console.log("response", response.data);
           return response.data
    } catch (error) {
        const axiosError = error as AxiosError<ErrorResponse>
        
        throw axiosError.response?.data ?? { message: "An unknown error occurred" };
    }
}

export const getPaymentStatus = async (orderId: string): Promise<paymentStatusResponse> => {
    try {
        const response = await apiRequest.post<paymentStatusResponse>(
            `/admin/auth/register/${orderId}`,
           
          );
           //console.log("response", response.data);
           return response.data
    } catch (error) {
        const axiosError = error as AxiosError<ErrorResponse>
        
        throw axiosError.response?.data ?? { message: "An unknown error occurred" };
    }
}