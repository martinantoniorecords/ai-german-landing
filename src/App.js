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
      const response = await fetch("/api/send-email", { // <-- Vercel API route
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
          IT Terraforming Services für digitale Unternehmen
        </h1>
      </section>

      <section
        style={{
          padding: "3rem 2rem",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "1rem" }}>
          Transformieren Sie Ihre digitale Landschaft
        </h2>

        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          Unsere IT Terraforming Services optimieren, modernisieren und automatisieren Ihre digitale Infrastruktur.
          Wir schaffen stabile, skalierbare und zukunftssichere Systeme, damit Ihr Unternehmen effizienter arbeiten kann.
        </p>

        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          Von Software-Architektur-Redesign über Cloud-Migration bis hin zu Prozessautomatisierung –
          wir gestalten Ihre digitale Umgebung so, dass Technologie nahtlos mit Ihren Geschäftsprozessen zusammenarbeitet.
        </p>

        <p style={{ fontSize: "1.1rem" }}>
          Mit unserer Erfahrung in IT-Infrastruktur, DevOps und Automatisierung verwandeln wir
          komplexe Systeme in ein robustes, wartbares und effizientes digitales Ökosystem.
          So schaffen wir echten Mehrwert: schnellere Abläufe, weniger Fehler und maximale Skalierbarkeit.
        </p>
      </section>

      <section
        id="contact"
        style={{ backgroundColor: "#f5f5f5", padding: "4rem 2rem", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "2rem" }}>
          Starten Sie Ihr IT Terraforming Projekt
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
