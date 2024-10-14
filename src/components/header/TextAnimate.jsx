import TypeIt from "typeit-react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

TextAnimate.propTypes = {
  className: PropTypes.string,
};

function TextAnimate({ className }) {
  return (
    <TypeIt
      className={twMerge(
        className,
        "flex w-2/5 items-center justify-center text-xl",
      )}
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
  );
}

export default TextAnimate;
