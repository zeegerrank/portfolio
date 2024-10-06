import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import { useBlock } from "../../context/BlockProvider";

InfoBlocks.propTypes = {
  className: PropTypes.string,
};

function InfoBlocks({ className }) {
  const test = "border border-red-500 bg-white dark:bg-black";

  const { setActiveBlock, activeBlock } = useBlock();

  // const handleClick = () => {
  //   setActive((pr) => !pr);
  // };

  const blocksName = [
    { label: "Intro" },
    { label: "Skill" },
    { label: "Project" },
    { label: "Contact" },
  ];

  return (
    <div
      className={twMerge(
        test,
        "relative h-[80vh] w-screen",
        "flex flex-wrap",
        "bg-transparent backdrop-blur-xl",
        className,
      )}
    >
      {blocksName.map((el, i) => {
        return (
          <div
            className={twMerge(
              test,
              "transition-all duration-300",
              "relative overflow-hidden",
              "h-auto w-1/2",
              "flex items-center justify-center text-center",
              activeBlock === i && "-translate-x-5 shadow",
            )}
            onClick={() =>
              activeBlock === i ? setActiveBlock(null) : setActiveBlock(i)
            }
            key={i}
          >
            {el.label}
          </div>
        );
      })}
      <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        HOME
      </div>
    </div>
  );
}

export default InfoBlocks;
