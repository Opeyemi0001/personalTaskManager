import './Contact.css'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen px-6 py-10">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-grey-600 mb-4">Contact Us</h1>
      <p className="text-gray-600 text-lg text-center mb-10 max-w-2xl">
        Got questions, feedback, or need help? We're here for you! Reach out to us, and we’ll respond as quickly as we can.
      </p>

      {/* Form Section */}
      <form className="bg-white shadow-lg rounded-lg p-8 max-w-4xl md:w-3/4 w-full">
        {/* Name and Email Fields */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Name Field */}
          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div className="w-full mt-4 md:mt-0">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className='mt-6 flex justify-center'>

          <button
            type="submit"
            className=" bg-blue-500 text-white py-3 font-semibold px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact