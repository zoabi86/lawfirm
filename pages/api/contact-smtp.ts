// This file handles the contact form submission via SMTP using Nodemailer.
// Use .env.local to store sensitive environment variables like SMTP credentials:
//
// SMTP_HOST=smtp.example.com
// SMTP_PORT=587
// SMTP_USER=your_user
// SMTP_PASS=your_password
// CONTACT_FROM_EMAIL=no-reply@yourdomain.com
// CONTACT_TO_EMAIL=you@yourdomain.com

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Simple HTML tag sanitizer
function sanitize(input: string): string {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  // Basic type validation
  if (
    !name || !email || !message ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }

  // Sanitize inputs
  const safeName = sanitize(name.trim());
  const safeEmail = sanitize(email.trim());
  const safeMessage = sanitize(message.trim());

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    });

    await transporter.sendMail({
      from: `"${safeName}" <${process.env.CONTACT_FROM_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: "New Contact Form Submission",
      text: `From: ${safeName}\nEmail: ${safeEmail}\n\n${safeMessage}`
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}

