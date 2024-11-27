import React, { useCallback, useEffect } from 'react'
import CustomLoader from '../../2-Components/Modals/CustomLoader'

import DonationFailed from './DonationFailed'
import DonationTimedout from './DonationTimedout'
import DonationSuccessful from './DonationSuccessful'
import DonationPending from './DonationPending'

import { useGetDonationStatus } from '../../5-Store/tanstack/state/queries'

const DonationValidation = () => {
  //const [isLoading, setIsLoading] = useState(false);
  const [orderTrackingId, setOrderTrackingId] = useState('');
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [transaction, setTransaction] = useState(null);

  const paystatusMutation = useGetDonationStatus()

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





  const DisplayContainer = React.useMemo(() => {
    const renderSwitch = useCallback(({status})=> {
      let statusLower = status && status !== null || status && status !== undefined? status.toLowerCase() : '';
      switch (statusLower) {
        case "success":
          return <DonationSuccessful transaction={transaction} />
        case "pending" || null || undefined:
          return <DonationPending errorMessage={errorMessage} />
        case "failed":
          return <DonationFailed transaction={transaction} />
        case "timedout":
          return <DonationTimedout transaction={transaction} />
        default:
          return <DonationPending errorMessage={errorMessage} />
      }
    }, [status])

    return <div>{renderSwitch(status)}</div>
  });

  return (
    <div className="bg-secondary-800 text-whites-50 min-h-[100vh] w-full flex flex-col items-center justify-center gap-[20px] relative">
      
    {/* <DonationPending/> */}
    {/* <DonationFailed /> */}
    {/* <DonationTimedout /> */}
    {/* <DonationSuccessful /> */}
    {/* <ProcessingPay /> */}

    {
      <DisplayContainer status={status} />
    }
    </div>
  )
}

export default DonationValidation