// src/App.js
import React, { useRef, useState } from "react";

function App() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("Vielen Dank! Ihre Nachricht wurde gesendet.");
        e.target.reset();
      } else {
        alert("Fehler beim Senden. Bitte versuchen Sie es später.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Fehler beim Senden. Bitte versuchen Sie es später.");
    }

    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", lineHeight: "1.6" }}>
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

      {/* --- Persuasive description section --- */}
      <section
        style={{
          padding: "3rem 2rem",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "1rem" }}>
          Intelligente KI-Lösungen, die Ihr Unternehmen voranbringen
        </h2>

        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          Wir helfen deutschen Unternehmen, die Kraft künstlicher Intelligenz praktisch zu nutzen –
          ohne komplizierte Technik oder endlose Meetings. Unsere spezialisierten KI- und
          Chatbot-Systeme automatisieren Kundenkommunikation, Support und interne Abläufe, damit Sie
          sich auf das Wesentliche konzentrieren können: Wachstum und Innovation.
        </p>

        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          Ob Sie einen virtuellen Assistenten für Ihre Website, einen Chatbot für Social Media oder
          eine individuelle KI-Lösung zur Prozessoptimierung benötigen – wir entwickeln Systeme, die
          zuverlässig, sicher und exakt auf Ihre Branche abgestimmt sind.
        </p>

        <p style={{ fontSize: "1.1rem" }}>
          Mit unserer Erfahrung in Sprachmodellen, Automatisierung und KI-Integration verbinden wir
          Technologie mit echter Benutzerfreundlichkeit. So entsteht messbarer Mehrwert – in Form
          von zufriedenen Kunden, kürzeren Reaktionszeiten und neuen digitalen Möglichkeiten.
        </p>
      </section>
      {/* --- End of description section --- */}

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
              disabled={loading}
              style={{
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                padding: "1rem 2rem",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Senden..." : "Absenden"}
            </button>
          </p>
        </form>
      </section>
    </div>
  );
}

export default App;
