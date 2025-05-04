import React from 'react';
import { motion } from 'framer-motion';

export interface Testimonial {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
  }
const TestimonialCard: React.FC<Testimonial> = ({
  testimonial,
  name,
  designation,
  company,
}) => {
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <motion.div
      className="bg-black-200 p-6 rounded-2xl w-full h-[350px] flex flex-col shadow-lg"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <p className="text-white font-black text-4xl">"</p>
      <div className="mt-2 flex-grow flex flex-col">
        <p className="text-white tracking-wider text-lg flex-grow">{testimonial}</p>
        <div className="mt-6 flex justify-between items-center gap-2">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-base">
              <span className="text-primary">@</span> {name}
            </p>
            <p className="mt-1 text-gray-400 text-sm">
              {designation} of {company}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-gradient flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">{initials}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;