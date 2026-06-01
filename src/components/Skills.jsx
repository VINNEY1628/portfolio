const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "Git",
  "GitHub",

];

function Skills() {
  return (
    <section
      id="skills"
      style={{
       
        padding: "100px",
        color: "white",
      }}
    >
      <h1
        style={{
          color: "#ff2d2d",
          fontSize: "3.5rem",
          marginBottom: "60px",
          textAlign: "center",
        }}
      >
        Technical Skills
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: "#111",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              border: "1px solid #ff2d2d",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            {skill}
          </div>
        ))}
        <section id="skills"></section>
      </div>
    </section>
  );
}

export default Skills;