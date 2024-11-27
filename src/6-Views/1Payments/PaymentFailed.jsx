import React from "react";
import { Icon } from "@iconify/react";
import Buttons from "../../2-Components/Buttons/Buttons";

const PaymentFailed = () => {
  return (
    <div className="flex flex-col  items-center text-whites-40  max-w-[287px] gap-40">
        <div className="flex flex-col gap-5"> 
        <div className="flex flex-col items-center gap-4 w-full">
        <Icon
          icon="arcticons:ad-block"
          className=" text-[#E20612] flex justify-center items-center w-[40px] h-[40px] border-none border-[0.79px] "
        />
        <h1 className="text-[#E20612] font-[Inter-SemiBold] text-2xl  font-bold text-center lg:text-left">
          Payment Failed
        </h1>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80  ">
        Your payment failed because you may have insufficient funds. 
        </p>

        <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80  ">
        You can try the payment again here. Be sure to top-up the right amount before submitting your  transfer.
        </p>

       
      </div>

        </div>
      

      <div className="w-full relative flex justify-center items-center ">
       <Buttons className="w-full rounded-full"> Retry</Buttons>
      </div>
    </div>
  )
}

export default PaymentFailed