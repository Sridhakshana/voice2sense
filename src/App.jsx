export default function App() {
  const features = [
    {
      title: "Real-Time Speech Recognition",
      description:
        "Converts spoken words into live captions instantly using AI.",
    },
    {
      title: "Simplified Captions",
      description:
        "Transforms complex speech into easy-to-understand text.",
    },
    {
      title: "Indian Sign Language",
      description:
        "Displays animated ISL gestures for better accessibility.",
    },
    {
      title: "Multilingual Support",
      description:
        "Supports multiple Indian languages for communication.",
    },
  ];

  const technologies = [
    "Whisper AI",
    "Google STT API",
    "React",
    "Python",
    "FastAPI",
    "OpenPose",
    "Blender",
    "IndicTrans",
  ];

  return (
    <div style={styles.body}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Voice2Sense</h1>

        <div style={styles.navLinks}>
          <a href="#about" style={styles.link}>About</a>
          <a href="#features" style={styles.link}>Features</a>
          <a href="#technology" style={styles.link}>Technology</a>
          <a href="#impact" style={styles.link}>Impact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Breaking Communication Barriers with AI
        </h1>

        <p style={styles.heroText}>
          Voice2Sense converts spoken words into real-time captions,
          simplified text, and Indian Sign Language gestures for inclusive
          communication.
        </p>

        <button style={styles.button}>Explore Project</button>
      </section>

      {/* About */}
      <section id="about" style={styles.section}>
        <h2 style={styles.heading}>About Voice2Sense</h2>

        <p style={styles.paragraph}>
          Voice2Sense is an AI-powered accessibility platform designed to help
          Deaf and Hard-of-Hearing individuals communicate easily using
          speech-to-text and sign language technologies.
        </p>
      </section>

      {/* Features */}
      <section id="features" style={styles.section}>
        <h2 style={styles.heading}>Features</h2>

        <div style={styles.cardContainer}>
          {features.map((feature, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{feature.title}</h3>
              <p style={styles.cardText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section id="technology" style={styles.section}>
        <h2 style={styles.heading}>Technologies Used</h2>

        <div style={styles.techContainer}>
          {technologies.map((tech, index) => (
            <span key={index} style={styles.techBox}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section id="impact" style={styles.section}>
        <h2 style={styles.heading}>Impact & Benefits</h2>

        <p style={styles.paragraph}>
          Voice2Sense helps students, media audiences, and hearing-impaired
          individuals by making communication accessible through AI-powered
          captions and sign language support.
        </p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 Voice2Sense | AI Accessibility Project</p>
      </footer>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: "#0a0a0a",
    color: "white",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    borderBottom: "1px solid #222",
    position: "sticky",
    top: 0,
    backgroundColor: "#0a0a0a",
  },

  logo: {
    color: "#00e5ff",
    fontSize: "28px",
    fontWeight: "bold",
  },

  navLinks: {
    display: "flex",
    gap: "20px",
  },

  link: {
    color: "white",
    textDecoration: "none",
  },

  hero: {
    textAlign: "center",
    padding: "120px 20px",
    background:
      "linear-gradient(to bottom, rgba(0,229,255,0.2), #0a0a0a)",
  },

  heroTitle: {
    fontSize: "55px",
    maxWidth: "900px",
    margin: "auto",
    lineHeight: "1.2",
  },

  heroText: {
    color: "#bbbbbb",
    marginTop: "30px",
    fontSize: "20px",
    maxWidth: "800px",
    marginInline: "auto",
  },

  button: {
    marginTop: "40px",
    padding: "15px 35px",
    backgroundColor: "#00e5ff",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  section: {
    padding: "80px 40px",
    textAlign: "center",
  },

  heading: {
    fontSize: "40px",
    marginBottom: "30px",
    color: "#00e5ff",
  },

  paragraph: {
    maxWidth: "900px",
    margin: "auto",
    color: "#cccccc",
    fontSize: "18px",
    lineHeight: "1.8",
  },

  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    marginTop: "50px",
  },

  card: {
    backgroundColor: "#111",
    padding: "30px",
    borderRadius: "20px",
    border: "1px solid #222",
  },

  cardTitle: {
    color: "#00e5ff",
    marginBottom: "15px",
    fontSize: "24px",
  },

  cardText: {
    color: "#bbbbbb",
    lineHeight: "1.6",
  },

  techContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    marginTop: "40px",
  },

  techBox: {
    backgroundColor: "#111",
    border: "1px solid #00e5ff",
    padding: "12px 20px",
    borderRadius: "10px",
  },

  footer: {
    textAlign: "center",
    padding: "30px",
    borderTop: "1px solid #222",
    color: "#888",
  },
};