export default function Jobs() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      skill: "React",
    },
    {
      title: "Backend Developer",
      company: "Data Systems",
      skill: "Node.js",
    },
    {
      title: "Full Stack Engineer",
      company: "StartupX",
      skill: "MERN",
    },
  ];

  return (
    <div style={{ padding: 30 }}>
      <h2>Recommended Jobs 💼</h2>

      {jobs.map((job, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            padding: 15,
            marginBottom: 10,
          }}
        >
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>Skill: {job.skill}</p>
        </div>
      ))}
    </div>
  );
}