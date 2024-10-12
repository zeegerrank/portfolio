import { twMerge } from "tailwind-merge";
import ToggleDarkSwitch from "./ToggleDarkSwitch";
import TypeIt from "typeit-react";

function Header() {
  return (
    <header className={twMerge("flex justify-evenly py-2")}>
      <TypeIt
        className="flex w-1/3 items-center justify-center text-xl"
        options={{ loop: true }}
        getBeforeInit={(instance) => {
          instance
            .type("SKPB")
            .pause(2000)
            .move(-2)
            .delete(1)
            .type("ek ")
            .pause(500)
            .move(2)
            .delete(1)
            .type("etchabut")
            .pause(3000);
          return instance;
        }}
      ></TypeIt>
      <ToggleDarkSwitch className="col-span-1" />
    </header>
  );
}

export default Header;
