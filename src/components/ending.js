export const getEnding = (charData) => {
  if (charData[1].value > 20) {
    return 1;
  } else if (charData[1].value > 10) {
    return 0;
  }
};
