import { twMerge } from "tailwind-merge";
import ToggleDarkSwitch from "./ToggleDarkSwitch";
import TextAnimate from "./TextAnimate";

function Header() {
  return (
    <header className={twMerge("flex h-[10vh] justify-evenly py-2")}>
      <TextAnimate className={twMerge("font-semibold", "")} />
      <ToggleDarkSwitch />
    </header>
  );
}

export default Header;
