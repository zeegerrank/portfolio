import { twMerge } from "tailwind-merge";
import ButtonDownload from "./ButtonDownload";
import ContactBand from "./ContactBand";

function Footer() {
  return (
    <footer className="flex h-[10vh] items-center py-2">
      <ButtonDownload path="/public/grunge_brush_stroke_frames_set.jpg">
        <i className="fa-solid fa-file-arrow-down"></i>
        my_CV.pdf
      </ButtonDownload>
      <ContactBand />
    </footer>
  );
}

export default Footer;
