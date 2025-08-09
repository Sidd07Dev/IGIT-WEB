import React from 'react';

const Profile = () => {
  const user = {
    name: 'Amit Sharma',
    email: 'amit@example.com',
    phone: '+91 98765 43210',
  };

  return (
    <div className="min-h-screen p-8 bg-[#f8f9fa]">
      <h1 className="text-3xl font-bold text-[#003366] mb-8">My Profile</h1>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <p className="text-lg text-gray-700">Name: <span className="font-bold">{user.name}</span></p>
        <p className="text-lg text-gray-700">Email: <span className="font-bold">{user.email}</span></p>
        <p className="text-lg text-gray-700">Phone: <span className="font-bold">{user.phone}</span></p>
      </div>
    </div>
  );
};

export default Profile;
