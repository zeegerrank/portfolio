import { twMerge } from "tailwind-merge";
import ToggleDarkSwitch from "./ToggleDarkSwitch";

function Header() {
  return (
    <header className={twMerge("border border-red-500", "")}>
      <ToggleDarkSwitch />
    </header>
  );
}

export default Header;
