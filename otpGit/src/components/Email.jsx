import React, { useState } from "react";
import OtpInput from "otp-input-react";
import axios from "axios";
import { FiMail } from "react-icons/fi";
const API_KEY =
  "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"; // Replace with your API key
const FROM_EMAIL = "vamshirangisetti29@gmail.com"; // Replace with your "From" email address
const TEMPLATE_ID = 4; // Replace with your Sendinblue template ID

function SendOTP() {
  const [email, setEmail] = useState("");
  const [otpsent, setOtpsent] = useState(false);
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendOTP = async () => {
    setOtpsent(!otpsent);
    try {
      const code = Math.floor(Math.random() * 1000000); // Generate a random 6-digit code
      console.log(code);
      // Send OTP email using Sendinblue API
      const response = await axios.post(
        "https://api.sendinblue.com/v3/smtp/email",
        {
          templateId: TEMPLATE_ID,
          to: [{ email }],
          personalization: [
            {
              to: [{ email }],
              params: { code: code.toString() },
            },
          ],
          from: { email: FROM_EMAIL },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": API_KEY,
          },
        }
      );

      console.log("API response:", response.data);
      // Handle success response
    } catch (error) {
      console.log("API error:", error);
      // Handle error response
    }
  };

  return (
    <div className="bg-purple-500 w-full h-[600px] flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center p-4 mb-20">
        <div className="bg-white text-purple-500 w-fit mx-auto p-4 rounded-full">
          <FiMail size={30} />
        </div>
        <h1 className="font-bold text-xl text-white text-center">
          Verify your Email
        </h1>

        <label className="flex gap-2 text-lg text-white font-semibold items-center justify-center">
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="outline-none p-2 bg-transparent border-2 border-white rounded-xl"
            placeholder="Enter you email..."
          />
        </label>

        <button
          onClick={handleSendOTP}
          className="bg-purple-600 p-2 rounded-xl text-white hover:bg-black"
        >
          Send OTP
        </button>
        {otpsent && (
          <div className="w-full mx-auto flex flex-col gap-5 items-center justify-center">
            <OtpInput
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="otp-container text-black"
            ></OtpInput>
            <button className="bg-purple-600 p-2 w-fit rounded-xl text-white hover:bg-black">Verify</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SendOTP;
