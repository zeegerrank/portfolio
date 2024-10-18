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
        "flex justify-between py-1",
        "transition-all",
        "bg-secondary dark:bg-primary",
        className,
      )}
    >
      <span
        className={twMerge(
          "flex w-full items-center justify-center text-xl font-bold",
          "transition-all",
        )}
      >
        {children}
      </span>
      <button
        onClick={() => setActiveBlock(null)}
        className={twMerge(
          "bg-prime-500 my-1 mr-2 rounded px-3 text-3xl font-semibold",
          "transition-all",
          "bg-danger dark:text-white",
          "hover:ring-2 hover:ring-white",
        )}
      >
        X
      </button>
    </div>
  );
}

export default BlockTitleBar;
