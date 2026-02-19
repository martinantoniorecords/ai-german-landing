import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Step 1: Parse JSON body safely
  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch (err) {
    console.error("Invalid JSON:", err);
    return res.status(400).json({ message: "Invalid JSON" });
  }

  const { name, email, message } = body;

  // Step 2: Debug logs to check inputs and environment
  console.log("Received form data:", { name, email, message });
  console.log("Environment variables check:");
  console.log("GMAIL_USER:", process.env.GMAIL_USER ? "OK" : "MISSING");
  console.log("GMAIL_PASS:", process.env.GMAIL_PASS ? "OK" : "MISSING");

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    return res.status(500).json({ message: "Gmail environment variables not set" });
  }

  // Step 3: Create transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,       // SSL port, usually most reliable on Vercel
    secure: true,    // use SSL
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Step 4: Send email with debug
  try {
    const info = await transporter.sendMail({
      from: `"Website Kontaktformular" <${process.env.GMAIL_USER}>`,
     to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Neue Nachricht von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
          <p>Eine neue Nachricht von Ihrem IT Terraforming-Kontaktformular:</p>
          <div style="margin-top: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Nachricht:</strong></p>
            <p style="background-color:#f0f0f0; padding:10px; border-radius:5px;">${message}</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", info.messageId);
    return res.status(200).json({ message: "Email erfolgreich gesendet!" });
  } catch (err) {
    console.error("SMTP Error:", err);
    return res.status(500).json({ message: "Fehler beim Senden der Email" });
  }
}
