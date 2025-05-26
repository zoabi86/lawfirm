import React from 'react';

export default function About() {
  return (
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
  );
}

