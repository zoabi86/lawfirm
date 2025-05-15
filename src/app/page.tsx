"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'your_service_id',     // e.g. 'service_abc123'
      'your_template_id',    // e.g. 'template_xyz456'
      formData,
      'your_user_id'         // e.g. 'user_789def' or 'public_key_abc'
    ).then(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }).catch(error => {
      alert("An error occurred while sending. Please try again.");
      console.error("EmailJS error:", error);
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Law Office Wafaa Zoabi</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#services" className="hover:text-blue-600">Services</a></li>
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 bg-blue-50 flex items-center">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Expert Legal Assistance</h2>
          <p className="text-lg md:text-xl mb-8">Specializing in family law, civil litigation, and exam preparation courses.</p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Book a Consultation</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container text-gray-400 mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="border rounded-2xl shadow p-6">
            <h4 className="text-xl font-semibold mb-2">Family Law</h4>
            <p>Assistance with divorce, custody, alimony, and more.</p>
          </div>
          <div className="border rounded-2xl shadow p-6">
            <h4 className="text-xl font-semibold mb-2">Civil Litigation</h4>
            <p>Representing you in court for disputes, claims, and negotiations.</p>
          </div>
          <div className="border rounded-2xl shadow p-6">
            <h4 className="text-xl font-semibold mb-2">Exam Preparation</h4>
            <p>Comprehensive courses to help students pass the bar exam with confidence.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">About Me</h3>
            <p className="mb-4">Attorney Wafaa Zoabi has over 15 years of experience in family law and civil litigation. Dedicated to providing personalized, empathetic representation.</p>
            <button className="px-4 py-2 border border-gray-800 rounded-lg hover:bg-gray-200">Learn More</button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="../../images/wafaa-zoabi.jpg" alt="Wafaa Zoabi" className="rounded-2xl shadow-lg max-w-xs" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
          <button type="submit" className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send Message</button>
        </form>
      )}
    </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Law Office Wafaa Zoabi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


