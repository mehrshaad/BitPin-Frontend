export const modeHandler = async (mode, setMode, currentMode, allModes) => {
  if (mode == currentMode && window.innerWidth > 1200) {
    setMode(allModes[0]);
  } else {
    setMode(currentMode);
  }
};
