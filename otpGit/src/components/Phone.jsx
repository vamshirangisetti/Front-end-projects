import React, { useState, useEffect } from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase.config";
import { signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";


const Phone = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [user, setUser] = useState(null);
  const [resendTimer, setResendTimer] = useState(30);
  const [showResendButton, setShowResendButton] = useState(false);

  useEffect(() => {
    let intervalId;
    if (resendTimer > 0) {
      intervalId = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [resendTimer]);

  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchaVerify();
    setShowResendButton(true);
    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
        toast.success("OTP sent!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        setResendTimer(30); // reset the timer to 30 seconds
        setShowResendButton(false); // hide the "Resend OTP" button
        toast.success("OTP verified!");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("OTP verification failed!");
      });
  }
  function onResendOTP() {
    setLoading(true);
    setResendTimer(30);
    const formatPh = "+" + ph;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
        toast.success("OTP sent!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  return (
    <section className="bg-emerald-500 flex flex-col gap-10 items-center justify-center h-[600px]">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white text-2xl mb-6">
            Login Success!
          </h2>
        ) : (
          <div className="w-100 flex flex-col gap-4 rounded-lg p-4">
            
            {showOtp ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="otp-container"
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded-xl hover:bg-black hover:text-white"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}

                  <span>Verify OTP</span>
                </button>
                {showResendButton && (
                  <button
                    onClick={onResendOTP}
                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded-xl hover:bg-black hover:text-white"
                  >
                    Resend OTP ({resendTimer})
                  </button>
                )}
              </>
            ) : (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor="ph"
                  className="font-bold text-xl text-white text-center"
                >
                  Verify phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded-xl hover:bg-black hover:text-white"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}

                  <span>Send OTP</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
      
    </section>
  );
};
export default Phone
