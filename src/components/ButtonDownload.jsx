import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useState } from "react";

ButtonDownload.propTypes = {
  children: PropTypes.string,
  path: PropTypes.string,
};

function ButtonDownload({ children, path }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.a
      onMouseEnter={() => setHover(true)}
      onTouchStart={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchEnd={() => setHover(false)}
      href={path}
      download
      target="_blank"
      animate={
        hover
          ? { opacity: [0, 0.5, 1, 0.2, 1] }
          : {
              opacity: [
                0.1, 1, 0.1, 0.0, 0.9, 0.3, 0.1, 0.05, 0.4, 0.0, 0.7, 0.15, 1,
              ],
            }
      }
      transition={
        hover
          ? { ease: "anticipate", duration: 0.5 }
          : {
              repeat: Infinity,
              duration: 1.35,
              repeatDelay: 1.5,
              ease: "anticipate",
            }
      }
      className={twMerge(
        "border border-accent2/70 bg-accent2/85",
        "shadow-lg shadow-accent2/50",
        "hover:border-accent2/50 hover:bg-accent2/70",
        "hover:border-accent2 hover:bg-accent2",
        "text-accent1/70 hover:text-accent1/95",
        "h-full gap-2 px-5",
        "flex items-center justify-center",
      )}
    >
      {children}
    </motion.a>
  );
}

export default ButtonDownload;
