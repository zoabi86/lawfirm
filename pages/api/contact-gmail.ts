// This file handles the contact form submission via SMTP using Nodemailer.
// Use .env.local to store sensitive environment variables like SMTP credentials:
//
// EMAIL_USER=admin.zoabilaw@gmail.com
// EMAIL_PASS=koko
// RECIPIENT_EMAIL=wafaa@zoabilaw.com

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { rateLimit } from '@/lib/rateLimit';

// Basic input sanitization to neutralize HTML/script injection
const sanitize = (input: string): string =>
  input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();

// Utility to send email using Gmail SMTP (App Password required)
const sendEmail = async (name: string, email: string, message: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail or replace with 'smtp.ethereal.email' for testing
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // Be cautious: Gmail may overwrite this
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Contact Us Message',
    text: `You have received a new message:\n\nFrom: ${name}\nEmail: ${email}\n\n${message}`,
  };

  return transporter.sendMail(mailOptions);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', error: 'Method Not Allowed' });
  }

  const ip = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.socket.remoteAddress || 'unknown';

  // 🛡️  Apply rate limit
  if (rateLimit(ip)) {
    return res.status(429).json({ status: 'error', error: 'Too many requests. Please try again later.' });
  }

  const { name, email, message } = req.body;

  // ✅ Validate structure and types
  if (
    !name || typeof name !== 'string' ||
    !email || typeof email !== 'string' ||
    !message || typeof message !== 'string'
  ) {
    return res.status(400).json({ status: 'error', error: 'Invalid input' });
  }

  // ✅ Sanitize inputs
  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safeMessage = sanitize(message);

  try {
    await sendEmail(safeName, safeEmail, safeMessage);
    return res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ status: 'error', error: 'Failed to send email' });
  }
}

