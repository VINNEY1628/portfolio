function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "80px 0",
        color: "white",
      }}
    >
      <h1
        style={{
          color: "#ff2d2d",
          textAlign: "center",
          fontSize: "4rem",
          marginBottom: "50px",
        }}
      >
        Experience & Education
      </h1>

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          background: "#0d0d0d",
          border: "1px solid #1f1f1f",
          borderRadius: "25px",
          padding: "50px",
          boxShadow: "0 0 20px rgba(255,45,45,0.08)",
        }}
      >
        {/* Education */}
        <div
          style={{
            marginBottom: "30px",
            paddingBottom: "25px",
            borderBottom: "1px solid #222",
          }}
        >
          <span
            style={{
              color: "#ff2d2d",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            2023 - 2026
          </span>

          <h2
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              fontSize: "2rem",
            }}
          >
            Bachelor of Science in Computer Science
          </h2>

          <p
            style={{
              color: "#cfcfcf",
              lineHeight: "1.8",
              fontSize: "1.05rem",
            }}
          >
            Pursuing a Computer Science degree with strong foundations in
            Programming, Database Management Systems,
             Data Structures, Algorithms, and Modern Web Technologies.
          </p>
        </div>

        {/* Training */}
        <div
          style={{
            marginBottom: "30px",
            paddingBottom: "25px",
            borderBottom: "1px solid #222",
          }}
        >
          <span
            style={{
              color: "#ff2d2d",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            2025
          </span>

          <h2
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              fontSize: "2rem",
            }}
          >
            MERN Stack Development Training
          </h2>

          <p
            style={{
              color: "#cfcfcf",
              lineHeight: "1.8",
              fontSize: "1.05rem",
            }}
          >
            Completed professional training in MongoDB, Express.js, React.js,
            and Node.js. Built responsive full-stack applications with REST
            APIs, Authentication, CRUD Operations, and Database Integration.
          </p>
        </div>

      

        {/* Stats Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "50px",
            textAlign: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h2 style={{ color: "#ff2d2d" }}>3+</h2>
            <p>Major Projects</p>
          </div>

          <div>
            <h2 style={{ color: "#ff2d2d" }}>10+</h2>
            <p>Technologies</p>
          </div>

          <div>
            <h2 style={{ color: "#ff2d2d" }}>100%</h2>
            <p>Dedication</p>
          </div>
        </div>
        <section id="experience"></section>
      </div>

    </section>
  );
}

export default Experience;