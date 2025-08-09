import React from "react";
import { CreditCard, Clock, CheckCircle } from "lucide-react";

const coursesData = [
  {
    id: 1,
    name: "Government Job Preparation",
    pricePerYear: 10000,
    oneTimeFee: 8000,
    installmentCount: 3,
    installmentFee: 3000,
    exams: [
      {
        name: "SSC",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/62/SSC_Logo.png",
      },
      {
        name: "Railway",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Indian_Railways_Logo.svg/2560px-Indian_Railways_Logo.svg.png",
      },
      {
        name: "Banking",
        logo: "https://img.icons8.com/color/48/000000/bank-building.png",
      },
    ],
  },
  // Add more courses if needed
];

const Courses = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-8 text-center">
          Our Courses & Fees
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md p-6 border border-indigo-200 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">
                {course.name}
              </h3>

              <p className="text-gray-700 mb-6">
                <span className="font-bold text-indigo-600 text-lg">
                  ₹{course.pricePerYear.toLocaleString()}
                </span>{" "}
                per year
              </p>

              {/* Payment Options */}
              <div className="mb-6 space-y-4">
                {/* One-time payment */}
                <div className="flex items-center bg-indigo-100 text-indigo-800 rounded-md p-3">
                  <CreditCard className="mr-3" />
                  <div>
                    <p className="font-semibold text-lg">One-time Payment</p>
                    <p className="text-sm">
                      Pay ₹
                      <span className="font-bold">{course.oneTimeFee.toLocaleString()}</span>{" "}
                      only (Save ₹
                      {(course.pricePerYear - course.oneTimeFee).toLocaleString()})
                    </p>
                  </div>
                </div>

                {/* 3-installments payment */}
                <div className="flex items-center bg-indigo-50 text-indigo-700 rounded-md p-3 border border-indigo-300">
                  <Clock className="mr-3" />
                  <div>
                    <p className="font-semibold text-lg">3 Installments</p>
                    <p className="text-sm">
                      ₹
                      <span className="font-bold">
                        {course.installmentFee.toLocaleString()}
                      </span>{" "}
                      × {course.installmentCount} = ₹
                      {(course.installmentFee * course.installmentCount).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Supported Exams */}
              <div>
                <h4 className="font-semibold text-indigo-700 mb-3">
                  Supported Exams
                </h4>
                <div className="flex space-x-6 items-center">
                  {course.exams.map((exam) => (
                    <div
                      key={exam.name}
                      className="flex flex-col items-center text-center"
                    >
                      <img
                        src={exam.logo}
                        alt={exam.name}
                        className="h-12 w-12 object-contain mb-1"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {exam.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
