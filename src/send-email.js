// /netlify/functions/send-email.js
import nodemailer from "nodemailer";

export async function handler(event, context) {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Configure your SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // your SMTP host
      port: 465, // SSL
      secure: true,
      auth: {
        user: "martivideoproductions2@gmail.com",      // your SMTP email
        pass: "vduh bvyn eihg mtry",         // app password if Gmail
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,             // sender name & email
      to: "info@martitony.com",  // where you want emails
      replyTo: email,                           // reply directly to sender
      subject: `Neue Nachricht von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
          <p>Eine neue Nachricht von Ihrem KI-Projekt-Kontaktformular:</p>
          <div style="margin-top: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Nachricht:</strong></p>
            <p style="background-color:#f0f0f0; padding:10px; border-radius:5px;">${message}</p>
          </div>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email erfolgreich gesendet!" }),
    };
  } catch (err) {
    console.error("SMTP Error:", err);
    return { statusCode: 500, body: JSON.stringify({ message: "Fehler beim Senden der Email" }) };
  }
}
