import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from '../styles';

// Interactive Tech Icon Component
const TechIcon = ({ name, icon }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="w-28 h-32 flex flex-col items-center justify-center m-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-24 h-24 relative">
        {hovered ? (
          // Show 3D canvas when hovered
          <BallCanvas icon={icon} />
        ) : (
          // Show static 2D icon when not hovered
          <div className="w-full h-full rounded-full bg-tertiary flex items-center justify-center shadow-md transition-all duration-300">
            <img 
              src={icon} 
              alt={name} 
              className="w-16 h-16 object-contain"
            />
          </div>
        )}
      </div>
      <p className="text-sm text-center mt-2">{name}</p>
    </div>
  );
};

// For mobile devices with touch screens
const SimpleTechIcon = ({ name, icon }) => {
  return (
    <div className="w-20 h-24 flex flex-col items-center justify-center m-2">
      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary mb-1 shadow-md">
        <img src={icon} alt={name} className="w-12 h-12 object-contain" />
      </div>
      <p className="text-xs text-center mt-1">{name}</p>
    </div>
  );
};

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile based on screen width
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener to update on resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="text-center">
      <p className={`${styles.sectionSubText} text-left`}>
        Technologies I work with
      </p>
      <h6 className={`${styles.sectionHeadText} text-left mb-10`}>
        My Tech Stack
      </h6>
      
      {isMobile ? (
        // Simple version for mobile
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {technologies.map((technology) => (
            <SimpleTechIcon
              key={technology.name}
              name={technology.name}
              icon={technology.icon}
            />
          ))}
        </div>
      ) : (
        // Interactive version for desktop
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {technologies.map((technology) => (
            <TechIcon
              key={technology.name}
              name={technology.name}
              icon={technology.icon}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");