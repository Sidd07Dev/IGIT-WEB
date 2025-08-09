import React, { useState } from 'react';
import { Calendar, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const dummyData = [
  { id: 1, semester: 1, subject: 'Mathematics', date: '2025-06-01', status: 'Present' },
  { id: 2, semester: 1, subject: 'Computer Fundamentals', date: '2025-06-02', status: 'Absent' },
  { id: 3, semester: 2, subject: 'DSA', date: '2025-06-03', status: 'Present' },
  { id: 4, semester: 2, subject: 'DBMS', date: '2025-06-04', status: 'Absent' },
  { id: 5, semester: 3, subject: 'OS', date: '2025-06-05', status: 'Present' },
];

const Attendance = () => {
  const [records] = useState(dummyData);
  const [semesterFilter, setSemesterFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredRecords = records.filter((rec) => {
    return (
      (semesterFilter === '' || rec.semester === Number(semesterFilter)) &&
      (statusFilter === 'All' || rec.status === statusFilter)
    );
  });

  const presentCount = filteredRecords.filter(r => r.status === 'Present').length;
  const absentCount = filteredRecords.filter(r => r.status === 'Absent').length;

  return (
    <section className="min-h-screen bg-blue-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Attendance Records</h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <select
            className="px-4 py-2 bg-blue-700 rounded-md text-white"
            value={semesterFilter}
            onChange={(e) => setSemesterFilter(e.target.value)}
          >
            <option value="">All Semesters</option>
            {[1, 2, 3, 4].map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 bg-blue-700 rounded-md text-white"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>

        {/* Summary */}
        <div className="text-center mb-4 space-x-6 text-lg font-semibold">
          <span className="text-green-400">Present: {presentCount}</span>
          <span className="text-red-400">Absent: {absentCount}</span>
        </div>

        {/* Attendance Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record) => (
              <motion.div
                key={record.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-800 p-4 rounded-xl shadow-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold">{record.subject}</h2>
                  {record.status === 'Present' ? (
                    <CheckCircle className="text-green-400" />
                  ) : (
                    <XCircle className="text-red-400" />
                  )}
                </div>
                <div className="text-sm">Semester: {record.semester}</div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <Calendar className="w-4 h-4" /> {record.date}
                </div>
                <div
                  className={`text-xs mt-2 px-3 py-1 rounded-full w-fit ${
                    record.status === 'Present'
                      ? 'bg-green-500 text-black'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  {record.status}
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full">No attendance records found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Attendance;
