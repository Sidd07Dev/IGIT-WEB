import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setMessage("Subscribed successfully!");
      setEmail("");
      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage("Please enter a valid email address.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-indigo-50 to-white mt-16 border-t border-[#4DB6AC]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Company Info */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold tracking-wide text-[#5C7CFA]"
          >
            IGIT Sarang
          </motion.h1>
          <p className="text-sm leading-relaxed text-[#2D3436]">
            Empowering students with technical excellence, research
            capabilities, and a passion for innovation in the MCA program.
          </p>
          <div className="flex space-x-4 mt-4">
            {[ 
              { icon: Facebook, link: "https://facebook.com/igitsarang" },
              { icon: Instagram, link: "https://instagram.com/igitsarang" },
              { icon: Linkedin, link: "https://linkedin.com/school/igitsarang" },
              { icon: Twitter, link: "https://twitter.com/igitsarang" }
            ].map(({ icon: Icon, link }, i) => (
              <motion.a
                whileHover={{ scale: 1.15 }}
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow hover:bg-[#4DB6AC] hover:text-white transition"
              >
                <Icon className="w-5 h-5 text-[#2D3436]" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[#2D3436]">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Courses", path: "/courses" },
              { name: "Tests", path: "/test" },
              { name: "Placements", path: "/placements" },
              { name: "Contact Us", path: "/contactus" },
              { name: "Faculty", path: "/faculty" },
            ].map((link, i) => (
              <motion.li key={i} whileHover={{ x: 5 }}>
                <Link
                  to={link.path}
                  className="text-[#2D3436] hover:text-[#4DB6AC] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[#2D3436]">
            Contact Info
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#5C7CFA]" />
              <span className="text-[#2D3436]">
                Indira Gandhi Institute of Technology, Sarang, Dhenkanal, Odisha
                - 759146
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#5C7CFA]" />
              <span className="text-[#2D3436]">+91 67682 67086</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#5C7CFA]" />
              <span className="text-[#2D3436]">principal@igitsarang.ac.in</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-[#2D3436]">
            Newsletter
          </h3>
          <p className="text-sm mb-4 text-[#2D3436]">
            Subscribe for updates on MCA courses, admissions, and events.
          </p>
          <form
            className="flex flex-col space-y-3"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-md bg-white text-[#2D3436] border border-[#5C7CFA] focus:outline-none focus:ring-2 focus:ring-[#4DB6AC]"
              aria-label="Email for newsletter"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="py-3 rounded-md font-semibold bg-[#5C7CFA] text-white hover:bg-[#4DB6AC] transition"
            >
              Subscribe
            </motion.button>
            {message && (
              <p
                className={`text-sm mt-2 ${
                  message.includes("success")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-[#4DB6AC] py-6 text-center text-sm text-[#2D3436]">
        © {new Date().getFullYear()} IGIT Sarang. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
