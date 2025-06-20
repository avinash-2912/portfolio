import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../constants';
import TestimonialCard from './TestimonialCard';

const styles = {
    padding: "sm:px-16 px-6 sm:py-16 py-10",
    sectionHeadText: "font-bold text-white",
    sectionSubText: "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  };

const textVariant = (delay=0) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  };
};

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [itemsPerPage, totalPages, currentPage]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  const getVisibleTestimonials = () => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <section id="testimonials" className="relative w-full mx-auto py-12">
      <div className="mt-12 bg-black-100 rounded-2xl">
        <div className={`bg-tertiary rounded-2xl p-8 ${styles.padding} min-h-[250px]`}>
          <motion.div variants={textVariant()} initial="hidden" animate="show">
            <p className={`${styles.sectionSubText} text-lg`}>What others say</p>
            <h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[40px] text-[30px]">Testimonials</h2>
          </motion.div>
        </div>

        <div className="px-8 pb-8 relative -mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div 
                key={`${testimonial.name}-${currentPage}-${index}`}
                variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
                initial="hidden"
                animate="show"
                className="w-full"
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center items-center gap-4">
            <button
              onClick={handlePrev}
              className="bg-primary hover:bg-blue-600 p-3 rounded-full transition-all duration-300 shadow-md"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="text-white w-5 h-5" />
            </button>

            <div className="flex justify-center gap-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-white scale-110'
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-primary hover:bg-blue-600 p-3 rounded-full transition-all duration-300 shadow-md"
              aria-label="Next testimonials"
            >
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;