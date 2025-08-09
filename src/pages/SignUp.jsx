import React, { useState } from "react";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    rollno: "",
    email: "",
    linkedin: "",
    github: "",
    password: "",
    profileImage: null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlRegex = /^(https?:\/\/)?([\w\-])+(\.[\w\-]+)+[/#?]?.*$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!formData.rollno.trim()) newErrors.rollno = "Roll No. is required.";
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.linkedin || !urlRegex.test(formData.linkedin))
      newErrors.linkedin = "Enter a valid LinkedIn URL.";
    if (!formData.github || !urlRegex.test(formData.github))
      newErrors.github = "Enter a valid GitHub URL.";
    if (!formData.profileImage)
      newErrors.profileImage = "Upload a profile image.";
    if (!formData.password || !passwordRegex.test(formData.password))
      newErrors.password =
        "Password must be 8+ chars, include 1 uppercase letter, 1 number, and 1 special character.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      setFormData((prev) => ({ ...prev, profileImage: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500)); // Simulate API call
    alert(`User ${formData.fullname} signed up successfully!`);
    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-yellow-50 py-16 mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 items-center gap-12">
        
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-vpn-illustration_23-2149229493.jpg?ga=GA1.1.1459736530.1754775582&semt=ais_incoming&w=740&q=80"
            alt="Signup Illustration"
            className="w-96 max-w-full drop-shadow-lg"
          />
        </motion.div>

        {/* Signup Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-400 space-y-5"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-2 flex items-center gap-2">
            <UserPlus className="w-6 h-6 text-yellow-400" />
            Create Your Account
          </h2>
          <p className="text-gray-600">Join our student community today!</p>

          {[
            { name: "fullname", label: "Full Name", type: "text", placeholder: "Enter full name" },
            { name: "rollno", label: "Roll No", type: "text", placeholder: "e.g., MCA23012" },
            { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
            { name: "linkedin", label: "LinkedIn URL", type: "url", placeholder: "https://linkedin.com/in/yourname" },
            { name: "github", label: "GitHub URL", type: "url", placeholder: "https://github.com/yourname" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block mb-1 text-blue-700">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-yellow-400"
                placeholder={field.placeholder}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}

          {/* Profile Image */}
          <div>
            <label className="block mb-1 text-blue-700">Profile Image</label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-blue-700"
            />
            {errors.profileImage && (
              <p className="text-red-500 text-sm">{errors.profileImage}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 text-blue-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-yellow-400"
              placeholder="Create a strong password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-md"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Signup;
