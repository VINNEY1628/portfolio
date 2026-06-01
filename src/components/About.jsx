function About() {
  return (
    <section
      id="about"
      style={{
        
        padding: "80px 100px",
        color: "white",
      }}
    >
      <h1
        style={{
          color: "#ff2d2d",
          fontSize: "3.5rem",
          marginBottom: "50px",
          textAlign: "center",
        }}
      >
        About Me
      </h1>

      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          background: "#111",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid #222",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "2",
            color: "#ddd",
          }}
        >
        Computer Science graduate with a strong foundation in Full Stack Web Development and problem-solving. Skilled in MERN Stack, PHP, MySQL, Git, and modern web technologies. Developed projects including Hospital Management System, Smart Finance & Expense Tracker, and IoT-Based Face Attendance Tracking System. Passionate about building scalable applications, learning new technologies, and contributing to innovative software solutions. Currently seeking opportunities as a Software Developer or Full Stack Developer.

        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div>
            <h2 style={{ color: "#ff2d2d" }}>10+</h2>
            <p>Technologies</p>
          </div>

          <div>
            <h2 style={{ color: "#ff2d2d" }}>3+</h2>
            <p>Projects</p>
          </div>

          <div>
            <h2 style={{ color: "#ff2d2d" }}>100%</h2>
            <p>Passion</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;