import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const taglines = [
    "Innovate. Code. Succeed.",
    "Transforming Ideas into Reality.",
    "Empowering Future Tech Leaders.",
  ];

  return (
   <section className="relative min-h-[90vh] flex flex-col justify-center px-6 bg-[#F8FAFC] overflow-hidden pt-20 md:pt-0">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="https://cdn.pixabay.com/video/2023/07/08/170655-843752693_large.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/80 via-[#F8FAFC]/60 to-[#F8FAFC] " ></div>

      {/* Floating decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#5C7CFA] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#4DB6AC] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#2D3436] drop-shadow-md">
          Master of Computer Applications <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5C7CFA] to-[#4DB6AC]">
            IGIT Sarang
          </span>
        </h1>

        {/* Typewriter Tagline */}
        <div className="text-lg md:text-xl text-[#2D3436] font-medium min-h-[2em]">
          <Typewriter
            options={{
              strings: taglines,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#2D3436] max-w-3xl mx-auto leading-relaxed">
          Empowering students with technical excellence, research skills, and a
          passion for innovation in the ever-evolving tech world.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/signup"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md bg-gradient-to-r from-[#5C7CFA] to-[#4DB6AC] text-white hover:scale-105 hover:shadow-lg"
          >
            Signup Now
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 shadow-md border-[#4DB6AC] text-[#4DB6AC] hover:bg-[#4DB6AC] hover:text-white hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Statistics */}
      <div className="relative z-10 max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center animate-slideUp">
        {[
          { value: "95%", label: "Placement Rate" },
          { value: "10+", label: "Advanced Labs" },
          { value: "50+", label: "Research Projects" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg bg-white bg-opacity-80 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-3xl font-bold text-[#2D3436]">{stat.value}</h3>
            <p className="text-sm text-[#2D3436]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp {
            animation: slideUp 1s ease-out forwards;
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
