import { useEffect } from "react";
import ToggleMode from "./components/ToggleMode";

function App() {
  return (
    <div>
      <header className="">
        <ToggleMode />
        <h1 className="text-2xl">Hello 👋</h1>
        <h2 className="text-xl">
          I'm <strong>Sek Petchabut</strong>, a facility manager at Jaifa
          Academy
        </h2>
      </header>
    </div>
  );
}

export default App;
