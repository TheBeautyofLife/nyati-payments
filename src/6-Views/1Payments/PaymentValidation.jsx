import React, { useCallback, useEffect, useState } from 'react'
import CustomLoader from '../../2-Components/Modals/CustomLoader'

import PaymentFailed from './PaymentFailed'
import PaymentTimedout from './PaymentTimedout'
import PaymentSuccessful from './PaymentSuccessful'
import PaymentPending from './PaymentPending'

import { useGetPaymentStatus } from '../../5-Store/tanstack/state/queries'

const PaymentValidation = () => {
  //const [isLoading, setIsLoading] = useState(false);
  const [orderTrackingId, setOrderTrackingId] = useState('');
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [transaction, setTransaction] = useState(null);

  const paystatusMutation = useGetPaymentStatus()

  React.useEffect(() => {
    let orderId= localStorage.getItem('orderTrackingId');
    if(orderId){
      setOrderTrackingId(orderId);
      //checkPurchaseStatus({orderTrackingId})
    }
  }, [])

  const checkPurchaseStatus = useCallback(({orderTrackingId}) => {
    setCheckingStatus(true);
    paystatusMutation.mutate(orderTrackingId, {
      onSuccess: (data) => {
        if(data?.status === "SUCCESSFUL" ){
          setErrorMessage('');
        setCheckingStatus(false);
        setStatus(data?.status);
        setTransaction(data?.transaction);
        }
        setErrorMessage('');
        setStatus(data?.status);
       
      },
      onError: (error) => {
        setErrorMessage(error?.message);
        setCheckingStatus(false);
       // setStatus(error?.message);
      },

    })
    }
  );

  useEffect(() => {
  if(checkingStatus && orderTrackingId){
    const interval = setInterval(()=>{

      checkPurchaseStatus({
        orderTrackingId
      })
    }, 20000);

    return () => clearInterval(interval)
  }
  }, [checkingStatus, checkPurchaseStatus, orderTrackingId]);





  const DisplayContainer = React.memo(({status}) => {
    const renderSwitch = useCallback((status)=> {
      let statusLower = status ? status.toLowerCase() : '';
      switch (statusLower) {
        case "success":
          return <PaymentSuccessful transaction={transaction} status={status} />
        case "pending" || null || undefined:
          return <PaymentPending errorMessage={errorMessage} />
        case "failed":
          return <PaymentFailed transaction={transaction} />
        case "timedout":
          return <PaymentTimedout transaction={transaction} />
        default:
          return <PaymentPending errorMessage={errorMessage} />
      }
    }, [status]);

    return <div>{renderSwitch(status)}</div>
  }, );

  return (
    <div className="bg-secondary-800 text-whites-50 min-h-[100vh] w-full flex flex-col items-center justify-center gap-[20px] relative">
      
    {/* <PaymentPending/> */}
    {/* <PaymentFailed /> */}
    {/* <PaymentTimedout /> */}
    {/* <PaymentSuccessful /> */}
    {/* <ProcessingPay /> */}

    {
      <DisplayContainer status={status} />
    }
    </div>
  )
}

export default PaymentValidation