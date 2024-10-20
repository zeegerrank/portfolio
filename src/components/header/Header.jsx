import { twMerge } from "tailwind-merge";
import ToggleDarkSwitch from "./ToggleDarkSwitch";
import TextAnimate from "./TextAnimate";
import { useBlock } from "../../context/BlockProvider";

function Header() {
  const { setActiveBlock } = useBlock();
  return (
    <header
      onClick={() => setActiveBlock(null)}
      className={twMerge("flex h-[10vh] justify-evenly py-2")}
    >
      <TextAnimate className={twMerge("font-semibold", "")} />
      <ToggleDarkSwitch />
    </header>
  );
}

export default Header;
