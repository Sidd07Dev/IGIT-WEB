import React, { useState } from 'react';
import { Github, Linkedin, GraduationCap, User } from 'lucide-react';
import { motion } from 'framer-motion';

const dummyBatchmates = [
  {
    id: 1,
    name: 'Ananya Das',
    rollNo: 'MCA23001',
    semester: 1,
    domain: 'Web Development',
    linkedin: 'https://linkedin.com/in/ananyadas',
    github: 'https://github.com/ananyadas',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Rajiv Sharma',
    rollNo: 'MCA23002',
    semester: 1,
    domain: 'AI/ML',
    linkedin: 'https://linkedin.com/in/rajivsharma',
    github: 'https://github.com/rajivsharma',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Sneha Patnaik',
    rollNo: 'MCA23003',
    semester: 2,
    domain: 'App Development',
    linkedin: 'https://linkedin.com/in/snehapatnaik',
    github: 'https://github.com/snehapatnaik',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'Manish Behera',
    rollNo: 'MCA23004',
    semester: 2,
    domain: 'Cybersecurity',
    linkedin: 'https://linkedin.com/in/manishbehera',
    github: 'https://github.com/manishbehera',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
];

const Batchmate = () => {
  const [search, setSearch] = useState('');
  const [semesterFilter, setSemesterFilter] = useState('');
  const [domainFilter, setDomainFilter] = useState('');

  const filteredBatchmates = dummyBatchmates.filter((mate) => {
    return (
      (semesterFilter === '' || mate.semester === Number(semesterFilter)) &&
      (domainFilter === '' || mate.domain === domainFilter) &&
      (mate.name.toLowerCase().includes(search.toLowerCase()) ||
        mate.rollNo.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <section className="min-h-screen bg-blue-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Meet Your Batchmates</h1>

        {/* Filters & Search */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by name or roll no"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-md bg-blue-800 text-white w-64 focus:ring-2 focus:ring-yellow-400"
          />

          <select
            className="px-4 py-2 rounded-md bg-blue-800 text-white"
            value={semesterFilter}
            onChange={(e) => setSemesterFilter(e.target.value)}
          >
            <option value="">All Semesters</option>
            {[1, 2, 3, 4].map((sem) => (
              <option key={sem} value={sem}>
                Semester {sem}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 rounded-md bg-blue-800 text-white"
            value={domainFilter}
            onChange={(e) => setDomainFilter(e.target.value)}
          >
            <option value="">All Domains</option>
            {['Web Development', 'AI/ML', 'App Development', 'Cybersecurity'].map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBatchmates.length > 0 ? (
            filteredBatchmates.map((mate) => (
              <motion.div
                key={mate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-800 rounded-xl p-4 shadow-lg text-center"
              >
                <img
                  src={mate.avatar}
                  alt={mate.name}
                  className="w-24 h-24 rounded-full mx-auto mb-3 border-2 border-yellow-400"
                />
                <h2 className="text-lg font-semibold">{mate.name}</h2>
                <p className="text-sm text-gray-300 mb-1">{mate.rollNo}</p>
                <div className="flex items-center justify-center gap-2 text-yellow-400 text-sm mb-1">
                  <GraduationCap className="w-4 h-4" /> Semester {mate.semester}
                </div>
                <div className="text-sm mb-2 text-white italic">Domain: {mate.domain}</div>
                <div className="flex justify-center gap-4">
                  <a href={mate.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="text-blue-400 hover:text-blue-300 w-5 h-5" />
                  </a>
                  <a href={mate.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="text-white hover:text-gray-300 w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-300">No batchmates found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Batchmate;
