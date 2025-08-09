import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Dummy user session (you can simulate a logged-in/logged-out state)
const dummyUser = {
  isLoggedIn: true,
  userId: "user_001",
  attemptedTests: ["1232578788688"], // Already attempted test IDs
};

const dummyQuestions = [{
  id: 1,
  question: "Which is the capital of India?",
  options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
},
{
  id: 2,
  question: "Who invented the telephone?",
  options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Isaac Newton"],
},
{
  id: 3,
  question: "What is 10 + 15?",
  options: ["20", "25", "30", "35"],
},
{
  id: 4,
  question: "What is the chemical symbol for water?",
  options: ["H2O", "CO2", "NaCl", "O2"],
},
{
  id: 5,
  question: "Which planet is known as the Red Planet?",
  options: ["Earth", "Venus", "Mars", "Jupiter"],
},
{
  id: 6,
  question: "Which is the capital of India?",
  options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
},
{
  id: 7,
  question: "Who invented the telephone?",
  options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Isaac Newton"],
},
{
  id: 8,
  question: "What is 10 + 15?",
  options: ["20", "25", "30", "35"],
},
{
  id: 9,
  question: "What is the chemical symbol for water?",
  options: ["H2O", "CO2", "NaCl", "O2"],
},
{
  id: 10,
  question: "Which planet is known as the Red Planet?",
  options: ["Earth", "Venus", "Mars", "Jupiter"],
},];

const AttemptTestPro = () => {
  const { testId } = useParams(); // get test ID from URL
  const navigate = useNavigate();

  const totalTime = 15 * 60;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(dummyQuestions.length).fill(null));
  const [phase, setPhase] = useState("start");
  const timerRef = useRef(null);

  // === Access & Attempt Check ===
  useEffect(() => {
    if (!dummyUser.isLoggedIn) {
      navigate("/login"); // redirect to login if not logged in
    } else if (dummyUser.attemptedTests.includes(testId)) {
      setPhase("already-submitted"); // show message if already attempted
    }
  }, [testId, navigate]);

  // === Timer Logic ===
  useEffect(() => {
    if (phase !== "test") return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          alert("Time is up! Submitting your test.");
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [phase]);

  const handleOptionSelect = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSave = () => alert("Answer saved.");
  const handleNext = () => currentQIndex < dummyQuestions.length - 1 && setCurrentQIndex(currentQIndex + 1);
  const handlePrevious = () => currentQIndex > 0 && setCurrentQIndex(currentQIndex - 1);
  const handleJumpToQuestion = (index) => setCurrentQIndex(index);
  const formatTime = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  const handleSubmit = () => {
    clearInterval(timerRef.current);
    setPhase("submitted");
    // In real-world, you'd send to backend and store attempt status.
  };

  // === Already Attempted Message ===
  if (phase === "already-submitted") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 text-red-700 text-xl font-semibold">
        You have already submitted the test.
      </div>
    );
  }

  // === Start & Submitted & Test Phase ===
  if (phase === "start") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 px-6">
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-10 text-center">
          <h1 className="text-4xl font-bold text-indigo-700 mb-6">Welcome to the Kaishun Online Test</h1>
          <ul className="text-left max-w-xl mx-auto text-gray-600 mb-8 space-y-2 list-disc list-inside">
            <li>Total Duration: 15 minutes</li>
            <li>There are {dummyQuestions.length} questions in this test</li>
            <li>You can navigate using Previous, Next, or by clicking question numbers</li>
            <li>Make sure to save your answer before moving to another question</li>
            <li>Once you submit, you cannot change your answers</li>
            <li>The timer will start once you begin the test</li>
          </ul>
          <button
            onClick={() => setPhase("test")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Begin Test
          </button>
        </div>
      </div>
    );
  }

  if (phase === "submitted") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 px-6">
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-10 text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-6">Test Submitted Successfully!</h1>
          <h2 className="text-xl font-semibold mb-4">Your Answers:</h2>
          <ul className="text-left max-w-xl mx-auto space-y-2">
            {dummyQuestions.map((q, i) => (
              <li key={q.id} className="border-b pb-2">
                <p className="font-semibold">{`Q${i + 1}: ${q.question}`}</p>
                <p>
                  Your answer:{" "}
                  <span className="text-indigo-600">
                    {answers[i] !== null ? q.options[answers[i]] : "Not answered"}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // === Test Phase ===
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white pt-13 pb-16">
      <header className="bg-indigo-700 text-white py-4 shadow-lg flex justify-between items-center px-6 md:px-12">
        <div className="font-mono text-lg tracking-widest">
          Time Left: <span>{formatTime(timeLeft)}</span>
        </div>
      </header>
      <main className="flex flex-col md:flex-row flex-grow max-w-6xl mx-auto p-6 gap-6">
        {/* Question Section */}
        <section className="bg-white rounded-lg shadow-md flex-grow p-6 md:w-3/4">
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQIndex + 1} of {dummyQuestions.length}
          </h2>
          <p className="text-gray-800 text-lg mb-6">{dummyQuestions[currentQIndex].question}</p>
          <div className="flex flex-col gap-3">
            {dummyQuestions[currentQIndex].options.map((opt, idx) => (
              <label
                key={idx}
                className={`cursor-pointer flex items-center gap-3 p-3 border rounded-md ${
                  answers[currentQIndex] === idx
                    ? "bg-indigo-100 border-indigo-500"
                    : "border-gray-300 hover:bg-indigo-50"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQIndex}`}
                  checked={answers[currentQIndex] === idx}
                  onChange={() => handleOptionSelect(idx)}
                  className="cursor-pointer"
                />
                <span className="select-none">{opt}</span>
              </label>
            ))}
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQIndex === 0}
              className={`px-5 py-3 rounded-md border font-semibold transition ${
                currentQIndex === 0
                  ? "text-gray-400 border-gray-300 cursor-not-allowed"
                  : "border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Save
            </button>
            <button
              onClick={handleNext}
              disabled={currentQIndex === dummyQuestions.length - 1}
              className={`px-5 py-3 rounded-md border font-semibold transition ${
                currentQIndex === dummyQuestions.length - 1
                  ? "text-gray-400 border-gray-300 cursor-not-allowed"
                  : "border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              Next
            </button>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="bg-white rounded-lg shadow-md p-6 md:w-1/4 h-fit sticky top-20">
          <h3 className="font-semibold mb-4 text-indigo-700 text-center text-lg">Navigate Questions</h3>
          <div className="grid grid-cols-5 gap-3">
            {dummyQuestions.map((q, i) => (
              <button
                key={q.id}
                onClick={() => handleJumpToQuestion(i)}
                className={`w-10 h-10 rounded-full border font-semibold transition ${
                  currentQIndex === i
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : answers[i] !== null
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-indigo-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to submit the test? You won't be able to change your answers after submission."
                )
              ) {
                handleSubmit();
              }
            }}
            className="mt-8 w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition"
          >
            Submit Test
          </button>
        </aside>
      </main>
    </div>
  );
};

export default AttemptTestPro;
