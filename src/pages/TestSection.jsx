import React from "react";
import { CalendarDays, Clock, CheckCircle, XCircle, Download } from "lucide-react";

const testsData = {
  upcoming: [
    {
      id: 1,
      examName: "SSC CGL Tier 1",
      examLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/40/Staff_Selection_Commission_logo.png",
      date: "2025-06-15",
      time: "10:00 AM - 12:30 PM",
      registrationOpen: true,
      registrationLink: "#register-ssc-cgl",
    },
    {
      id: 2,
      examName: "Railway RRB NTPC",
      examLogo:
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/Indian_Railway_Logo.svg",
      date: "2025-07-01",
      time: "09:00 AM - 11:00 AM",
      registrationOpen: false,
      registrationLink: null,
    },
  ],
  past: [
    {
      id: 3,
      examName: "Banking PO Mains",
      examLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/Reserve_Bank_of_India_Logo.svg",
      date: "2025-04-20",
      resultLink: "#result-banking-po",
      status: "Result Out",
    },
    {
      id: 4,
      examName: "SSC CHSL",
      examLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/40/Staff_Selection_Commission_logo.png",
      date: "2025-03-15",
      resultLink: null,
      status: "Completed",
    },
  ],
};

const TestSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white pt-14 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-indigo-700 mb-2">
            Test Series & Exams
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with upcoming tests and check your results all in one
            place.
          </p>
        </div>

        {/* Upcoming Tests */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
            Upcoming Tests
          </h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {testsData.upcoming.map((test) => (
              <div
                key={test.id}
                className="flex items-center gap-6 p-6 rounded-lg border border-indigo-200 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={test.examLogo}
                  alt={test.examName}
                  className="h-16 w-16 object-contain rounded"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-indigo-800 mb-1">
                    {test.examName}
                  </h4>

                  <div className="flex items-center gap-4 text-gray-600 mb-1">
                    <CalendarDays className="h-5 w-5 text-indigo-500" />
                    <span>{new Date(test.date).toLocaleDateString()}</span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-600 mb-2">
                    <Clock className="h-5 w-5 text-indigo-500" />
                    <span>{test.time}</span>
                  </div>

                  {test.registrationOpen ? (
                    <a
                      href={test.registrationLink}
                      className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
                    >
                      Register Now
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-red-600 font-semibold">
                      <XCircle className="w-5 h-5" />
                      Registration Closed
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Tests & Results */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
            Past Tests & Results
          </h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {testsData.past.map((test) => (
              <div
                key={test.id}
                className="flex items-center gap-6 p-6 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={test.examLogo}
                  alt={test.examName}
                  className="h-16 w-16 object-contain rounded"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">
                    {test.examName}
                  </h4>

                  <div className="flex items-center gap-4 text-gray-600 mb-2">
                    <CalendarDays className="h-5 w-5 text-gray-400" />
                    <span>{new Date(test.date).toLocaleDateString()}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {test.status === "Result Out" && test.resultLink ? (
                      <a
                        href={test.resultLink}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
                      >
                        <Download className="w-5 h-5" /> Download Result
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-gray-500 font-semibold">
                        <CheckCircle className="w-5 h-5" />
                        {test.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSection;
