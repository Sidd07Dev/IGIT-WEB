import React from 'react';

const Payments = () => {
  const payments = [
    {
      id: 1,
      amount: '₹2500',
      date: '2025-04-20',
      status: 'Success',
    },
    {
      id: 2,
      amount: '₹1800',
      date: '2025-05-15',
      status: 'Pending',
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-[#f8f9fa]">
      <h1 className="text-3xl font-bold text-[#003366] mb-8">Payment History</h1>

      <div className="space-y-6">
        {payments.map((payment) => (
          <div key={payment.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">Amount: <span className="font-bold">{payment.amount}</span></p>
            <p className="text-gray-600">Date: {payment.date}</p>
            <p className="text-gray-600">Status: <span className={payment.status === 'Success' ? 'text-green-600' : 'text-yellow-600'}>{payment.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payments;
