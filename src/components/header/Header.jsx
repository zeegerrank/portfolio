import { twMerge } from "tailwind-merge";
import ToggleDarkSwitch from "./ToggleDarkSwitch";

function Header() {
  return (
    <header className={twMerge()}>
      <ToggleDarkSwitch />
    </header>
  );
}

export default Header;
