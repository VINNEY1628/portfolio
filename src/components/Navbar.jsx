function Navbar() {
  return (
    <nav
    
     style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 80px",
  position: "fixed",
  width: "100%",
  top: 0,
  background: "rgba(20,20,20,0.4)",
  backdropFilter: "blur(15px)",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  zIndex: 1000,
}}
      
    >
      <h2 style={{ color: "#ff2d2d" }}>VB</h2>
<ul
  style={{
    display: "flex",
    gap: "30px",
    listStyle: "none",
  }}
>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
    </nav>
  );
}

export default Navbar;