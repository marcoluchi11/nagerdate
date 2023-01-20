export const createDateObject = (date) => {
  const dateSplit = date.split("-");
  const dateFinal = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
  return dateFinal;
};
export const dateDiff = (first, second) => {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
};
