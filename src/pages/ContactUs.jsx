import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gradient-to-b from-[#F8FAFC] to-white mt-14"
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#5C7CFA] mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-[#2D3436] mb-8">
            Have questions or need assistance? Our team is here to help you
            every step of the way.
          </p>

          <div className="space-y-5">
            {[
              { icon: Phone, text: "+91 98765 43210", bg: "#5C7CFA" },
              { icon: Mail, text: "support@example.com", bg: "#4DB6AC" },
              { icon: MapPin, text: "123 Tech Street, Bhubaneswar, Odisha", bg: "#5C7CFA" },
              { icon: Clock, text: "Mon - Sat: 9:00 AM - 7:00 PM", bg: "#4DB6AC" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="p-3 rounded-full text-white shadow-md"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon size={22} />
                </div>
                <span className="text-lg text-[#2D3436]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Contact Form */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl shadow-lg border border-[#5C7CFA]/20 bg-white/60 backdrop-blur-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          {/* MacOS-style Top Bar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#EAEAEA] border-b border-gray-300">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-[#5C7CFA]">
              Send us a message
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-[#2D3436]">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-[#5C7CFA]/40 rounded-lg focus:outline-none focus:border-[#4DB6AC] bg-white/70"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#2D3436]">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-[#5C7CFA]/40 rounded-lg focus:outline-none focus:border-[#4DB6AC] bg-white/70"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#2D3436]">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 border border-[#5C7CFA]/40 rounded-lg focus:outline-none focus:border-[#4DB6AC] bg-white/70"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-tr from-[#5C7CFA] to-[#4DB6AC] hover:opacity-90 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
