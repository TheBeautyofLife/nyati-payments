import React, { useContext } from 'react'
import Buttons from '../Buttons/Buttons';
import LogoImg from "../../1-Assets/logos/Logo.svg";
import { DonateStepperContext } from '../../5-Store/Contexts/DonateCheckout';
import * as yup from "yup";
import axios from "axios";
import { Form, Formik } from "formik";
import CustomLoader from './CustomLoader';
import { BASE_API } from '../../3-Middleware/base-url.config';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const DonateContent = ({ innerref, handleStepNext, stepperData, currentStep, setIsSubmitting, isGSubmitting, handleFormSubmit, close }) => {
  const { contactData, setContactData, paymentData, setRedirectPath } = useContext(DonateStepperContext);

  const validationSchema = yup.object().shape({
    phonenumber: yup.string().min(10, "Insert Valid PhoneNumber").max(15, "Dont start with zero. or  Please check your number").required("phonenumber is required"),
    firstname: yup.string().required("firstname required"),
    lastname: yup.string().required("lastname required"),
  });

  const handleSubmitted = () => {
    handleFormSubmit()

  }
  React.useEffect(() => {
    setIsSubmitting(() => false)
  }, [])
  return (
    <Formik innerRef={innerref} initialValues={contactData} validationSchema={validationSchema} onSubmit={async (values, helpers) => {
      setContactData({ ...contactData, ...values });
       let submitValues = {
        ...contactData, ...values, ...paymentData
       }
      setIsSubmitting(() => true)
     // console.log(submitValues)

      if (submitValues.paymentType === "Visa") {
        //PESAPAL - DONATION PAYMENTS

        let axiosPost = await axios.post(`${BASE_API}/payment/pesapal/donate`, submitValues, {
          headers: { 'content-type': 'application/json' }
        })

        setRedirectPath({ redirectpath: axiosPost.data.redirect_url, payMode: "Visa", orderTrackingId: null })
        setTimeout(() => {
          handleStepNext()
        }, 1000);
      } else if (submitValues.paymentType === "Airtel") {
        //AIRTEL DONATION PAYMENT
        let axiosPost = await axios.post(`${BASE_API}/payment/airtel/donate`, submitValues, {
          headers: { 'content-type': 'application/json' }
        })

        //actual test
        setRedirectPath({ redirectpath: null, payMode: "A-Mobile", orderTrackingId: axiosPost.data.orderTrackingId });
        //dummy test
        // setRedirectPath({ redirectpath: null, payMode: "A-Mobile", orderTrackingId: "66b0bdab0c3c7868f6ed047b" });
        setTimeout(() => {
          handleStepNext()
        }, 1000);
      } else if (submitValues.paymentType === "MTN") {
        // MTN DONATION PAYMENT
        let axiosPost = await axios.post(`${BASE_API}/payment/mtn/donate`, submitValues, {
          headers: { 'content-type': 'application/json' }
        })

        //actual test
        setRedirectPath({ redirectpath: null, payMode: "M-Mobile", orderTrackingId: axiosPost.data.orderTrackingId })
        //dummy test
        // setRedirectPath({ redirectpath: null, payMode: "M-Mobile", orderTrackingId: "66b0bdab0c3c7868f6ed047b" })

        setTimeout(() => {
          handleStepNext()
        }, 1000);
      } else if (submitValues.paymentType === "MerchantPay") {
        let axiosPost = await axios.post(`${BASE_API}/nyatimerch/donate`, submitValues, {
          headers: {"content-type": 'application/json'}
        })


        setRedirectPath({ redirectpath: null, payMode: "MerchantPay", orderTrackingId: axiosPost.data.orderTrackingId });

        setTimeout(() => {
          handleStepNext()
        }, 1000)

      }


    }}>
      {({ values, handleChange, errors, touched, setFieldValue,setErrors }) => (
<Form>
          <div className="bg-white min-h-[60vh] w-full h-full flex flex-col py-8 sm:py-8 max-w-[90%] px-5 sm:max-w-[540px] sm:px-16 gap-[20px] !overflow-y-auto mx-auto">
            {/** Image && text */}
            <div className="flex w-full flex-col gap-[10px] sm:gap-[16px] items-center">
              <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] relative flex">
                <img src={LogoImg} alt="" className="object-cover w-full h-full" />
              </div>

              <div className="font-[Inter-Medium] text-base md:text-base lg:text-base text-center text-[#8A888C]">
                <p>From Script to Screen</p>
                <p>Join Our Journey</p>
              </div>
            </div>

            {/** amount && buttons */}
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-[Inter-SemiBold] text-[18px]">Donation Details</h1>
              {/** inputs */}
              <div className="flex flex-col gap-[10px]">
                {/** added email & phone number */}
                <div className="flex flex-col md:flex-row gap-2">
                <div className="w-full gap-2">
                    <label className="text-[#3C3A3B] font-[Roboto-Medium] text-sm">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className="border border-secondary-700 border-opacity-30 h-[30px]  sm:h-[40px] w-full rounded-lg focus:outline-none px-3 font-[Roboto-Regular] text-sm "
                    />
                    {errors && errors.email ? <p className="font-[Inter-SemiBold] text-red-400 text-xs">{errors.email}</p> : null}
                  </div>
                <div className="w-full gap-2">
                  <label className="text-[#3C3A3B] font-[Roboto-Medium] text-sm">
                    Mobile Number
                    </label>
                    {
                      /** 
                       * 
                        <input
                    type="text"
                    name="phonenumber"
                    value={values.phonenumber}
                    onChange={handleChange}
                    className="border border-secondary-700 border-opacity-30 h-[30px]  sm:h-[40px] w-full rounded-lg focus:outline-none px-3 font-[Roboto-Regular] text-sm "
                      />
                       * 
                       * 
                       * 
                       */
               }     
                 
                    
                    <PhoneInput
                      defaultErrorMessage="Check number"
                      country={'ug'}
                      specialLabel="Number"
                      onlyCountries={paymentData.paymentType === "MTN" ? ["ug"] : []}
                      countryCodeEditable={false}
                      value={values.phonenumber}
                      onChange={(phone,country) => {
                        //setFieldValue("phonenumber", phone)
                        if (country.name === "Uganda" && phone.length > 12) {
                          setErrors({
                            ...errors,
                            phonenumber: "Dont start with zero.Please check your number"
                          })
                          
                        }
                        else {
                          setFieldValue("phonenumber", phone)
                        }
                      }}
                      inputProps={{
                        name: "phonenumber",
                        enableSearch: true,
                        countryCodeEditable: false,
                         placeholder:"i.e 787 *** ***"
                      }}

                      containerClass="phoneInputContainer"
                      inputClass="phoneInput"
                    />
                  
                  {errors && errors.phonenumber ? <p className="font-[Inter-SemiBold] text-red-400 text-xs">{errors.phonenumber}</p> : null}
                </div>
                </div>
                 
                <div className="w-full gap-2">
                  <label className="text-[#3C3A3B] font-[Roboto-Medium] text-sm">
                    First name{" "}
                    <span className="text-secondary-800 text-opacity-60">
                      (Required)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    className="border border-secondary-700 border-opacity-30 h-[30px]  sm:h-[40px] w-full rounded-lg focus:outline-none px-3 font-[Roboto-Regular] text-sm "
                  />
                  {errors && errors.firstname ? <p className="font-[Inter-SemiBold] text-red-400 text-xs">{errors.firstname}</p> : null}
                </div>

                <div className="w-full gap-2">
                  <label className="text-[#3C3A3B] font-[Roboto-Medium] text-sm">
                    Last name{" "}
                    <span className="text-secondary-800 text-opacity-60">
                      (Required)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    className="border border-secondary-700 border-opacity-30 h-[30px]  sm:h-[40px] w-full rounded-lg focus:outline-none px-3 font-[Roboto-Regular] text-sm "
                  />
                  {errors && errors.lastname ? <p className="font-[Inter-SemiBold] text-red-400 text-xs">{errors.lastname}</p> : null}
                </div>

                <div className="w-full gap-2">
                  <label className="text-[#3C3A3B] font-[Roboto-Medium] text-sm">
                    Write a note{" "}
                    <span className="text-secondary-800 text-opacity-60">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    type="text"
                    name="note"
                    value={values.note}
                    onChange={handleChange}
                    className="border border-secondary-700 border-opacity-30 h-[30px]  sm:h-[40px] w-full rounded-lg focus:outline-none px-3 font-[Roboto-Regular] text-sm "
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <Buttons type="submit" className=" w-full  rounded-full font-[Roboto-Medium] text-sm sm:text-base">
                  Donate Now
                </Buttons>

                <Buttons onClick={close} type="button" className="w-full rounded-full font-[Roboto-Medium] text-xs sm:text-base bg-transparent hover:bg-transparent border border-primary-500 text-primary-500 text-opacity-30 border-opacity-30 hover:border-opacity-100 hover:text-primary-500">
                  Cancel
                </Buttons>
              </div>
            </div>

            {/** loader */}
            {isGSubmitting && Object.keys(errors).length === 0 ? <CustomLoader /> : null}
          </div>
</Form>
       
      )}
    </Formik>

  );
}

export default DonateContent