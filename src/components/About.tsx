import React from 'react';
import { motion } from './animations/MotionComponents';
import { Award, ShieldCheck, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-10 h-10 text-blue-600" />,
    title: '18+ Years Experience',
    description: 'Nearly two decades of professional IT experience across various technologies and platforms.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: 'Trusted Service',
    description: 'Committed to providing honest assessments and reliable solutions for your tech problems.'
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: 'Prompt Response',
    description: 'Quick turnaround times to minimize disruption to your home or business operations.'
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: 'Personalized Support',
    description: 'Tailored assistance for your specific needs with clear explanations in plain English.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Why Choose Digital Fixers RVC</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I combine technical expertise with friendly service to solve your technology problems effectively and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm flex gap-4"
            >
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">My Approach</h3>
          <p className="text-gray-700 mb-4">
            Technology should make your life easier, not more complicated. I focus on providing solutions that are:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Practical and tailored to your specific needs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Explained in clear, non-technical language</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Designed for long-term reliability, not just quick fixes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Respectful of your time and budget constraints</span>
            </li>
          </ul>
          <p className="text-gray-700">
            Whether you're a small business owner or a homeowner, I'll help you navigate technology challenges with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;