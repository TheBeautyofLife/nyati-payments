import React from "react";
import { Icon } from "@iconify/react";
import CustomLoader from "../../2-Components/Modals/CustomLoader";

const PaymentPending = () => {
  return (
    <div className="flex flex-col  items-center text-whites-40 gap-4 max-w-[287px]">
    <div className="flex flex-col items-center gap-4 w-full">
      <Icon
        icon="arcticons:chrono24"
        className=" text-[#FEAF38] flex justify-center items-center w-[40px] h-[40px] border-none border-[0.79px] "
      />
      <h1 className="text-[#FEAF38] font-[Inter-SemiBold] text-2xl  font-bold text-center lg:text-left">
        Payment Pending
      </h1>
    </div>

    <div className="flex flex-col gap-6">
      <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80  ">
        Hang tight We're verifying your transaction for Film title
      </p>

      <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80  ">
        Once the payment is complete, you'll be automatically directed to the
        confirmation page.
      </p>

      <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80 ">
        If you have any inquiries, reach out to us at:
      </p>

      <p className="text-[#FFFAF6] text-center font-[Inter-Bold] text-base ">
        info@nyatimotionpictures.com
      </p>
    </div>

    <div className="w-full relative flex justify-center items-center mt-10">
      <div className="relative flex justify-center items-center ">
        <CustomLoader />
      </div>
    </div>
  </div>
  )
}

export default PaymentPending