import { twMerge } from "tailwind-merge";
import ButtonDownload from "./ButtonDownload";
import ContactBand from "./ContactBand";
import { useBlock } from "../context/BlockProvider";

function Footer() {
  const { setActiveBlock } = useBlock();
  return (
    <footer
      className="mt-2 flex h-[20vh] justify-between py-2"
      onClick={() => setActiveBlock(null)}
    >
      <ButtonDownload path="/public/grunge_brush_stroke_frames_set.jpg">
        <i className="fa-solid fa-file-arrow-down"></i>
        my_CV.pdf
      </ButtonDownload>
      <ContactBand />
    </footer>
  );
}

export default Footer;
