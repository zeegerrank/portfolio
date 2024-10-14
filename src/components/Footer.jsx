import ButtonDownload from "./ButtonDownload";

function Footer() {
  return (
    <footer className="flex h-[10vh] items-center py-2">
      <ButtonDownload path="/public/grunge_brush_stroke_frames_set.jpg">
        <i className="fa-solid fa-file-arrow-down"></i>
        my_CV.pdf
      </ButtonDownload>
    </footer>
  );
}

export default Footer;
