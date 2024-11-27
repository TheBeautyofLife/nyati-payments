import React, { useCallback } from 'react'
import CustomLoader from '../../2-Components/Modals/CustomLoader'

import PaymentFailed from './PaymentFailed'
import PaymentTimedout from './PaymentTimedout'
import PaymentSuccessful from './PaymentSuccessful'
import PaymentPending from './PaymentPending'
import ProcessingPay from './ProcessingPay'

const PaymentValidation = () => {
  const [status, setStatus] = React.useState(null);

  const checkPurchaseStatus = useCallback(
    async({orderTrackingId}) => {

    }
  )
  return (
    <div className="bg-secondary-800 text-whites-50 min-h-[100vh] w-full flex flex-col items-center justify-center gap-[20px] relative">
      
    {/* <PaymentPending/> */}
    {/* <PaymentFailed /> */}
    {/* <PaymentTimedout /> */}
    {/* <PaymentSuccessful /> */}
    <ProcessingPay />
    </div>
  )
}

export default PaymentValidation