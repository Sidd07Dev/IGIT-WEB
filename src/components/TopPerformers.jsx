import React from "react";
import { Star } from "lucide-react";

const performers = [
  {
    rank: 1,
    name: "Priya Sharma",
    score: "98%",
    exam: "SSC CGL Mock Test 5",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    rank: 2,
    name: "Amit Kumar",
    score: "95%",
    exam: "RRB ALP Practice Test 3",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    rank: 3,
    name: "Sneha Reddy",
    score: "93%",
    exam: "Banking Mega Mock",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    rank: 4,
    name: "Rahul Verma",
    score: "91%",
    exam: "SSC MTS Practice Set",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    rank: 5,
    name: "Anjali Singh",
    score: "90%",
    exam: "IBPS Clerk Prelims",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

const rankColors = {
  1: "bg-yellow-400 text-white",
  2: "bg-gray-300 text-gray-900",
  3: "bg-orange-400 text-white",
};

const TopPerformers = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🏆 Top 5 Performers This Week
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {performers.map((student, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all p-6 text-center"
            >
              {/* Rank Badge */}
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow"
                />
                <div
                  className={`absolute -top-2 -right-2 w-7 h-7 text-xs flex items-center justify-center font-bold rounded-full border border-white ${
                    rankColors[student.rank] || "bg-blue-200 text-blue-800"
                  }`}
                >
                  {student.rank}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{student.exam}</p>
              <div className="flex justify-center items-center gap-1 text-green-600 font-medium">
                <Star className="w-4 h-4" />
                {student.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPerformers;
