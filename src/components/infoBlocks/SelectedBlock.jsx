import { twMerge } from "tailwind-merge";
import { useBlock } from "../../context/BlockProvider";
import IntroBlock from "./IntroBlock";
import ProjectBlock from "./ProjectBlock";
import SkillBlock from "./SkillBlock";
import ContactBlock from "./ContactBlock";

function SelectedBlock() {
  const { activeBlock, setActiveBlock } = useBlock();
  console.log("🚀 ~ SelectedBlock ~ activeBlock:", activeBlock);
  let shownBlock;

  switch (activeBlock) {
    case 0:
      shownBlock = <IntroBlock />;
      break;
    case 1:
      shownBlock = <SkillBlock />;
      break;
    case 2:
      shownBlock = <ProjectBlock />;
      break;
    case 3:
      shownBlock = <ContactBlock />;
  }
  return (
    <div
      onClick={() => setActiveBlock(null)}
      className={twMerge(
        "transition-all duration-300",
        "absolute inset-0 translate-x-full bg-red-500",
        "border border-red-500",
        activeBlock !== null && "translate-x-0",
      )}
    >
      {shownBlock}
    </div>
  );
}

export default SelectedBlock;
