import React, { useState } from "react";

function ToggleMode() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((pr) => !pr);
  };

  return (
    <button className="grid grid-cols-12" onClick={handleClick} value={active}>
      <div className=" col-span-2 col-start-5">Test</div>
    </button>
  );
}

export default ToggleMode;
