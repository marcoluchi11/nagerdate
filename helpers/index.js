export const createDateObject = (date) => {
  const dateSplit = date.split("-");
  const dateFinal = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
  return dateFinal;
};
export const dateDiff = (first, second) => {
  return Math.round((second - first) / (1000 * 60 * 60 * 24) + 1);
};

export const changeDateFormat = (dateString) => {
  const date = new Date(dateString);
  console.log(date);
  const day = date.getDate() + 1;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return day + "-" + month + "-" + year;
};
