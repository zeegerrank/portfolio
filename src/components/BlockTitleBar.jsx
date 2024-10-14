import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useBlock } from "../context/BlockProvider";

BlockTitleBar.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

function BlockTitleBar({ children, className }) {
  const { setActiveBlock } = useBlock();
  return (
    <div
      className={twMerge(
        "flex justify-between",
        "transition-all duration-300",
        "from-complementary2-100 to-complementary2-300 bg-gradient-to-r",
        "dark:to-accent2-500 dark:from-accent2-300 dark:bg-gradient-to-r",
        "text-complementary2-500",
        className,
      )}
    >
      <span
        className={twMerge(
          "flex w-full items-center justify-center text-xl font-bold",
          "transition-all duration-300",
          "text-accent-500",
          "dark:text-complementary-100",
        )}
      >
        {children}
      </span>
      <button
        onClick={() => setActiveBlock(null)}
        className={twMerge(
          "my-1 mr-2 rounded bg-prime-500 px-3 text-3xl font-semibold",
          "transition-all duration-100",
          "hover:shadow-lg hover:ring hover:ring-accent-300",
        )}
      >
        X
      </button>
    </div>
  );
}

export default BlockTitleBar;
