import React from 'react';
import { FaGithub, FaDiscord, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Title and Description */}
        <div className="px-4">
          <h2 className="text-5xl font-bold mb-4">
            Get in touch
            <span className="text-[#03a373]"> with us today.</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit id at mattis neque amet risus morbi vestibulum tellus nibh sed blandit sed accumsan ut nunc sed.
          </p>
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center text-[#03a373] hover:text-white">
              <FaGithub className="w-6 h-6 mr-2" />
              Contribute on Github →
            </a>
            <a href="#" className="flex items-center text-[#03a373] hover:text-white">
              <FaDiscord className="w-6 h-6 mr-2" />
              Join our community →
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="px-4">
          <div className="rounded-2xl p-6 bg-gray-900">
           <div className="bg-gray-900 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className='bg-gray-900'>
                <label htmlFor="fullName" className="block bg-gray-900 text-gray-400 text-sm mb-2">Full name</label>
                <input type="text" id="fullName" className="bg-gray-800 text-white rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#03a373]" />
              </div>
              <div className='bg-gray-900'>
                <label htmlFor="workingEmail" className="block bg-gray-900 text-gray-400 text-sm pb-2">Working email</label>
                <input type="email" id="workingEmail" className="bg-gray-800 text-white rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#03a373]" />
              </div>
              <div className='bg-gray-900'>
                <label htmlFor="phoneNumber" className="block text-gray-400 bg-gray-900 text-sm pb-2">Phone number</label>
                <input type="tel" id="phoneNumber" className="bg-gray-800 text-white rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#03a373]" />
              </div>
              <div className='bg-gray-900'>
                <label htmlFor="company" className="block text-gray-400 text-sm pb-2 bg-gray-900">Company</label>
                <input type="text" id="company" className="bg-gray-800 text-white rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#03a373]" />
              </div>
              <div className='bg-gray-900'>
                <label htmlFor="subject" className="block text-gray-400 text-sm pb-2 bg-gray-900">Subject</label>
                <input type="text" id="subject" className="bg-gray-800 text-white rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#03a373]" />
              </div>
              <div className='bg-gray-900'>
                <label htmlFor="position" className="block text-gray-400 text-sm pb-2 bg-gray-900">Position</label>
                <input type="text" id="position" className="bg-gray-800 text-white rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#03a373]" />
              </div>
            </div>
            <div className='bg-gray-900'>
              <label htmlFor="message" className="block text-gray-400 text-sm pb-2 bg-gray-900">Please type your message here...</label>
              <textarea id="message" rows="4" className="bg-gray-800 text-white  rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#03a373]"></textarea>
            </div>
            <button className="mt-6 bg-[#03a373] hover:bg-green-500 text-black font-bold py-2 px-4 rounded-md transition duration-300">
              Send Message
            </button>
            <div className="mt-4 flex justify-start items-center bg-gray-900 space-x-4">
              <a href="#" className="hover:text-gray-300 bg-gray-900 "><FaFacebook className="w-5 h-5 bg-gray-900" /></a>
              <a href="#" className="hover:text-gray-300 bg-gray-900"><FaTwitter className="w-5 h-5 bg-gray-900" /></a>
              <a href="#" className="hover:text-gray-300 bg-gray-900"><FaLinkedin className="w-5 h-5 bg-gray-900" /></a>
              <a href="#" className="hover:text-gray-300 bg-gray-900"><FaYoutube className="w-5 h-5 bg-gray-900" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;