import { twMerge } from "tailwind-merge";
import { useBlock } from "../../context/BlockProvider";
import IntroBlock from "./IntroBlock";
import ProjectBlock from "./ProjectBlock";
import SkillBlock from "./SkillBlock";
import ContactBlock from "./ContactBlock";
import BlockTitleBar from "../BlockTitleBar";

function SelectedBlock() {
  const { activeBlock } = useBlock();
  let shownBlock;
  let title;
  switch (activeBlock) {
    case 0:
      shownBlock = <IntroBlock />;
      title = "Intro";
      break;
    case 1:
      shownBlock = <SkillBlock />;

      title = "Skill";
      break;
    case 2:
      shownBlock = <ProjectBlock />;
      title = "Project";

      break;
    case 3:
      shownBlock = <ContactBlock />;
      title = "Contact";

      break;
  }
  return (
    <div
      className={twMerge(
        "transition-all duration-300",
        "absolute inset-0 translate-x-full bg-red-500",
        activeBlock !== null && activeBlock !== "home" && "translate-x-0",
      )}
    >
      {shownBlock && (
        <BlockTitleBar className={twMerge("ease-in-out")}>
          {title}
        </BlockTitleBar>
      )}
      {shownBlock}
    </div>
  );
}

export default SelectedBlock;
