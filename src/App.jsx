import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

// ✅ Desktop photo import from "assets" folder
import myPhoto from "./assets/deepak.jpg"; // folder ka exact naam assets

function App() {
  const form = useRef();

  // Email send function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lqktwvf",   // Replace with your Service ID
        "template_4qp5qhh",  // Replace with your Template ID
        form.current,
        "TxYP9ChXTDPX6lJ8z"  // Replace with your Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          console.log(result.text);
          form.current.reset(); // Reset form after sending
        },
        (error) => {
          alert("❌ Failed to send message!");
          console.log(error.text);
        }
      );
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>🌟 Deepak Singh Yadav</h1>
        <p style={{ fontSize: "1.2rem" }}>Computer Science Student | Web Developer</p>
      </header>

      {/* Profile Section */}
      <section style={styles.profileCard}>
        <img
          src={myPhoto}      // ✅ Correct imported photo
          alt="Profile"
          style={styles.profilePic}
        />
        <h2 style={{ marginBottom: "5px" }}>Deepak Singh Yadav</h2>
        <h4 style={{ marginTop: "0", color: "#555" }}>💻 Computer Science Student</h4>
        <p style={{ maxWidth: "500px", margin: "15px auto", color: "#666" }}>
          Passionate about coding, web development, and building modern apps.
          I love learning new technologies and creating projects that make an impact. 🚀
        </p>
      </section>

      {/* Contact Form */}
      <section style={styles.contactBox}>
        <h2 style={{ marginBottom: "15px" }}>📩 Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} style={styles.form}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            style={styles.input}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Write your message..."
            required
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Deepak Singh Yadav | Made with ❤️ using React + Vite + EmailJS</p>
      </footer>
    </div>
  );
}

// CSS-in-JS Styles
const styles = {
  page: {
    fontFamily: "'Segoe UI', sans-serif",
    background: "#f9f9f9",
    color: "#333",
    lineHeight: "1.6",
  },
  header: {
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "white",
    padding: "40px 20px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  profileCard: {
    textAlign: "center",
    background: "white",
    padding: "40px 20px",
    margin: "30px auto",
    borderRadius: "20px",
    maxWidth: "700px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  },
  profilePic: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    border: "5px solid #6a11cb",
    marginBottom: "15px",
  },
  contactBox: {
    background: "white",
    padding: "40px 20px",
    margin: "30px auto",
    borderRadius: "20px",
    maxWidth: "600px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
  input: {
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "0.3s",
  },
  textarea: {
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    height: "140px",
    resize: "none",
    outline: "none",
    transition: "0.3s",
  },
  button: {
    padding: "15px",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "all 0.3s",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#2575fc",
    color: "white",
    marginTop: "40px",
  },
};

export default App;
