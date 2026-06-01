import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope size={30} />,
      title: "Email",
      value: "vinni28012006@gmail.com",
      link: "mailto:vinni28012006@gmail.com",
    },
    {
      icon: <FaPhone size={30} />,
      title: "Phone",
      value: "+91 8015555836",
      link: "tel:+918015555836",
    },
    {
      icon: <FaLinkedin size={30} />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/vinnarasu-b-691619365",
    },
    {
      icon: <FaGithub size={30} />,
      title: "GitHub",
      value: "View repositories",
      link: "https://github.com/VINNEY1628",
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "100px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "20px",
        }}
      >
        Get In <span style={{ color: "#ff2d2d" }}>Touch</span>
      </h1>

      <p
        style={{
          color: "#aaa",
          marginBottom: "60px",
          fontSize: "1.2rem",
        }}
      >
        Ready to collaborate on exciting projects or discuss opportunities?
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <div
              style={{
                background: "#111",
                borderRadius: "20px",
                padding: "40px",
                border: "1px solid #222",
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  color: "#ff2d2d",
                  marginBottom: "20px",
                }}
              >
                {contact.icon}
              </div>

              <h2>{contact.title}</h2>

              <p
                style={{
                  color: "#aaa",
                  marginTop: "10px",
                }}
              >
                {contact.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div
        style={{
          marginTop: "80px",
        }}
      >
        <h2>Let's build something amazing together!</h2>

        <p
          style={{
            color: "#aaa",
            marginTop: "15px",
          }}
        >
          Whether you have a project idea or just want to discuss technology,
          I'm always open to connecting with fellow developers.
        </p>
        <section id="contact"></section>
      </div>
    </section>
  );
}

export default Contact;