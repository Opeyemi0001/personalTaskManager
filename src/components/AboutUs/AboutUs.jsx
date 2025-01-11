
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">About Us</h1>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          Welcome to OprahTask – the ultimate task management app that helps you stay organized, 
          prioritize effectively, and achieve your goals with ease.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {/* Our Mission */}
        <div className="w-[70%] md:w-full mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            OprahTask was built to simplify how individuals and teams manage their tasks 
            and schedules. We are on a mission to provide tools that foster productivity, 
            promote teamwork, and inspire personal growth.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="w-[70%] md:w-full mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-5 text-gray-600 text-lg">
            <li className="mb-2">
              <strong>Intuitive Design:</strong> Effortlessly navigate and manage your tasks.
            </li>
            <li className="mb-2">
              <strong>Collaboration Features:</strong> Seamlessly collaborate with teammates.
            </li>
            <li className="mb-2">
              <strong>Advanced Insights:</strong> Track progress and optimize productivity.
            </li>
            <li className="mb-2">
              <strong>Customization:</strong> Tailor the app to suit your workflow.
            </li>
          </ul>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-medium text-gray-800">
          Ready to boost your productivity?
        </h3>
        <p className="text-gray-600 mt-2">
          Join thousands of users who trust OprahTask to get things done.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg mt-6 hover:bg-blue-600 transition duration-300">
          Get Started for Free
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
