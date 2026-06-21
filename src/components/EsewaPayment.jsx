import React from "react";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";

const EsewaPayment = ({ totalAmount }) => {
  const taxAmount = "0";
  const productCode = "EPAYTEST";
  const successUrl = "https://developer.esewa.com.np/success";
  const failureUrl = "https://developer.esewa.com.np/failure";
  const transactionUuid = uuidv4();

  const secretKey = import.meta.env.VITE_ESEWA_SECRET_KEY;
  const signedMessage = `total_amount=${totalAmount},transaction_uuid=${transactionUuid},product_code=${productCode}`;

  const hash = CryptoJS.HmacSHA256(signedMessage, secretKey);
  const signature = CryptoJS.enc.Base64.stringify(hash);

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
          <span>Total to Pay (eSewa)</span>
          <span className="text-[#D95103] text-xl font-black">
            रु {totalAmount}
          </span>
        </div>
      </div>

      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <input type="hidden" name="amount" defaultValue={totalAmount} />
        <input type="hidden" name="tax_amount" defaultValue={taxAmount} />
        <input type="hidden" name="total_amount" defaultValue={totalAmount} />
        <input
          type="hidden"
          name="transaction_uuid"
          defaultValue={transactionUuid}
        />
        <input type="hidden" name="product_code" defaultValue={productCode} />
        <input type="hidden" name="product_service_charge" defaultValue="0" />
        <input type="hidden" name="product_delivery_charge" defaultValue="0" />
        <input type="hidden" name="success_url" defaultValue={successUrl} />
        <input type="hidden" name="failure_url" defaultValue={failureUrl} />
        <input
          type="hidden"
          name="signed_field_names"
          defaultValue="total_amount,transaction_uuid,product_code"
        />
        <input type="hidden" name="signature" defaultValue={signature} />

        <button
          type="submit"
          className="cursor-pointer w-full bg-[#60bb46] hover:bg-[#52a13b] text-white font-extrabold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 text-center flex items-center justify-center gap-2 text-lg"
        >
          Pay with eSewa
        </button>
      </form>
    </div>
  );
};

export default EsewaPayment;
