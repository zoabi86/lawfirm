import React from 'react';

export default function Hero() {
  return (
    <section className="flex-1 bg-blue-50 flex items-center">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Expert Legal Assistance</h2>
        <p className="text-lg md:text-xl mb-8">Specializing in family law, civil litigation, and exam preparation courses.</p>
        <button className="bg-foreground text-background font-semibold px-6 py-3 rounded-lg hover:bg-accent transition">Book a Consultation</button>
      </div>
    </section>
  );
}

