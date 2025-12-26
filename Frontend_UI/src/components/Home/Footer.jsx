import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="text-xl font-bold text-white">SyntaxShark</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SyntaxShark. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-8 text-gray-400 text-sm">
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          <a href="https://https://github.com/rishhh09.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;