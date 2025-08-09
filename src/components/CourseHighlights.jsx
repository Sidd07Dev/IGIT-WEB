import React, { useState } from "react";
import { X } from "lucide-react";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  // Add more images as needed
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="bg-[#F8FAFC] py-20 px-6 md:px-12 text-[#2D3436]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          IGIT <span className="text-[#5C7CFA]">Gallery</span>
        </h2>
        <p className="text-[#2D3436] max-w-2xl mx-auto">
          A glimpse into the vibrant campus life, technical events, and moments from MCA at IGIT Sarang.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-md border border-[#5C7CFA]/20 shadow-sm group cursor-pointer"
            onClick={() => setSelectedImg(src)}
          >
            <img
              src={src}
              alt={`Gallery ${idx}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 bg-[#2D3436]/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 bg-[#F8FAFC]/10 hover:bg-[#4DB6AC]/20 p-2 rounded-full text-[#F8FAFC]"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImg}
              alt="Enlarged"
              className="w-full max-h-[80vh] object-contain rounded-md border border-[#5C7CFA]/20 shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}