import React from "react";

function App() {
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
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto 2rem auto" }}>
          Wir helfen Ihnen, Entwicklungszeiten zu verkürzen, Projektkosten zu senken und hochsichere
          KI-Lösungen schneller umzusetzen – mit erfahrenen Entwicklern als Subunternehmer.
        </p>
        <a href="#contact">
          <button
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
            Unverbindliches Beratungsgespräch vereinbaren
          </button>
        </a>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        style={{ backgroundColor: "#f5f5f5", padding: "4rem 2rem", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "2rem" }}>
          Starten Sie jetzt Ihr KI-Projekt
        </h2>
        <p style={{ marginBottom: "2rem" }}>
          Füllen Sie das Formular aus oder rufen Sie uns direkt an: <strong>Telefon: +359 882 957 008</strong>
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}
        >
          <input type="hidden" name="form-name" value="contact" />

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
              Rolle:<br />
              <select name="role[]" multiple style={{ width: "100%", padding: "0.5rem" }}>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
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

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "2rem", fontSize: "0.9rem", color: "#777" }}>
        <p>Marti Tony Software – Impressum – Datenschutz</p>
      </footer>
    </div>
  );
}

export default App;
