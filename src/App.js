// src/App.js
import React, { useRef, useState } from "react";
import supabase from "./supabaseClient";

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

    const { error } = await supabase.from("ai_project_messages").insert([
      { name, email, message },
    ]);

    if (error) {
      console.error("Error inserting message:", error);
      alert("Fehler beim Senden. Bitte versuchen Sie es später.");
    } else {
      alert("Vielen Dank! Ihre Nachricht wurde gesendet.");
      e.target.reset();
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
