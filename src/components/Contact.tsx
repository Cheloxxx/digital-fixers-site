import React, { useState } from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { motion } from './animations/MotionComponents';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/myzjyqry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a tech problem or need IT advice? Contact me for quick, friendly assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-700">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="text-lg font-medium">516-315-4793</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-lg font-medium">digitalfixersrvc@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Response Time</p>
                  <p className="text-lg font-medium">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-blue-100">
              <h4 className="text-xl font-semibold mb-4 text-blue-700">Serving Rockville Centre and surrounding areas</h4>
              <p className="text-gray-600">
                Based in Rockville Centre, NY, I provide on-site and remote support for homes and businesses throughout Nassau County.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-700">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm mt-2">Oops! Something went wrong.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
