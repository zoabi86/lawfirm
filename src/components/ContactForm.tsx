'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("An error occurred while sending. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while sending. Please try again.");
      console.error("API error:", error);
    }
  };

  return (
    <section id="contact" className="container text-gray-400 mx-auto px-6 py-16">
      <h3 className="text-3xl font-bold text-center mb-8">Get in Touch</h3>
      {submitted ? (
        <div className="text-center text-green-600 text-lg font-medium">
          Thank you for contacting us! We will get back to you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full border rounded-md p-2"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full border rounded-md p-2"/>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="mt-1 block w-full border rounded-md p-2"></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-3 bg-foreground text-background rounded-lg hover:bg-accent transition">Send Message</button>
        </form>
      )}
    </section>
  );
}
