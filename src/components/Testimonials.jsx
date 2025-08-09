import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Aishwarya Samal',
    role: 'Traine at HclTech',
    image: 'https://res.cloudinary.com/codebysidd/image/upload/v1753797146/jolf6aiqpsxjqtegtpfk.jpg',
    quote: 'IGIT Sarang MCA program gave me a solid foundation in software development. The faculty and labs are excellent!',
  },
  {
    id: 2,
    name: 'Aditya Kumar Nayak',
    role: 'SE at Incture',
    image: 'https://res.cloudinary.com/codebysidd/image/upload/v1742840630/sav4zqaejrfygntpi2ff.jpg',
    quote: 'The environment is supportive and full of opportunities. I was able to build strong technical and interpersonal skills.',
  },
  {
    id: 3,
    name: 'Dibyadarshinee Pradhan',
    role: 'SAP Consultant at LTIMindtree',
    image: 'https://res.cloudinary.com/codebysidd/image/upload/v1753796942/q1ihobrr4ijw88bv3dej.jpg',
    quote: 'With IGIT’s guidance, I secured an internship which turned into a full-time offer. Great experience!',
  },
  {
    id: 4,
    name: 'Ankit Mishra',
    role: 'MERN Developer at iServeU',
    image: 'https://res.cloudinary.com/codebysidd/image/upload/v1742838950/e023mt93geoxnk22prch.jpg',
    quote: 'The MCA curriculum is well-structured and hands-on. The placement cell really helped me during interviews.',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[current];

  return (
    <section className="bg-gradient-to-br from-[#F8FAFC] to-[#EAF2FF] py-20 text-[#2D3436] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#5C7CFA] mb-12">
          What Our MCA Alumni Say
        </h2>

        {/* MacOS-style container */}
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl border border-[#5C7CFA]/30 bg-white/40 backdrop-blur-md">
          {/* macOS-style header */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#F1F3F4] border-b border-[#E0E0E0]">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          {/* Testimonial Content */}
          <div className="relative p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-6"
                >
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-24 h-24 rounded-full border-4 border-[#5C7CFA] object-cover shadow-lg"
                  />
                  <Quote className="absolute -top-4 -left-4 w-8 h-8 text-[#5C7CFA] opacity-70" />
                </motion.div>

                <p className="text-lg max-w-2xl text-[#2D3436] mb-6 italic">
                  "{currentTestimonial.quote}"
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-[#2D3436]">{currentTestimonial.name}</h3>
                  <p className="text-sm text-[#2D3436]/80">{currentTestimonial.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="p-3 rounded-full bg-[#F8FAFC] border border-[#5C7CFA] text-[#2D3436] hover:bg-[#4DB6AC] hover:text-white transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="p-3 rounded-full bg-[#F8FAFC] border border-[#5C7CFA] text-[#2D3436] hover:bg-[#4DB6AC] hover:text-white transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    current === index ? 'bg-[#5C7CFA]' : 'bg-[#2D3436]/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
