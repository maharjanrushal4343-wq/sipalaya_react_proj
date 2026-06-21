import axios from "axios";
import React, { useState } from "react";

const KhaltiPayment = ({ totalAmount }) => {
  const [loading, setLoading] = useState(false);
  const taxAmount = "0";

  const handleKhaltiPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://dev.khalti.com/api/v2/epayment/initiate/",
        {
          return_url: "https://example.com/payment-callback",
          website_url: "https://example.com",
          amount: totalAmount,
          purchase_order_id: `order_${Date.now()}`,
          purchase_order_name: "test",
        },
        {
          headers: {
            Authorization:
            "key live_secret_key_68791341fdd94846a146f0457ff7b455",
            "Content-Type": "application/json",
          },
        },
      );

      const data = response.data;

      console.log(data);
      
    } catch (error) {
      console.error("Khalti payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-2xl p-5 text-sm font-medium text-gray-600 space-y-3">
        <div className="flex justify-between">
          <span>Order Amount</span>
          <span className="text-gray-900 font-bold">रु {totalAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax Amount</span>
          <span className="text-gray-900 font-bold">रु {taxAmount}</span>
        </div>
        <hr className="border-gray-200/60 my-1" />
        <div className="flex justify-between text-base font-bold text-gray-900 pt-1">
          <span>Total to Pay (Khalti)</span>
          <span className="text-[#5C2D91] text-xl font-black">
            रु {totalAmount}
          </span>
        </div>
      </div>

      <button
        onClick={handleKhaltiPayment}
        disabled={loading}
        className="cursor-pointer w-full bg-[#5C2D91] hover:bg-[#4c247d] text-white font-extrabold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 text-center flex items-center justify-center gap-2 text-lg disabled:opacity-50"
      >
        {loading ? "Processing..." : "Pay with Khalti"}
      </button>
    </div>
  );
};

export default KhaltiPayment;
