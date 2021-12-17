/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const convertDate = (date: any) => {
  const monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dateTime = new Date(date);
  console.log(dateTime);
  const month = dateTime.getMonth();
  const year = dateTime.getFullYear();
  const day = dateTime.getUTCDate();
  console.log(monthName[month], year, day);
  return `${day} ${monthName[month]}, ${year}`;
};
