import { useState } from "react";

export default function CreateMemberForm({ onAddMember }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState([]);

  const allSkills = ["React", "UI/UX", "Project Management", "Marketing", "Leadership"];

  const handleSkillToggle = (skill) => {
    setSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMember = {
      id: Date.now(),
      name,
      role,
      experience,
      skills,
      createdAt: new Date().toISOString(),
    };

    onAddMember(newMember);

    setName("");
    setRole("");
    setExperience("");
    setSkills([]);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Team Member</h2>

      <label className="block mb-2 font-medium">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        className="border p-2 w-full rounded mb-4"
        required
      />

      <label className="block mb-2 font-medium">Role</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 w-full rounded mb-4"
        required
      >
        <option value="">Select a role</option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>UI/UX Designer</option>
        <option>Project Manager</option>
        <option>Marketer</option>
      </select>

      <label className="block mb-2 font-medium">Experience Level</label>
      <div className="flex gap-3 mb-4">
        {["Junior", "Mid-Level", "Senior"].map((level) => (
          <button
            type="button"
            key={level}
            onClick={() => setExperience(level)}
            className={`border rounded px-3 py-1 ${
              experience === level ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      <label className="block mb-2 font-medium">Skills</label>
      <div className="flex flex-wrap gap-2 mb-4">
        {allSkills.map((skill) => (
          <button
            type="button"
            key={skill}
            onClick={() => handleSkillToggle(skill)}
            className={`border rounded px-3 py-1 ${
              skills.includes(skill) ? "bg-green-500 text-white" : "bg-gray-100"
            }`}
          >
            {skill}
          </button>
        ))}
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
      >
        Add Member
      </button>
    </form>
  );
}
