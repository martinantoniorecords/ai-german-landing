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

      {/* Services Section */}
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "2rem" }}>
          Was wir für Ihr Unternehmen tun können
        </h2>
        <ul style={{ listStyle: "disc", margin: "0 auto", maxWidth: "600px", textAlign: "left" }}>
          <li><strong>KI-Integrationen:</strong> Intelligente Automatisierung, Datenanalyse & Machine Learning</li>
          <li><strong>Chatbot-Entwicklung:</strong> Kundenservice, Lead-Generierung und Prozessoptimierung</li>
          <li><strong>Backend-Entwicklung:</strong> Python, Node.js & skalierbare APIs</li>
          <li><strong>Schnelle Projektunterstützung:</strong> Temporäre Entwicklerteams als Subunternehmer</li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "2rem" }}>
          Warum deutsche Unternehmen uns wählen
        </h2>
        <ul style={{ listStyle: "disc", margin: "0 auto", maxWidth: "600px", textAlign: "left" }}>
          <li><strong>Projektbeschleunigung:</strong> Verkürzen Sie Entwicklungszeiten um bis zu 30 %</li>
          <li><strong>Kostenersparnis:</strong> Effiziente Subunternehmer-Lösungen ohne Qualitätsverlust</li>
          <li><strong>Hohe Sicherheit:</strong> Standardkonforme KI- und Softwareentwicklung</li>
          <li><strong>Flexibilität:</strong> Temporäre Teams für Spitzenprojekte oder Kapazitätsengpässe</li>
        </ul>
      </section>

      {/* Proof Section */}
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "2rem" }}>
          Referenzen & Beispiele
        </h2>
        <ul style={{ listStyle: "disc", margin: "0 auto", maxWidth: "600px", textAlign: "left" }}>
          <li>Unterstützung eines deutschen SaaS-Unternehmens bei der Chatbot-Integration – Projekt in 6 Wochen abgeschlossen.</li>
          <li>KI-gestützte Automatisierung für einen Mittelständler – 25 % schnellere Prozesse.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ backgroundColor: "#f5f5f5", padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "2rem" }}>
          Starten Sie jetzt Ihr KI-Projekt
        </h2>
        <p style={{ marginBottom: "2rem" }}>
          Füllen Sie das Formular aus oder rufen Sie uns direkt an: <strong>Telefonnummer: 00359 882 957 008</strong>
        </p>

        {/* ✅ Working Netlify Form */}
        <form
          name="contact"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <label style={{ display: "block", marginBottom: "0.5rem" }}>Name</label>
          <input
            type="text"
            name="name"
            required
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />

          <label style={{ display: "block", marginBottom: "0.5rem" }}>E-Mail</label>
          <input
            type="email"
            name="email"
            required
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />

          <label style={{ display: "block", marginBottom: "0.5rem" }}>Firma</label>
          <input
            type="text"
            name="company"
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />

          <label style={{ display: "block", marginBottom: "0.5rem" }}>Projekt-Herausforderung</label>
          <textarea
            name="message"
            rows="4"
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          ></textarea>

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
            Jetzt unverbindlich anfragen
          </button>
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
