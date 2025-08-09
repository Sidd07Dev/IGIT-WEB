import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "https://igitsarang.ac.in/assets/documents/homepgbanner/resizeimg/webpage_20250720_124222_0000_1753110373_thumb.png",
  "https://igitsarang.ac.in/assets/documents/album/thumbnail/whatsapp_image_2023-10-02_at_6_1696255154.jpeg",
  "https://igitsarang.ac.in/assets/documents/album/thumbnail/whatsapp_image_2023-10-02_at_6_1696255119.jpeg",
  "https://image-static.collegedunia.com/images/profile/2024-01-28/1706436192_IMG-20240128-WA0002.jpg",
  "https://odishastudents.org/storage/2021/11/igit-campus-odisha-800x387.jpg",
  "https://igitsarang.ac.in/assets/documents/album/thumbnail/whatsapp_image_2023-10-02_at_6_1696255136.jpeg",
  "https://igitsarang.ac.in/assets/documents/album/thumbnail/whatsapp_image_2023-10-02_at_6_1696255501.jpeg",
];

const Gallery = () => {
  return (
    <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-16 px-6 md:px-16 mt-14">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#5C7CFA]"
        >
          Our Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-3 text-lg text-[#2D3436]/80"
        >
          A glimpse into our vibrant moments and cherished memories
        </motion.p>
      </div>

      {/* Gallery Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white/60 backdrop-blur-lg rounded-xl border border-[#5C7CFA]/20 shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300"
          >
            {/* MacOS-style top bar */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#EAEAEA] border-b border-gray-300">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
