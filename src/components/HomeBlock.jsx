import { twMerge } from "tailwind-merge";
import { useBlock } from "../context/BlockProvider";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
function HomeBlock() {
  const { activeBlock, setActiveBlock } = useBlock();
  const controlsRef = useRef();
  const spinButton = useRef();

  const [buttonHover, setButtonHover] = useState(false);

  const rotate = useMotionValue(0);

  useEffect(() => {
    const controls = animate(rotate, 360, {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
    });
    console.log(controls);

    controlsRef.current = controls;
  }, [rotate]);

  const handleMouseEnter = () => {
    controlsRef.current.pause();
    setButtonHover(true);
  };
  const handleMouseLeave = () => {
    controlsRef.current.play();
    setButtonHover(false);
  };

  return (
    <div
      className={twMerge(
        "transition-all duration-1000",
        "absolute inset-0 -translate-x-full",
        "bg-transparent bg-gradient-to-r backdrop-blur-[3px]",
        "from-complementary2-300/80 to-complementary2-700/80",
        "dark:from-accent-500/95 dark:to-accent-900/95",
        activeBlock === "home" && "-translate-x-0 duration-[1450ms]",
      )}
    >
      <div
        className={twMerge("flex h-full w-screen items-center justify-center")}
      >
        <div
          id="textFrame"
          className={twMerge(
            "flex -translate-y-16 gap-1 text-2xl font-semibold",
            "text-accent2-500 dark:text-complementary-100",
          )}
        >
          <div
            id="dynamicText"
            className="flex h-6 flex-col overflow-hidden text-center"
          >
            <span
              className={twMerge(
                "transition-all duration-300",
                "translate-y-0",
                buttonHover && "-translate-y-8",
                "hidden sm:block",
              )}
            >
              Hover
            </span>
            <span
              className={twMerge(
                "transition-all duration-300",
                "translate-y-0",
                buttonHover && "font-bold text-prime-500",
                "sm:hidden",
              )}
            >
              Touch
            </span>
            <span
              className={twMerge(
                "transition-all duration-300",
                "translate-y-0 font-semibold text-prime-500",
                buttonHover && "sm:-translate-y-8",
              )}
            >
              Click
            </span>
          </div>
          <span className="transition-all duration-300">Me</span>
        </div>
      </div>
      <button
        onClick={() => setActiveBlock(null)}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={handleMouseLeave}
        className="h-auto w-auto"
        ref={spinButton}
      >
        <motion.i
          initial={{ translateX: "-50%", translateY: "-50%" }}
          style={{ rotate }}
          className={twMerge(
            "absolute left-[50%] top-[50%]",
            "fa-solid fa-atom fa-5x",
            "rounded-full bg-prime-500 p-1",
            "text-accent2-500 dark:text-complementary-100",
          )}
          transition={{ type: "inertia" }}
        ></motion.i>
      </button>
    </div>
  );
}

export default HomeBlock;
