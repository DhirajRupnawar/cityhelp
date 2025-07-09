import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.02)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            {/* Logo/Brand */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Home Service Provider
              </h1>
            </div>
            
            {/* Tagline */}
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Premium services for your home and personal care needs.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Home Care</h3>
              <p className="text-slate-400 text-sm">Professional cleaning and maintenance services</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Personal Care</h3>
              <p className="text-slate-400 text-sm">Tailored personal assistance and support</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-slate-400 text-sm">Guaranteed excellence in every service</p>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-8"></div>
          
          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium">
              Terms
            </a>
            <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium">
              Privacy
            </a>
            <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium">
              Contact
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 group">
              <svg className="w-5 h-5 text-slate-300 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 group">
              <svg className="w-5 h-5 text-slate-300 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all duration-300 group">
              <svg className="w-5 h-5 text-slate-300 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.017 0C18.067 0 20.017 1.95 20.017 8v4c0 6.05-1.95 8-8 8h-4c-6.05 0-8-1.95-8-8V8c0-6.05 1.95-8 8-8h4zm-2 4C7.582 4 6 5.582 6 8s1.582 4 4 4 4-1.582 4-4-1.582-4-4-4zm4.5-1.5a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2025 Home Service Provider. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 mt-2 md:mt-0">
                <span className="text-slate-500 text-xs">Made with</span>
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-slate-500 text-xs">for your home</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;