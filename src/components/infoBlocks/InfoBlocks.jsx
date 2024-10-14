import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import { useBlock } from "../../context/BlockProvider";
import { motion } from "framer-motion";

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
              "transition-all duration-300",
              "relative overflow-hidden",
              "h-auto w-1/2",
              "flex items-center justify-center text-center",
              activeBlock === i && "-translate-x-5 shadow",
              "border-accent2-500 border-4 dark:border-complementary-100",
              "text-accent2-500 dark:text-complementary-100",
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
      <motion.button
        onClick={() => setActiveBlock("home")}
        variants={{
          atDoor: {
            translateX: "-200vw",
            translateY: "-50%",
            transitionDuration: "1400ms",
            left: "-50%",
            top: "50%",
          },
          inHome: {
            translateX: ["-200vw", "-50%"],
            translateY: "-50%",
            transitionDuration: "1000ms",
            left: "50%",
            top: "50%",
          },
        }}
        animate={activeBlock === "home" ? "atDoor" : "inHome"}
        className={twMerge(
          "absolute",
          "rounded-full p-6",
          "text-accent2-700 bg-prime-500 dark:text-complementary-100",
        )}
      >
        <i className="fa-solid fa-house fa-3x"></i>
      </motion.button>
    </div>
  );
}

export default InfoBlocks;
