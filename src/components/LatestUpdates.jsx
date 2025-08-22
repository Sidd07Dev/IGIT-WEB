import React, { useState, useEffect } from "react";
import { Search, Calendar, Tag, ChevronRight, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NoticeSkeleton = () => (
  <div className="p-6 rounded-lg shadow-md bg-white animate-pulse border border-[#E0E0E0]">
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
    <div className="flex items-center gap-3 mb-4">
      <div className="w-4 h-4 bg-gray-300 rounded-full" />
      <div className="h-4 bg-gray-300 rounded w-24" />
      <div className="w-4 h-4 bg-gray-300 rounded-full" />
      <div className="h-4 bg-gray-300 rounded w-20" />
    </div>
    <div className="h-4 bg-gray-300 rounded w-full mb-2" />
    <div className="h-4 bg-gray-300 rounded w-5/6 mb-4" />
    <div className="h-10 bg-gray-300 rounded w-32" />
  </div>
);

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 6;

  const categories = ["All", "Academic", "Events", "Admissions", "Placements"];

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://igitmcabackend.onrender.com/api/v1/notice/");
        if (!res.ok) throw new Error("Failed to fetch notices");
        const data = await res.json();
        setNotices(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const filteredNotices = notices.filter((notice) => {
    const matchSearch =
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || notice.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);
  const paginatedNotices = filteredNotices.slice(
    (currentPage - 1) * noticesPerPage,
    currentPage * noticesPerPage
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-16 bg-gradient-to-br from-[#F8FAFC] to-[#EAF2FF]"
    >
      <div className="max-w-8xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        >
          <span className="text-[#5C7CFA]">IGIT MCA</span> Notice Board
        </motion.h1>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              placeholder="Search notices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white shadow-md text-[#2D3436] border border-[#5C7CFA] focus:outline-none focus:ring-4 focus:ring-[#5C7CFA]/30 transition"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5C7CFA] w-5 h-5" />
          </div>
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-[#2D3436]">
              Filter by:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white shadow-md text-[#2D3436] border border-[#5C7CFA] focus:outline-none focus:ring-4 focus:ring-[#4DB6AC]/30 transition"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: noticesPerPage }).map((_, i) => (
              <NoticeSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-10 text-red-500">
            <AlertCircle className="w-10 h-10 mb-2" />
            <p className="font-semibold">{error}</p>
          </div>
        ) : filteredNotices.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No notices match your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {paginatedNotices.map((notice) => (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg shadow-md bg-white border border-[#E0E0E0] hover:shadow-xl transition overflow-hidden"
                >
                  {/* MacOS-like window bar */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200">
                    <span className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#2D3436]">
                      {notice.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      <Calendar className="w-4 h-4 text-[#5C7CFA]" />
                      <span>{notice.date}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#5C7CFA] to-[#4DB6AC] text-white">
                        {notice.category}
                      </span>
                    </div>
                    <p className="text-sm mb-4 text-[#2D3436]/80">
                      {notice.description}
                    </p>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition bg-gradient-to-r from-[#5C7CFA] to-[#4DB6AC] text-white hover:opacity-90">
                      View Details <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Pagination */}
        {!loading && filteredNotices.length > noticesPerPage && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-white shadow-md text-[#2D3436] border border-[#5C7CFA] hover:bg-gradient-to-r hover:from-[#5C7CFA] hover:to-[#4DB6AC] hover:text-white disabled:opacity-50 transition"
            >
              Previous
            </motion.button>
            <span className="text-[#2D3436] font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-white shadow-md text-[#2D3436] border border-[#5C7CFA] hover:bg-gradient-to-r hover:from-[#5C7CFA] hover:to-[#4DB6AC] hover:text-white disabled:opacity-50 transition"
            >
              Next
            </motion.button>
          </div>
        )}
      </div>
    </motion.section>
  );
}
