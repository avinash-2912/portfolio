import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const TestimonialCard = ({ testimonial, name, designation, company, image }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

  const initials = getInitials(name);

  // Truncate testimonial text for card display
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const shouldShowReadMore = testimonial.length > 120;

  return (
    <>
      <motion.div
        className="bg-black-200 p-6 rounded-3xl w-full h-[300px] flex flex-col"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Quote Mark */}
        <div className="text-white font-black text-[48px] leading-none">"</div>

        {/* Content Area - Fixed Height */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Testimonial Text and Button Container */}
          <div className="flex-1 flex flex-col justify-between min-h-0">
            <div>
              <p className="text-white tracking-wider text-[16px] leading-relaxed">
                <span>
                  {truncateText(testimonial)}
                  {shouldShowReadMore && (
                    <button
                      onClick={() => setIsDialogOpen(true)}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium ml-1 inline transition-colors duration-200"
                    >
                      Read More
                    </button>
                  )}
                </span>
              </p>

            </div>
          </div>

          {/* Author Info - Always at bottom */}
          <div className="mt-4 flex justify-between items-center gap-1 flex-shrink-0">
            <div className="flex-1">
              <p className="text-white font-medium text-[14px]">
                <span className="blue-text-gradient">@ {name}</span>
              </p>
              <p className="mt-1 text-secondary text-[12px]">
                {designation} of {company}
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">{initials}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dialog Overlay */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setIsDialogOpen(false)}
        >
          <motion.div
            className="bg-[#1a1a2e] rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X size={24} />
            </button>

            {/* Dialog Content */}
            <div className="pr-8">
              <div className="text-white font-black text-[72px] leading-none mb-4">"</div>

              <div className="space-y-6">
                <p className="text-white text-lg leading-relaxed tracking-wide">
                  {testimonial}
                </p>

                <div className="border-t border-gray-600 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{initials}</span>
                    </div>

                    <div>
                      <p className="text-white font-bold text-xl">
                        <span className="blue-text-gradient">{name}</span>
                      </p>
                      <p className="text-gray-300 text-base mt-1">
                        {designation}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <style jsx>{`
        .blue-text-gradient {
          background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
};

export default TestimonialCard;