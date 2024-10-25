import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if name and email are filled
    if (!formData.name || !formData.email) {
      toast.error('Please fill in both name and email fields.');
      return;
    }

    // EmailJS integration
    const serviceID = 'here you serviceID'; 
    const templateID = 'template ID';
    const userID = 'userID'; 

    const templateParams = {
      from_name: formData.name,        
      from_email: formData.email,      
      message: formData.description     
    };

    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        toast.success('Submitted');
        // Reset form fields after submission
        setFormData({
          name: '',
          email: '',
          description: ''
        });
      })
      .catch((error) => {
        toast.error('Failed to send the message. Please try again later.');
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00A3E0] to-[#7DD3E0] md:bg-none md:bg-blue-50 flex items-center justify-center">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white md:text-black">
            Glad to hear from you,<br />Get in touch 👋
          </h2>
          <form onSubmit={handleSubmit} className="rounded-lg p-6 space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full md:w-1/2 p-3 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full md:w-1/2 p-3 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full p-3 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Description (Optional)"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-1/3 bg-[#000000] text-white font-medium p-3 rounded-2xl transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Illustration Section */}
        <div className="hidden md:block w-full md:w-1/2">
          <img
            src="src/assets/img/Frame.png" // Replace this URL with your actual image source
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* ToastContainer for displaying notifications */}
      <ToastContainer
      position="top-center"
      theme="colored" />
    </div>
  );
};

export default Contact;



/*
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('description', description);
    formData.append('access_key', 'b868284a-59d1-4623-b6b2-6991c04346b8'); // Add your Public Access Key here
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        toast.success('Message sent successfully!');
        // Reset the form fields
        setName('');
        setEmail('');
        setDescription('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Error: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00A3E0] to-[#7DD3E0] md:bg-none md:bg-blue-50 flex items-center justify-center">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white md:text-black">
            Glad to hear from you,<br />Get in touch 👋
          </h2>
          <form onSubmit={handleSubmit} className="rounded-lg p-6 space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full md:w-1/2 p-3 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full md:w-1/2 p-3 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="mt-1 block w-full p-3 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Description (Optional)"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-1/3 bg-[#000000] text-white font-medium p-3 rounded-2xl transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="hidden md:block w-full md:w-1/2">
          <img
            src="src/assets/img/Frame.png" // Replace this URL with your actual image source
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

*/