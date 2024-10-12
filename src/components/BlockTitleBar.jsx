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
    <div className={twMerge("flex justify-between bg-slate-200", className)}>
      <span className="flex w-full items-center justify-center text-xl">
        {children}
      </span>
      <button
        onClick={() => setActiveBlock(null)}
        className={twMerge(
          "my-1 mr-2 rounded bg-red-500 px-3 text-3xl",
          "transition-all",
          "hover:shadow-lg hover:ring",
        )}
      >
        X
      </button>
    </div>
  );
}

export default BlockTitleBar;
