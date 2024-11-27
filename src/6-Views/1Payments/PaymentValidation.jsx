import React from 'react'
import CustomLoader from '../../2-Components/Modals/CustomLoader'
import ProcessingPay from './ProcessingPay'
import PaymentFailed from './PaymentFailed'
import PaymentTimedout from './PaymentTimedout'
import PaymentSuccessful from './PaymentSuccessful'
import PaymentPending from './PaymentPending'

const PaymentValidation = () => {
  return (
    <div className="bg-secondary-800 text-whites-50 min-h-[100vh] w-full flex flex-col items-center justify-center gap-[20px] relative">
      
    <PaymentPending/>
    {/* <PaymentFailed /> */}
    {/* <PaymentTimedout /> */}
    {/* <PaymentSuccessful /> */}
    {/* <ProcessingPay /> */}
    </div>
  )
}

export default PaymentValidation