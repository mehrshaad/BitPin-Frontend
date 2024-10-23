export const modeHandler = async (mode, setMode, currentMode, allModes) => {
  if (
    (mode == currentMode && window.innerWidth > 1200) ||
    window.innerWidth < 850
  ) {
    setMode(allModes[0]);
  } else {
    setMode(currentMode);
  }
};
