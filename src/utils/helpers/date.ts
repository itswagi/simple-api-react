/* eslint-disable @typescript-eslint/no-explicit-any */
export const convertDate = (date: any): string => {
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
  const month = dateTime.getMonth();
  const year = dateTime.getFullYear();
  const day = dateTime.getUTCDate();
  return `${day} ${monthName[month]}, ${year}`;
};
