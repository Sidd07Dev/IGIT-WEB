import React, { useState } from "react";
import { Search, User2, BookOpenText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const facultyData = [
  {
    id: 1,
    name: 'Dr. Srinivas Sethi',
    subject: 'Computer Network',
    role: 'Head of Department',
    image: 'https://igitsarang.ac.in/assets/documents/faculty/thumbnail/img_20190725_100146_1568340407.jpg',
    description: 'With over 15 years of experience in research and education, Dr. Anjali leads the MCA department with excellence and vision.',
  },
  {
    id: 2,
    name: 'Dr. Sarojananda Mishra',
    subject: 'Database Management Systems',
    role: 'Professor',
    image: 'https://igitsarang.ac.in/assets/documents/faculty/thumbnail/sn_mishra_1652250825.jpg',
    description: 'An expert in SQL and NoSQL technologies, he has mentored 1000+ students on practical database applications.',
  },
  {
    id: 3,
    name: 'Dr. (Mrs.) Sasmita Mishra',
    subject: 'Web Technologies',
    role: 'Professor',
    image: 'https://igitsarang.ac.in/assets/documents/faculty/thumbnail/sasmita_madam_1652250916.jpg',
    description: 'Passionate about frontend frameworks and UI/UX design, she brings creativity to the classroom.',
  },
  {
    id: 4,
    name: 'Dr. Biswanath Sethi',
    subject: '',
    role: 'Assistant Professor',
    image: 'https://igitsarang.ac.in/assets/documents/faculty/thumbnail/biswanath_sir_1652251394.jpg',
    description: 'He has published over 20 papers in cloud security and actively guides MCA students in projects and internships.',
  },
  {
    id: 5,
    name: 'Dr. Niroj Kumar Pani',
    subject: '',
    role: 'Assistant Professor',
    image: 'https://igitsarang.ac.in/assets/documents/faculty/thumbnail/niroj_sir_1652251299.jpg',
    description: 'He has published over 20 papers in cloud security and actively guides MCA students in projects and internships.',
  },
  {
    id: 6,
    name: 'Mr. Priyabrata Sahu',
    subject: '',
    role: 'Assistant Professor',
    image: 'https://igitsarang.ac.in/assets/documents/faculty/thumbnail/priyabrata_sir_1652251102.jpg',
    description: 'He has published over 20 papers in cloud security and actively guides MCA students in projects and internships.',
  },
  {
    id: 7,
    name: 'Dr. Sanjaya Ku. Patra',
    subject: '',
    role: 'Assistant Professor',
    image: 'https://igitsarang.ac.in/assets/documents/faculty/thumbnail/Mr.%20Sanjaya%20Ku.%20Patra.jpg',
    description: 'He has published over 20 papers in cloud security and actively guides MCA students in projects and internships.',
  },
  {
    id: 8,
    name: 'Mrs. Anupama Sahu',
    subject: '',
    role: 'Guest Faculty',
    image: 'https://igitsarang.ac.in/assets/documents/faculty/thumbnail/anupama_madam_1652251973.jpg',
    description: 'She is dedicated to mentoring students with innovative teaching methodologies.',
  },
  {
    id: 9,
    name: 'Mr. Suvendu Kumar Jena',
    subject: '',
    role: 'Guest Faculty',
    image: 'https://igitsarang.ac.in/assets/documents/faculty/thumbnail/shuvendu_sir_1652252084.jpg',
    description: 'Specializes in cloud computing and network security.',
  },
  {
    id: 10,
    name: 'Mr. Susanta Kumar Sahoo',
    subject: '',
    role: 'Guest Faculty',
    image: 'https://igitsarang.ac.in/assets/documents/faculty/thumbnail/susanta_sir_1652251692.jpg',
    description: 'Brings industry insights into academic discussions.',
  },
];

const designations = [
  "All",
  "Head of Department",
  "Professor",
  "Assistant Professor",
  "Associate Professor",
  "Guest Faculty",
];

const Faculty = () => {
  const [search, setSearch] = useState("");
  const [designation, setDesignation] = useState("All");

  const filteredFaculty = facultyData.filter((faculty) => {
    const nameMatch = faculty.name.toLowerCase().includes(search.toLowerCase());
    const subjectMatch = faculty.subject.toLowerCase().includes(search.toLowerCase());
    const roleMatch = designation === "All" || faculty.role === designation;
    return (nameMatch || subjectMatch) && roleMatch;
  });

  return (
    <section className="bg-gradient-to-b from-[#E3F2FD] via-[#F0F9FF] to-[#E0F7FA] min-h-screen py-16 mt-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-4 text-[#5C7CFA]">
          Our Esteemed Faculty
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Meet the passionate educators who shape the future of MCA students at IGIT Sarang.
        </p>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search by name or subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/60 backdrop-blur-md border border-[#5C7CFA] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4DB6AC] shadow-sm"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
          </div>
          <select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="px-4 py-3 rounded-lg bg-white/60 backdrop-blur-md border border-[#5C7CFA] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4DB6AC] shadow-sm"
          >
            {designations.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {/* MacOS-style Title Bar */}
        <div className="bg-[#E8F0FE] rounded-t-xl p-2 flex gap-2 items-center border border-[#5C7CFA]/20 shadow-sm">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border border-t-0 border-[#5C7CFA]/20 p-6 rounded-b-xl bg-white/70 backdrop-blur-md shadow-lg">
          <AnimatePresence>
            {filteredFaculty.map((faculty, index) => (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl bg-white shadow-md border border-[#5C7CFA]/20 p-6 flex flex-col items-center text-center hover:shadow-xl hover:border-[#4DB6AC]/50 transition"
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#5C7CFA] shadow-md"
                />
                <h3 className="text-lg font-bold text-gray-800 mt-4">{faculty.name}</h3>
                <p className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <User2 className="w-4 h-4 text-[#5C7CFA]" />
                  {faculty.role}
                </p>
                {faculty.subject && (
                  <p className="flex items-center gap-2 text-sm text-teal-600 mt-1">
                    <BookOpenText className="w-4 h-4 text-[#4DB6AC]" />
                    {faculty.subject}
                  </p>
                )}
                <p className="text-gray-600 text-sm mt-3">{faculty.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
