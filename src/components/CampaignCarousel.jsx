import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const campaignBanners = [
  {
    id: 1,
    type: "image",
    title: "🔥 SSC Crash Course - Enroll Now!",
    image: "https://static.vecteezy.com/system/resources/previews/003/085/046/non_2x/colorful-abstract-banner-template-with-dummy-text-hand-drawn-doodle-vector.jpg",
    link: "/campaigns/ssc-crash-course",
  },
  {
    id: 2,
    type: "video",
    title: "📺 Railway Test Series Launch",
    video: "https://videos.pexels.com/video-files/4620568/4620568-sd_960_506_25fps.mp4",
    link: "/campaigns/railway-test-series",
  },
  {
    id: 3,
    type: "image",
    title: "🎯 Free Banking Mock Test",
    image: "https://static.vecteezy.com/system/resources/previews/003/085/046/non_2x/colorful-abstract-banner-template-with-dummy-text-hand-drawn-doodle-vector.jpg",
    link: "/campaigns/banking-mock-test",
  },
];

const CampaignCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = campaignBanners.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white pt-24 pb-16">
      <div className="relative w-full max-w-6xl mx-auto h-[300px] overflow-hidden rounded-xl shadow-xl">
        {campaignBanners.map((slide, index) => (
          <a
            key={slide.id}
            href={slide.link}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            {slide.type === "image" ? (
              <div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="bg-black/40 h-full flex items-center justify-center">
                  <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                </div>
              </div>
            ) : (
              <div className="w-full h-full relative">
                <video
                  src={slide.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                </div>
              </div>
            )}
          </a>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-md z-30"
        >
          <ChevronLeft className="text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-md z-30"
        >
          <ChevronRight className="text-gray-800" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {campaignBanners.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === current ? "bg-white" : "bg-gray-400/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignCarousel;
