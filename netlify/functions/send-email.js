// api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = JSON.parse(req.body);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,           // SSL
      secure: true,        // use SSL
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: `"Website Kontaktformular" <${process.env.GMAIL_USER}>`,
      to: "info@martitony.com",
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

    return res.status(200).json({ message: "Email erfolgreich gesendet!" });
  } catch (err) {
    console.error("SMTP Error:", err);
    return res.status(500).json({ message: "Fehler beim Senden der Email" });
  }
}
