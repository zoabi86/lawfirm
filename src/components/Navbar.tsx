import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-background text-foreground shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Law Office Wafaa Zoabi</h1>
        <nav>
          <ul className="flex space-x-6 text-accent">
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

