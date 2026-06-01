import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Hero() {
  return (
   <section
  id="home"
  style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 8%",
    color: "white",
    background: "transparent",
  }}
>
    
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 2 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "5rem",
            color: "#ff2d2d",
            marginBottom: "20px",
            fontWeight: "bold",
             fontSize: "5rem",
  color: "#ff2d2d",
 
          }}
        >
          VINNARASU B
        </motion.h1>
<TypeAnimation
  sequence={[
    "Full Stack Developer",
    2000,
    "MERN Stack Developer",
    2000,
   
    "Web Developer",
    2000,
  ]}
  wrapper="h2"
  repeat={Infinity}
  style={{
    fontSize: "2rem",
    color: "#ddd",
    marginBottom: "20px",
    fontWeight: "bold",
  }}
/>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            maxWidth: "600px",
            lineHeight: "1.8",
            color: "#aaa",
            marginBottom: "30px",
          }}
        >
          Computer Science Graduate skilled in MERN Stack, PHP,
          MySQL, Git and modern web technologies. Passionate about
          building scalable applications and solving real-world
          problems.
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
  style={{
    display: "flex",
    gap: "50px",
    marginBottom: "30px",
  }}
>
 

  <div>
    <h2
      style={{
        color: "#ff2d2d",
        fontSize: "2rem",
        margin: 0,
      }}
    >
      MERN
    </h2>
    <p style={{ color: "#aaa" }}>Tech Stack</p>
  </div>

  <div>
    <h2
      style={{
        color: "#ff2d2d",
        fontSize: "2rem",
        margin: 0,
      }}
    >
      2026
    </h2>
    <p style={{ color: "#aaa" }}>Graduate</p>
  </div>
</motion.div>
        </motion.p>

        <motion.a
          href={resume}
          download
          whileHover={{
            scale: 1.08,
  boxShadow:
    "0 0 10px #ff2d2d, 0 0 20px #ff2d2d, 0 0 40px #ff2d2d",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            padding: "15px 35px",
            background: "#ff2d2d",
            color: "white",
            textDecoration: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* RIGHT SIDE */}
      <div
        style={{
          position: "relative",
          width: "450px",
          height: "450px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Animated Circle 1 */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            border: "2px solid #ff2d2d",
            borderRadius: "50%",
            borderTopColor: "transparent",
          }}
        />

        {/* Animated Circle 2 */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: "380px",
            height: "380px",
            border: "2px solid rgba(255,45,45,0.5)",
            borderRadius: "50%",
            borderBottomColor: "transparent",
          }}
        />

        {/* Floating Image */}
   
  <motion.img
    src={profile}
    alt="profile"
    // animate={{
    //   y: [0, -20, 0],
    //   rotate: [0, 2, 0, -2, 0],
    // }}
    transition={{
      duration: 6,
      repeat: Infinity,
    }}
    style={{
      width: "350px",
      height: "350px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid #ff2d2d",
      boxShadow: "0 0 50px rgba(255,45,45,0.8)",
      zIndex: 2,
    }}
  />

<motion.li
  whileHover={{
    scale: 1.1,
    color: "#ff2d2d",
  }}
>

</motion.li>

      </div>
      <section id="home"></section>
    </section>
  );
}

export default Hero;