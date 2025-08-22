import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, GraduationCap, Building2 } from 'lucide-react';

const PlacedStudents = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 6;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(
          'https://igitmcabackend.onrender.com/api/v1/alumni/',
          {
            headers: {
              Authorization:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2U1MjhkMGNjNmJlNTFjNGQ2MWUzYzUiLCJlbWFpbCI6InNpZGQwN2RldkBnbWFpbC5jb20iLCJmdWxsbmFtZSI6IlNpZGhhbnRhIFByYWRoYW4iLCJyb2xlIjoiY2RjIiwiaWF0IjoxNzU1ODQxMDg5LCJleHAiOjE3ODczNzcwODl9.ytWLiRAn0FX-xDBllwouWfD7h8RWnkIW7WrzS0KLA8A'      },
          }
        );
        if (res.data?.data?.data) {
          setStudents(res.data.data.data);
        }
      } catch (err) {
        console.error('Error fetching students:', err);
      }
    };
    fetchStudents();
  }, []);

  const batches = ['All', ...new Set(students.map((s) => s.batch))];

  const filtered = students.filter((student) => {
    const nameMatch = student.name.toLowerCase().includes(search.toLowerCase());
    const designationMatch = student.designation
      .toLowerCase()
      .includes(search.toLowerCase());
    const batchMatch = selectedBatch === 'All' || student.batch === selectedBatch;
    return (nameMatch || designationMatch) && batchMatch;
  });

  const totalPages = Math.ceil(filtered.length / studentsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedBatch]);

  return (
    <section className="bg-[#F8FAFC] min-h-screen py-16 text-[#2D3436] mt-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5C7CFA]">
          Placed Students - IGIT MCA
        </h2>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or designation"
              className="w-full px-4 py-3 rounded-md bg-[#F8FAFC] text-[#2D3436] border border-[#5C7CFA] focus:outline-none focus:ring-2 focus:ring-[#4DB6AC]"
            />
            <Search className="absolute top-1/2 right-4 -translate-y-1/2 text-[#2D3436] w-5 h-5" />
          </div>

          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="px-4 py-2 rounded-md bg-[#F8FAFC] text-[#2D3436] border border-[#5C7CFA] focus:outline-none focus:ring-2 focus:ring-[#4DB6AC]"
          >
            {batches.map((batch) => (
              <option key={batch} value={batch}>
                {batch}
              </option>
            ))}
          </select>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {paginated.map((student) => (
              <motion.div
                key={student._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-lg shadow-sm border border-[#5C7CFA]/20 overflow-hidden hover:shadow-md transition"
              >
                {/* MacOS-like Top Bar */}
                <div className="flex items-center gap-2 px-4 py-2 bg-[#E9ECEF]">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>

                {/* Card Content */}
                <div className="p-6 text-center">
                  <img
                    src={student.profileImage}
                    alt={student.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#5C7CFA] shadow-sm"
                  />
                  <h3 className="text-xl font-semibold mt-4 text-[#2D3436]">
                    {student.name}
                  </h3>
                  <p className="text-sm text-[#2D3436] mt-1 flex items-center justify-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#5C7CFA]" />
                    {student.designation}
                  </p>
                  <p className="text-sm text-[#2D3436]/80 mt-1 flex items-center justify-center gap-2">
                    <Building2 className="w-4 h-4 text-[#5C7CFA]" />
                    {student.batch}
                  </p>
                  {student.companyLogo && (
                    <img
                      src={student.companyLogo}
                      alt="Company Logo"
                      className="w-16 h-16 mx-auto mt-3 object-contain"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {filtered.length > studentsPerPage && (
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-[#F8FAFC] text-[#2D3436] border border-[#5C7CFA] hover:bg-[#4DB6AC] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-[#2D3436]">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-[#F8FAFC] text-[#2D3436] border border-[#5C7CFA] hover:bg-[#4DB6AC] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlacedStudents;
