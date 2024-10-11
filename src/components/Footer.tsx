import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">AiBard123 AI Navigation</h3>
            <p className="text-sm">Discover the best AI tools for your needs</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-300">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
              <li><Link to="/admin" className="hover:text-blue-300">Admin</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">External Resources</h4>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-300">AI News</a></li>
              <li><a href="#" className="hover:text-blue-300">AI Research Papers</a></li>
              <li><a href="#" className="hover:text-blue-300">AI Ethics Guidelines</a></li>
              <li><a href="#" className="hover:text-blue-300">AI Community Forums</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-300"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 AiBard123 AI Navigation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer