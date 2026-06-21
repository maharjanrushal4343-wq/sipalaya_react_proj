import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import EsewaPayment from "../components/EsewaPayment";
import KhaltiPayment from "../components/KhaltiPayment";

const Payment = () => {
  const location = useLocation();
  const total_amount = location.state || 0;

  const [paymentMethod, setPaymentMethod] = useState("esewa");

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-grey rounded-3xl border border-gray-100 p-8 shadow-xl space-y-8">
        <div className="text-center space-y-2">
          <div className="mx-auto bg-emerald-50 h-14 w-14 rounded-full flex items-center justify-center">
            <span className="text-xl font-black text-[#0C6967]">रु</span>
          </div>
          <h2 className="text-2xl font-black text-gray-900">
            Select Payment Method
          </h2>
          <p className="text-sm text-gray-500">
            Choose your preferred digital wallet provider
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setPaymentMethod("esewa")}
            className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all gap-2 cursor-pointer ${
              paymentMethod === "esewa"
                ? "border-[#60bb46] bg-emerald-50/30 scale-[1.02]"
                : "border-gray-100 bg-white opacity-60 hover:opacity-100"
            }`}
          >
            <img
              className="h-14 object-contain"
              src="esewa.jpg"
              alt="eSewa"
            />
            <span className="text-xs font-bold text-gray-700">
              eSewa Wallet
            </span>
          </button>

          <button
            onClick={() => setPaymentMethod("khalti")}
            className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all gap-2 cursor-pointer ${
              paymentMethod === "khalti"
                ? "border-[#5C2D91] bg-purple-50/30 scale-[1.02]"
                : "border-gray-100 bg-white opacity-60 hover:opacity-100"
            }`}
          >
            <img
              className="h-14 object-contain"
              src="https://dao578ztqooau.cloudfront.net/static/img/logo1.png"
              alt="Khalti"
            />
            <span className="text-xs font-bold text-gray-700">
              Khalti Wallet
            </span>
          </button>
        </div>

        <hr className="border-gray-100" />

        {paymentMethod === "esewa" ? (
          <EsewaPayment totalAmount={total_amount} />
        ) : (
          <KhaltiPayment totalAmount={total_amount} />
        )}

        <p className="text-xs text-gray-400 font-medium text-center">
          You will be redirected securely to the selected interface to complete
          authentication.
        </p>
      </div>
    </div>
  );
};

export default Payment;
