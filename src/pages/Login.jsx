import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-yellow-50 py-16 mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 items-center gap-12">
        
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-vpn-illustration_23-2149229493.jpg?ga=GA1.1.1459736530.1754775582&semt=ais_incoming&w=740&q=80"
            alt="Login Illustration"
            className="w-96 max-w-full drop-shadow-lg"
          />
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-400"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Welcome Back</h2>
          <p className="text-gray-600 mb-8">Please login to your account</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-blue-500" />
              <input
                type="email"
                placeholder="Email Address"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:border-yellow-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute top-3 left-3 text-blue-500" />
              <input
                type="password"
                placeholder="Password"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:border-yellow-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-md"
            >
              <LogIn className="w-5 h-5" />
              Login
            </motion.button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-gray-600 text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline font-medium">
              Sign up
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
