import React, { useEffect, useState } from "react";
import { Pencil, Save } from "lucide-react";
import axios from "axios";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    rollNo: "MCA2025-101",
    course: "MCA",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "sidd07dev",
    district: "Angul",
    domain: "Web Development",
    dob: "1998-04-15",
    photo: "https://avatars.githubusercontent.com/u/583231?v=4", // placeholder
  });

  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    if (profile.github) {
      axios
        .get(`https://api.github.com/users/${profile.github}`)
        .then((res) => setGithubData(res.data))
        .catch((err) => console.error("GitHub Fetch Error:", err));
    }
  }, [profile.github]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4 text-[#2D3436]">
      <div className="max-w-4xl mx-auto bg-[#F8FAFC] rounded-md p-6 shadow-sm border border-[#5C7CFA]/20">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={profile.photo}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-[#5C7CFA] shadow-sm"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-[#5C7CFA]">Student Profile</h2>
              <button
                onClick={() => setEditMode(!editMode)}
                className="flex items-center gap-2 bg-[#5C7CFA] text-[#F8FAFC] px-4 py-2 rounded-md font-semibold hover:bg-[#4DB6AC] transition"
                aria-label={editMode ? "Save profile" : "Edit profile"}
              >
                {editMode ? <Save size={18} /> : <Pencil size={18} />}
                {editMode ? "Save" : "Edit"}
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Name", name: "name" },
                { label: "Roll No", name: "rollNo" },
                { label: "Course", name: "course", type: "select", options: ["MCA", "BCA", "MSc"] },
                { label: "DOB", name: "dob", type: "date" },
                { label: "LinkedIn", name: "linkedin" },
                { label: "GitHub Username", name: "github" },
                { label: "District", name: "district" },
                { label: "Domain", name: "domain" },
              ].map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-sm font-medium mb-1 text-[#2D3436]">{field.label}</label>
                  {editMode ? (
                    field.type === "select" ? (
                      <select
                        name={field.name}
                        value={profile[field.name]}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-[#F8FAFC] text-[#2D3436] border border-[#5C7CFA] focus:outline-none focus:ring-2 focus:ring-[#4DB6AC]"
                        aria-label={field.label}
                      >
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type || "text"}
                        name={field.name}
                        value={profile[field.name]}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-[#F8FAFC] text-[#2D3436] border border-[#5C7CFA] focus:outline-none focus:ring-2 focus:ring-[#4DB6AC]"
                        aria-label={field.label}
                      />
                    )
                  ) : (
                    <p className="text-[#2D3436]/80">{profile[field.name]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub Details */}
        {githubData && (
          <div className="mt-10 bg-[#F8FAFC] p-6 rounded-md shadow-sm border border-[#5C7CFA]/20">
            <h3 className="text-2xl font-semibold mb-4 text-[#5C7CFA]">GitHub Profile</h3>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <img
                src={githubData.avatar_url}
                alt="GitHub Avatar"
                className="w-24 h-24 rounded-full border-4 border-[#5C7CFA] shadow-sm"
              />
              <div className="flex-1">
                <p className="mb-2">
                  <span className="font-semibold text-[#2D3436]">Name:</span>{" "}
                  <span className="text-[#2D3436]/80">{githubData.name || "N/A"}</span>
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-[#2D3436]">Bio:</span>{" "}
                  <span className="text-[#2D3436]/80">{githubData.bio || "N/A"}</span>
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-[#2D3436]">Repos:</span>{" "}
                  <span className="text-[#2D3436]/80">{githubData.public_repos}</span>
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-[#2D3436]">Followers:</span>{" "}
                  <span className="text-[#2D3436]/80">{githubData.followers}</span>
                </p>
                <a
                  href={githubData.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 text-[#5C7CFA] hover:text-[#4DB6AC] underline transition"
                  aria-label="View GitHub Profile"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;