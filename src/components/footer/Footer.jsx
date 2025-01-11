import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-200 py-10 px-6">
      {/* Footer Container */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* OprahTask Section - Takes two columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">OprahTask</h3>
            <p className="text-gray-700">
              Stay organized and ahead with OprahTask! Your ultimate solution for task management and productivity.
            </p>
          </div>

          {/* Quick Links Section - Takes one column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-700 space-y-2">
              <li><a href="#home" className="hover:text-blue-500">Home</a></li>
              <li><a href="#features" className="hover:text-blue-500">Features</a></li>
              <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
              <li><a href="#about" className="hover:text-blue-500">About Us</a></li>
            </ul>
          </div>

          {/* Contact Information Section - Takes one column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-700 mb-2">Email: support@ophratask.com</p>
            <p className="text-gray-700">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Thin Line Above Social Media and Footer Bottom */}
        <div className="border-t border-gray-300 mt-14 mb-4"></div>

        {/* Social Media Links and Footer Bottom on the Same Line */}
        <div className="flex justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-black">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="text-gray-700 text-sm">
            <p>&copy; 2025 OprahTask. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
