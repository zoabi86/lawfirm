import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const sendEmail = async (name: string, email: string, message: string) => {
  // Create reusable transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // or use any other email service
    auth: {
      user: process.env.EMAIL_USER,  // Gmail email address
      pass: process.env.EMAIL_PASS,  // Gmail app password
    },
  });

  const mailOptions = {
    from: email,  // Sender's email address
    to: process.env.RECIPIENT_EMAIL,  // Recipient's email address
    subject: 'New Contact Us Message',
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  return transporter.sendMail(mailOptions);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      await sendEmail(name, email, message);
      return res.status(200).json({ status: 'success' });
    } catch (error) {
      console.error('Email error:', error);
      return res.status(500).json({ status: 'error', error: 'Failed to send email' });
    }
  } else {
    return res.status(405).json({ status: 'error', error: 'Method Not Allowed' });
  }
}

