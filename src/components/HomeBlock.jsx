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
        "backdrop-blur-[3px]",
        "bg-secondary/80",
        "dark:bg-secondary/80",
        activeBlock === "home" && "-translate-x-0",
      )}
    >
      <div
        className={twMerge("flex h-full w-screen items-center justify-center")}
      >
        <div
          id="textFrame"
          className={twMerge(
            "flex -translate-y-16 gap-1 text-2xl font-semibold dark:text-light",
          )}
        >
          <div
            id="dynamicText"
            className="flex h-6 flex-col overflow-hidden text-center"
          >
            <span
              className={twMerge(
                "transition-all",
                "translate-y-0",
                buttonHover && "-translate-y-8",
                "hidden sm:block",
              )}
            >
              Hover
            </span>
            <span
              className={twMerge(
                "transition-all",
                "translate-y-0",
                buttonHover && "text-prime-500 font-bold",
                "sm:hidden",
              )}
            >
              Touch
            </span>
            <span
              className={twMerge(
                "transition-all",
                "translate-y-0 font-semibold text-white dark:text-black",
                buttonHover && "sm:-translate-y-8",
              )}
            >
              Click
            </span>
          </div>
          <span className="transition-all">Me</span>
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
            "rounded-full bg-accent2 p-1",
            "dark:text-slate-200",
          )}
          transition={{ type: "inertia" }}
        ></motion.i>
      </button>
    </div>
  );
}

export default HomeBlock;
