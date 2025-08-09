import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  FlaskConical,
  Code2,
} from "lucide-react";

const features = [
  {
    title: "Experienced Faculty",
    description:
      "Learn from top-tier professors and real-world professionals in tech.",
    icon: GraduationCap,
  },
  {
    title: "Excellent Placements",
    description:
      "Consistent placements in TCS, Infosys, Wipro, Capgemini and more.",
    icon: Briefcase,
  },
  {
    title: "Modern Labs",
    description:
      "Equipped with high-end systems and fast internet for real-time development.",
    icon: Code2,
  },
  {
    title: "Research & Innovation",
    description:
      "Participate in funded research and innovation projects with national recognition.",
    icon: FlaskConical,
  },
  {
    title: "Project-Based Learning",
    description:
      "Hands-on curriculum driven by practical projects and industry challenges.",
    icon: BookOpen,
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-br from-[#F8FAFC] to-[#EAF2FF] py-20 px-6 md:px-12 text-[#2D3436]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Explore <span className="text-[#5C7CFA]">MCA Highlights</span>
        </h2>
        <p className="text-[#2D3436] max-w-2xl mx-auto">
          Unlock your potential with a program tailored for future software leaders and innovators.
        </p>
      </motion.div>

      {/* MacOS window style container */}
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg border border-[#5C7CFA]/30 bg-white/50 backdrop-blur-md">
        {/* macOS-style header */}
        <div className="flex items-center gap-2 px-3 py-2 bg-[#F1F3F4] border-b border-[#E0E0E0]">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 p-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-xl shadow-lg border border-[#5C7CFA]/20 bg-white/60 backdrop-blur-md hover:shadow-2xl hover:border-[#4DB6AC] transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-gradient-to-tr from-[#5C7CFA] to-[#4DB6AC] text-white shadow-md"
                >
                  <Icon className="w-7 h-7" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-[#2D3436]/80">{feature.description}</p>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-10 transition bg-gradient-to-tr from-[#5C7CFA] to-[#4DB6AC]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
