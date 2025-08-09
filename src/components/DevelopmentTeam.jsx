import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sidhanta Pradhan",
    role: "Full Stack Developer",
    image: "https://sidhantapradhan.netlify.app/photo.png",
    github: "#",
    linkedin: "#",
    email: "mailto:sidhanta@example.com",
  },
  {
    name: "Abinash Nayak",
    role: "Frontend Developer",
    image: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg",
    github: "#",
    linkedin: "#",
    email: "mailto:ananya@example.com",
  },
  {
    name: "Praddep Ku. Sahoo",
    role: "Java Developer",
    image: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg",
    github: "#",
    linkedin: "#",
    email: "mailto:ravi@example.com",
  },
];

export default function DevelopmentTeam() {
  return (
    <section className="bg-[#F8FAFC] py-16 relative overflow-hidden">
      {/* Decorative blobs like Hero */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#5C7CFA] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#4DB6AC] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2D3436] mb-2">
            Our Development Team
          </h2>
          <p className="text-[#2D3436]/80 max-w-2xl mx-auto">
            Meet the passionate individuals who power our mission and turn ideas into reality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden bg-white/90 backdrop-blur-md border border-[#5C7CFA]/20 shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]"
            >
              {/* MacOS Style Title Bar */}
              <div className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] border-b border-[#5C7CFA]/20">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              {/* Image */}
              <div className="relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-fill group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-[#2D3436]">
                  {member.name}
                </h3>
                <p className="text-[#4DB6AC] mb-4">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                  <a
                    href={member.github}
                    className="text-[#2D3436]/70 hover:text-[#2D3436] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-[#2D3436]/70 hover:text-[#2D3436] transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={member.email}
                    className="text-[#2D3436]/70 hover:text-[#2D3436] transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
        `}
      </style>
    </section>
  );
}
