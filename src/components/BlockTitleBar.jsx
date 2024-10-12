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
        "transition-all",
        "from-complementary2-100 to-complementary2-300 bg-gradient-to-r",
        "dark:to-accent2-500 dark:from-accent2-300 dark:bg-gradient-to-r",
        className,
      )}
    >
      <span
        className={twMerge(
          "flex w-full items-center justify-center text-xl font-bold",
          "text-accent-900",
          "dark:text-complementary-100",
        )}
      >
        {children}
      </span>
      <button
        onClick={() => setActiveBlock(null)}
        className={twMerge(
          "my-1 mr-2 rounded bg-prime-500 px-3 text-3xl font-semibold",
          "transition-all",
          "hover:shadow-lg hover:ring hover:ring-accent-300",
        )}
      >
        X
      </button>
    </div>
  );
}

export default BlockTitleBar;
