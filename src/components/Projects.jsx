function Projects() {
  const projects = [
    {
      title: "Hospital Management System",
      icon: "🏥",
      tech: "PHP • Flask • MySQL",
       github: "https://github.com/VINNEY1628/hospital-management-system",
      description:
        "Developed a full-stack Hospital Management System to streamline hospital operations and digitize patient record management. The application allows administrators to manage patients, doctors, appointments, treatments, and billing through a centralized dashboard.",
      features: [
        "Patient registration and record management",
        "Doctor scheduling and appointment booking",
        "Billing and payment tracking",
        "Secure MySQL database integration",
        "Administrative dashboard for hospital staff",
      ],
    },
    {
      title: "Smart Finance & Expense Tracker",
      tech: "MongoDB • Express.js • React.js • Node.js",
      icon: "📊",
      github: "https://github.com/VINNEY1628/finpilot",
      description:
        "Built a finance management platform that helps users track income, expenses, budgets, and financial reports. The system provides real-time insights into spending patterns and personal financial management.",
      features: [
        "Income and expense tracking",
        "Category-wise expense management",
        "Interactive analytics dashboard",
        "Monthly and yearly financial reports",
        "Budget planning and monitoring",
      ],
      
    },
    {
  title: "AI Code Reviewer",
  tech: "Python • Flask • Groq AI • JavaScript • HTML • CSS • ReportLab",
  icon: "🤖",
  github: "https://github.com/VINNEY1628/AI-Code-Reviewer",
  description:
    "Developed an AI-powered code review platform that analyzes source code, detects bugs, suggests improvements, generates optimized code, and provides professional review reports using Large Language Models.",

  features: [
    "AI-powered code analysis and review",
    "Automatic bug and issue detection",
    "Code quality scoring system",
    "Time complexity analysis",
    "AI-generated optimized code suggestions",
    "One-click code fixing using Groq LLM",
    "Interactive AI assistant for code-related queries",
    "Professional PDF and DOCX report generation",
    "Dark-themed responsive user interface",
    "Cloud deployment using Render"
  ]
},
    {
  title: "IoT-Based Face Attendance Tracking System",
  tech: "Python • OpenCV • Tkinter • NumPy • Pandas • Face Recognition",
  icon: "📷",
  github: "https://github.com/VINNEY1628/face-attendance-system",
  description:
    "Developed an intelligent attendance management system that automates attendance tracking using facial recognition technology. The system captures facial images through a webcam, trains a recognition model using OpenCV's LBPH algorithm, identifies registered users in real time, and automatically records attendance with timestamps.",
  features: [
    "Real-time face detection and recognition using OpenCV",
    "Student registration with image dataset generation",
    "LBPH face recognition model training",
    "Automated attendance marking with date and time",
    "Tkinter-based graphical user interface",
    "Attendance report generation in CSV format",
    "Secure storage of student information",
    "Reduced manual attendance errors and proxy attendance"
  ]
}

  
  ];

 return (
  <section
    id="projects"
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
      Featured Projects
    </h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
        gap: "30px",
      }}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,45,45,0.3)",
            borderRadius: "20px",
            padding: "25px",
            transition: "0.3s",
            minHeight: "550px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "15px",
                background:
                  "linear-gradient(135deg,#ff2d2d,#600000)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                marginBottom: "20px",
              }}
            >
              {project.icon}
            </div>

            <h2
              style={{
                marginBottom: "15px",
                color: "white",
              }}
            >
              {project.title}
            </h2>

            <p
              style={{
                color: "#bbb",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              {project.tech.split("•").map((tech, i) => (
                <span
                  key={i}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "20px",
                    background: "#222",
                    fontSize: "13px",
                    color: "#ddd",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul
              style={{
                color: "#ccc",
                lineHeight: "1.8",
                paddingLeft: "18px",
              }}
            >
              {project.features.slice(0, 4).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <a
            href="https://github.com/VINNEY1628"
            target="_blank"
            rel="noreferrer"
            style={{
              marginTop: "25px",
              textDecoration: "none",
              textAlign: "center",
              padding: "12px",
              borderRadius: "10px",
              background: "#111",
              border: "1px solid #333",
              color: "white",
              fontWeight: "600",
            }}
          >
            <div
  className="project-card"
  key={index}
></div>
            View Code
          </a>
        </div>
      ))}
      <section id="projects"></section>
    </div>
  </section>
);
}

export default Projects;