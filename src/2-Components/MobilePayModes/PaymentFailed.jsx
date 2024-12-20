import React from 'react'
import SuccessImg from "../../1-Assets/payment_success.svg"
import CustomLoader from '../Modals/CustomLoader'
import Buttons from "../Buttons/Buttons.tsx";
import { useNavigate } from 'react-router-dom';

const PaymentFailed = ({ responseVals, tranactId }) => {
    let navigate = useNavigate()
  return (
      <div className="bg-[#FFFFFF] flex flex-col gap-[16px] max-w-[400px] py-8 px-5 sm:px-14">
          {/** image & title */}
          <div className="flex w-full flex-col gap-[10px] sm:gap-[16px] items-center">
              <div className="w-[57px] h-[57px] lg:w-[57px] lg:h-[57px] relative flex rounded-full bg-[#21BE79] p-3">
                  <img src={SuccessImg} alt="" className="object-cover w-full h-full" />
              </div>

              <div className="font-[Inter-Medium] text-base md:text-base lg:text-3xl text-center  text-[#141118]">
                  <p>Donation Failed</p>

              </div>
          </div>
          {/** processing loader && buttons */}
          <div className="flex flex-col gap-[50px]">
              <div className="flex flex-col gap-[10px]">

                  <div className="flex flex-col items-center justify-between h-max py-5 px-4 gap-4 bg-[#F5F4F5] text-[#8B8789]">
                      <p className="font-[Inter-SemiBold] text-[15px]  ">
                          Transaction Number : {tranactId !== null && tranactId ? tranactId : ""}
                      </p>
                      <p className="font-[Inter-SemiBold] text-[15px]  ">
                          Reason : {responseVals !== null && responseVals.paymentFailed ? responseVals.paymentFailed : ""}
                      </p>
                  </div>

                  {/** inputs */}
                  <div className="py-[0px] px-0 ">
                      <p className="font-[Inter-SemiBold] text-[15px] text-[#141118] text-opacity-70 ">
                          Please check why this transaction failed and try again
                      </p>
                  </div>
              </div>

              <div className="flex flex-row gap-[10px]">
                 
                  <Buttons onClick={() => navigate("/donate")} className="w-full rounded-full font-[Roboto-Medium] text-xs sm:text-base bg-transparent hover:bg-transparent border border-primary-500 text-primary-500 text-opacity-30 border-opacity-30 hover:border-opacity-100 hover:text-primary-500">
                      Cancel & Return
                  </Buttons>
              </div>
          </div>
      </div>

  )
}

export default PaymentFailed