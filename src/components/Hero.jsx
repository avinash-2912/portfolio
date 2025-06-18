import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { Profile } from "../assets";

const Hero = () => {
  // Better device detection using both media query and user agent
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if device is truly mobile
    const checkDevice = () => {
      // Check screen size
      const mediaQuery = window.matchMedia("(max-width: 768px)");

      // Check if user agent suggests mobile OR viewport width is mobile size
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || mediaQuery.matches;

      setIsMobile(isMobileDevice);
    };

    // Initial check
    checkDevice();

    // Add resize listener to handle orientation changes or browser resize
    window.addEventListener("resize", checkDevice);

    // Remove listener on cleanup
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // Animation variants for social icons with simple wave floating
  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    float: (i) => ({
      y: [0, -3, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: i * 0.3
      }
    })
  };

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* 3D Model Canvas - Now positioned with lower z-index to ensure it doesn't block interactions */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <ComputersCanvas />
        ) : (
          /* Hero image for mobile screens - Fixed positioning and sizing */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center h-full w-full px-4">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }}
                className="relative"
                style={{
                  width: 'min(60vw, 240px)',
                  height: 'min(60vw, 240px)',
                  maxWidth: '240px',
                  maxHeight: '240px',
                  minWidth: '180px',
                  minHeight: '180px'
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915EFF]/20 to-[#915EFF]/20 blur-2xl"></div>
                <img
                  src={Profile}
                  alt="Avinash Kumar Portrait"
                  className="rounded-full border-4 border-gray-800 object-cover w-full h-full z-10 relative"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 p-2 sm:p-3 bg-gray-900/80 backdrop-blur-sm rounded-xl z-20 shadow-lg"
                  style={{ fontSize: 'min(3.5vw, 14px)' }}
                >
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#915EFF] rounded-full"></div>
                    <span className="text-white font-medium whitespace-nowrap">Available for hire</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}
      </div>

      {/* Text content with higher z-index to appear above 3D model but not block interaction */}
      <div
        className={`absolute inset-0 ${isMobile ? 'top-16' : 'top-[120px]'} max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className={`w-1 ${isMobile ? 'h-20' : 'sm:h-80 h-40'} violet-gradient`} />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white ${isMobile ? 'text-3xl sm:text-4xl' : ''}`}>
            Hi, I'm <span className='text-[#915EFF]'>Avinash</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 ${isMobile ? 'text-base sm:text-lg' : ''}`}>
            Problem-solver by day, learner by night.
          </p>

          {/* Social Media Icons - These need pointer-events-auto to be clickable */}
          <div className={`flex ${isMobile ? 'mt-4' : 'mt-8'} gap-6 relative z-30 pointer-events-auto`}>
            <div className="relative z-10">
              <motion.a
                href="https://www.linkedin.com/in/avinash-kumar-685746221/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#0A66C2] cursor-pointer"
                whileHover="hover"
                variants={iconVariants}
                animate="float"
                custom={0}
                style={{ display: "block", width: "24px", height: "24px" }}
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>

            <div className="relative z-10">
              <motion.a
                href="https://github.com/avinash-2912"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-[#915EFF] cursor-pointer"
                whileHover="hover"
                variants={iconVariants}
                animate="float"
                custom={1}
                style={{ display: "block", width: "24px", height: "24px" }}
              >
                <FaGithub size={24} />
              </motion.a>
            </div>

            <div className="relative z-10">
              <motion.a
                href="https://drive.google.com/file/d/1pbMvouas4FZ_s0ohk_2rC2OH7PZBn5Ih/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-[#915EFF] cursor-pointer"
                whileHover="hover"
                variants={iconVariants}
                animate="float"
                custom={2}
                style={{ display: "block", width: "24px", height: "24px" }}
              >
                <FaFileAlt size={24} />
              </motion.a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator with pointer-events-auto to make it clickable */}
      <div className='absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center z-10 pointer-events-auto'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;