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
        "font-semibold ring-4 ring-accent1 dark:text-light dark:ring-light",
        "shadow shadow-slate-600 dark:shadow-slate-300",
        "h-full gap-2 px-5",
        "flex items-center justify-center",
      )}
    >
      {children}
    </a>
  );
}

export default ButtonDownload;
