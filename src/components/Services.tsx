import React from 'react';
import { motion } from './animations/MotionComponents';

const services = [
  {
    icon: '📶',
    title: 'Network Issues',
    description: 'Slow or no internet? I diagnose and fix Wi-Fi and wired network issues.'
  },
  {
    icon: '🖥️',
    title: 'Computer Repair',
    description: 'Computer problems (Windows or Mac)? I provide professional repair and maintenance.'
  },
  {
    icon: '🔄',
    title: 'Device Synchronization',
    description: 'Sync files, photos, and emails across phones, tablets, and laptops.'
  },
  {
    icon: '📁',
    title: 'File Sharing & Backup',
    description: 'Set up shared folders and automatic cloud backups for your home or office.'
  },
  {
    icon: '☁️',
    title: 'Cloud Services',
    description: 'Confused by Google Drive, OneDrive, or iCloud? I teach you and configure it for you.'
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Want to automate tasks using Artificial Intelligence? I help you set up practical AI agents.'
  },
  {
    icon: '🧾',
    title: 'Office Support',
    description: 'I optimize workflows, printers, and secure cloud backup systems.'
  },
  {
    icon: '💼',
    title: 'Tech Consulting',
    description: 'Personalized tech consulting for small business owners — simplify your tech life.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Professional IT Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From network troubleshooting to computer repair, I offer a wide range of tech solutions to meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Need a service not listed here? I offer customized solutions to fit your specific needs.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all"
          >
            Contact Me For Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;