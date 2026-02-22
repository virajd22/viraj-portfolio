export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}