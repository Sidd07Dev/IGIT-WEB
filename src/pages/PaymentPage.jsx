import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CreditCard, LoaderCircle, ShieldCheck } from "lucide-react";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Payment Successful!");
      navigate("/my-bookings", { state: { ...state } });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-6 space-x-2">
          <ShieldCheck className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-gray-800">Secure Payment</h2>
        </div>

        <form onSubmit={handlePayment} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              required
              maxLength={16}
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Name on Card
            </label>
            <input
              type="text"
              required
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
              placeholder="John Doe"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                required
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                CVV
              </label>
              <input
                type="password"
                required
                maxLength={4}
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
                placeholder="123"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex justify-center items-center transition duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <LoaderCircle className="animate-spin mr-2" />
                Processing Payment...
              </>
            ) : (
              <>
                <CreditCard className="mr-2" />
                Pay Now
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
