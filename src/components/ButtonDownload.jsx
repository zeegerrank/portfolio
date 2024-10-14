import { a } from "framer-motion/client";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

ButtonDownload.propTypes = {
  children: PropTypes.string,
  path: PropTypes.string,
};

function ButtonDownload({ children, path }) {
  return (
    <a
      href={path}
      download
      target="_blank"
      className={twMerge(
        "bg-complementary-100 text-accent-500 ring",
        "h-full gap-2 px-5 shadow shadow-slate-600",
        "flex items-center justify-center",
      )}
    >
      {children}
    </a>
  );
}

export default ButtonDownload;
