import React, { useState } from "react";
import { supabase } from "./supabaseClient"; // make sure this points to your supabaseClient.js

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Insert into the new table for AI project inquiries
      const { error } = await supabase.from("ai_project_messages").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      alert("Vielen Dank! Ihre Nachricht wurde gesendet.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Fehler beim Senden. Bitte versuchen Sie es später.");
    } finally {
      setLoading(false);
    }
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

      <section
        id="contact"
        style={{ backgroundColor: "#f5f5f5", padding: "4rem 2rem", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "2rem" }}>
          Starten Sie jetzt Ihr KI-Projekt
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}
        >
          <p>
            <label>
              Name:<br />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "0.5rem" }}
              />
            </label>
          </p>

          <p>
            <label>
              E-Mail:<br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "0.5rem" }}
              />
            </label>
          </p>

          <p>
            <label>
              Nachricht:<br />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "0.5rem" }}
              />
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
                cursor: "pointer",
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
