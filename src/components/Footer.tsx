import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaTiktok,
} from 'react-icons/fa'; // Add at top of file

// Inside <div className="container ...">
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 py-8">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {new Date().getFullYear()} Law Office Wafaa Zoabi. All rights reserved.</p>
            </div>

            <div className="mt-4 flex justify-center space-x-6 text-lg">
                <a
                    href="https://www.facebook.com/share/1C3USD19ZA/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="transform transition-transform duration-300 hover:scale-125 hover:text-accent"
                >
                    <FaFacebookF />
                </a>
                <a
                    href="https://www.instagram.com/wafaaabokishik?igsh=MXJwd2F4dnZsOXg2OQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="transform transition-transform duration-300 hover:scale-125 hover:text-accent"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://tiktok.com/@YOUR_PAGE"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="transform transition-transform duration-300 hover:scale-125 hover:text-accent"
                >
                    <FaTiktok />
                </a>
                <a
                    href="https://youtube.com/YOUR_PAGE"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="transform transition-transform duration-300 hover:scale-125 hover:text-accent"
                >
                    <FaYoutube />
                </a>
                <a
                    href="https://linkedin.com/in/YOUR_PAGE"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="transform transition-transform duration-300 hover:scale-125 hover:text-accent"
                >
                    <FaLinkedinIn />
                </a>
            </div>
            <a
                href="https://wa.me/+972505656356"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp size={24} />
            </a>
        </footer>
    );
}

