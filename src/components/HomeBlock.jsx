import { twMerge } from "tailwind-merge";
import { useBlock } from "../context/BlockProvider";

function HomeBlock() {
  const { activeBlock, setActiveBlock } = useBlock();

  return (
    <div
      onClick={() => setActiveBlock(null)}
      className={twMerge(
        "transition-all duration-300",
        "absolute inset-0 -translate-x-full bg-green-500",
        "border border-red-500",
        activeBlock === "home" && "-translate-x-0",
      )}
    >
      HomeBlock
    </div>
  );
}

export default HomeBlock;
