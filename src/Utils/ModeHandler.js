export const modeHandler = async (mode, setMode, currentMode, allModes) => {
  if (mode == currentMode) {
    setMode(allModes[0]);
  } else {
    setMode(currentMode);
  }
};
