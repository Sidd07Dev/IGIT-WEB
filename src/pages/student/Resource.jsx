import React, { useState } from "react";
import { BookOpen, FileText, Download } from "lucide-react";

const dummyResources = {
  1: {
    Notes: [
      { subject: "Fundamentals of Computing", title: "Introduction to Programming", link: "https://drive.google.com/file/d/1abc2def3ghi4jkl5mno6pqr7stu8vwx/view?usp=sharing" },
      { subject: "Discrete Mathematics", title: "Set Theory & Logic", link: "https://drive.google.com/file/d/1xyz9abc0def1ghi2jkl3mno4pqr5stu/view?usp=sharing" },
    ],
    PYQs: [
      { subject: "Fundamentals of Computing", title: "MCA 1st Sem 2023", link: "https://drive.google.com/file/d/1pqr7stu8vwx9abc0def1ghi2jkl3mno/view?usp=sharing" },
      { subject: "Discrete Mathematics", title: "MCA 1st Sem 2022", link: "https://drive.google.com/file/d/1mno4pqr5stu8vwx9abc0def1ghi2jkl/view?usp=sharing" },
    ],
  },
  2: {
    Notes: [
      { subject: "DBMS", title: "Relational Model & SQL", link: "https://drive.google.com/file/d/1jkl3mno4pqr5stu8vwx9abc0def1ghi/view?usp=sharing" },
      { subject: "Object-Oriented Programming", title: "Java Fundamentals", link: "https://drive.google.com/file/d/1ghi2jkl3mno4pqr5stu8vwx9abc0def/view?usp=sharing" },
    ],
    PYQs: [
      { subject: "DBMS", title: "MCA 2nd Sem 2023", link: "https://drive.google.com/file/d/1def1ghi2jkl3mno4pqr5stu8vwx9abc/view?usp=sharing" },
      { subject: "Object-Oriented Programming", title: "MCA 2nd Sem 2022", link: "https://drive.google.com/file/d/1abc0def1ghi2jkl3mno4pqr5stu8vwx/view?usp=sharing" },
    ],
  },
  3: {
    Notes: [
      { subject: "Data Structures & Algorithms", title: "Sorting & Searching", link: "https://drive.google.com/file/d/1stu8vwx9abc0def1ghi2jkl3mno4pqr/view?usp=sharing" },
      { subject: "Web Technologies", title: "HTML, CSS & JavaScript", link: "https://drive.google.com/file/d/1pqr5stu8vwx9abc0def1ghi2jkl3mno/view?usp=sharing" },
    ],
    PYQs: [
      { subject: "Data Structures & Algorithms", title: "MCA 3rd Sem 2023", link: "https://drive.google.com/file/d/1mno4pqr5stu8vwx9abc0def1ghi2jkl/view?usp=sharing" },
      { subject: "Web Technologies", title: "MCA 3rd Sem 2022", link: "https://drive.google.com/file/d/1jkl3mno4pqr5stu8vwx9abc0def1ghi/view?usp=sharing" },
    ],
  },
  4: {
    Notes: [
      { subject: "Artificial Intelligence", title: "Neural Networks Basics", link: "https://drive.google.com/file/d/1ghi2jkl3mno4pqr5stu8vwx9abc0def/view?usp=sharing" },
      { subject: "Cloud Computing", title: "Cloud Architecture", link: "https://drive.google.com/file/d/1def1ghi2jkl3mno4pqr5stu8vwx9abc/view?usp=sharing" },
    ],
    PYQs: [
      { subject: "Artificial Intelligence", title: "MCA 4th Sem 2023", link: "https://drive.google.com/file/d/1abc0def1ghi2jkl3mno4pqr5stu8vwx/view?usp=sharing" },
      { subject: "Cloud Computing", title: "MCA 4th Sem 2022", link: "https://drive.google.com/file/d/1stu8vwx9abc0def1ghi2jkl3mno4pqr/view?usp=sharing" },
    ],
  },
};

const ResourceComponent = () => {
  const [selectedSem, setSelectedSem] = useState(1);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#2D3436] py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#5C7CFA]">Resources Hub</h2>
        <p className="text-center text-[#2D3436]/80 mb-10 max-w-2xl mx-auto">
          Access comprehensive notes and previous year question papers (PYQs) for MCA semesters at IGIT Sarang to excel in your studies.
        </p>

        {/* Semester Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {[1, 2, 3, 4].map((sem) => (
            <button
              key={sem}
              onClick={() => setSelectedSem(sem)}
              className={`px-6 py-2 rounded-md font-medium border border-[#5C7CFA] transition ${
                selectedSem === sem
                  ? "bg-[#5C7CFA] text-[#F8FAFC]"
                  : "text-[#2D3436] hover:bg-[#4DB6AC] hover:text-[#F8FAFC]"
              }`}
              aria-label={`Select Semester ${sem}`}
            >
              Semester {sem}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Notes Cards */}
          {dummyResources[selectedSem]?.Notes.map((item, index) => (
            <div
              key={`note-${index}`}
              className="bg-[#F8FAFC] shadow-sm rounded-md p-6 border border-[#5C7CFA]/20 hover:border-[#4DB6AC] transition hover:scale-[1.02] duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-[#5C7CFA] w-6 h-6" />
                <h3 className="text-xl font-semibold text-[#2D3436]">{item.subject}</h3>
              </div>
              <p className="text-[#2D3436]/80 mb-4">{item.title}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#5C7CFA] text-[#F8FAFC] px-4 py-2 rounded-md font-semibold hover:bg-[#4DB6AC] transition"
                aria-label={`Download ${item.title} Notes`}
              >
                <Download size={18} />
                Download Notes
              </a>
            </div>
          ))}

          {/* PYQ Cards */}
          {dummyResources[selectedSem]?.PYQs.map((item, index) => (
            <div
              key={`pyq-${index}`}
              className="bg-[#F8FAFC] shadow-sm rounded-md p-6 border border-[#5C7CFA]/20 hover:border-[#4DB6AC] transition hover:scale-[1.02] duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-[#5C7CFA] w-6 h-6" />
                <h3 className="text-xl font-semibold text-[#2D3436]">{item.subject}</h3>
              </div>
              <p className="text-[#2D3436]/80 mb-4">{item.title}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#5C7CFA] text-[#F8FAFC] px-4 py-2 rounded-md font-semibold hover:bg-[#4DB6AC] transition"
                aria-label={`View ${item.title} PYQ`}
              >
                <Download size={18} />
                View PYQ
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceComponent;