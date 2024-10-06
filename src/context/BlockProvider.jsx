import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const BlockContext = createContext();
BlockContext.displayName = "BlockContext";

// eslint-disable-next-line react-refresh/only-export-components
export const useBlock = () => {
  const context = useContext(BlockContext);
  if (context === undefined) {
    throw new Error("useBlock must be used within a BlockProvider");
  }
  return context;
};

BlockProvider.propTypes = {
  children: PropTypes.any,
};

function BlockProvider({ children }) {
  const [activeBlock, setActiveBlock] = useState(null);

  const BlockObject = useMemo(() => {
    return { activeBlock, setActiveBlock };
  }, [activeBlock, setActiveBlock]);

  return (
    <BlockContext.Provider value={BlockObject}>
      {children}
    </BlockContext.Provider>
  );
}

export default BlockProvider;
