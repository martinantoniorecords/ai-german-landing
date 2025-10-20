import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0g4hzjq",
        "template_67a1ux8",
        form.current,
        "7ssQ7rgQbCQEdXZ_4"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Vielen Dank! Ihre Nachricht wurde gesendet.");
          e.target.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Fehler beim Senden. Bitte versuchen Sie es später.");
        }
      );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", lineHeight: "1.6" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#f5f5f5",
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        <h1 style={{ fontSize: "2.2rem", fontWeight: "700", marginBottom: "1rem" }}>
          Spezialisierte KI- und Chatbot-Entwicklung für deutsche Softwareunternehmen
        </h1>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        style={{ backgroundColor: "#f5f5f5", padding: "4rem 2rem", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "2rem" }}>
          Starten Sie jetzt Ihr KI-Projekt
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}
        >
          <p>
            <label>
              Name:<br />
              <input type="text" name="name" required style={{ width: "100%", padding: "0.5rem" }} />
            </label>
          </p>

          <p>
            <label>
              E-Mail:<br />
              <input type="email" name="email" required style={{ width: "100%", padding: "0.5rem" }} />
            </label>
          </p>

          <p>
            <label>
              Nachricht:<br />
              <textarea name="message" required style={{ width: "100%", padding: "0.5rem" }}></textarea>
            </label>
          </p>

          <p>
            <button
              type="submit"
              style={{
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                padding: "1rem 2rem",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Absenden
            </button>
          </p>
        </form>
      </section>
    </div>
  );
}

export default App;
