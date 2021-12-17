/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const eventsResultAnimation = (
  setCss: (arg0: boolean) => void,
  setCss1: (arg0: boolean) => void
) => {
  const timeout = setTimeout(() => {
    setCss(true);
    clearTimeout(timeout);
  }, 100);
  const timeout1 = setTimeout(() => {
    setCss1(true);
    clearTimeout(timeout1);
  }, 850);
};
