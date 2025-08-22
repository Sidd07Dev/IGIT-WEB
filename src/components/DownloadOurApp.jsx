import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Download } from "lucide-react";

const DownloadOurApp = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gradient-to-br from-[#F8FAFC] to-[#EAF2FF]"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#5C7CFA] mb-4">
            Download Our App
          </h2>
          <p className="text-[#2D3436] text-lg mb-6">
            Stay updated with the latest notices, events, and important updates
            directly on your phone. Download the IGIT MCA App now and never miss
            an important announcement!
          </p>

          {/* Download Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="flex items-center gap-3 px-5 py-3 bg-[#5C7CFA] text-white font-semibold rounded-lg shadow-md hover:bg-[#4DB6AC] transition"
            >
              <Download className="w-5 h-5" />
              Download for Android
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="flex items-center gap-3 px-5 py-3 bg-[#4DB6AC] text-white font-semibold rounded-lg shadow-md hover:bg-[#5C7CFA] transition"
            >
              <Smartphone className="w-5 h-5" />
              Download for iOS
            </motion.a>
          </div>
        </div>

        {/* App Mockup Card with macOS header */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="bg-white rounded-xl shadow-lg border border-[#E0E0E0] overflow-hidden max-w-xs md:max-w-sm">
            {/* macOS-style window header */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#F1F3F4] border-b border-[#E0E0E0]">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            {/* Floating mockup image */}
            <motion.img
              src="/app-mockup.png" // replace with your image path
              alt="App Mockup"
              className="rounded-b-xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DownloadOurApp;
