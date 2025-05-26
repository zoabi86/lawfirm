import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Law Office Wafaa Zoabi. All rights reserved.</p>
      </div>
    </footer>
  );
}

