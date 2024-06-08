export const getColorCard = (index: number) => {
  const colors = ["#1D63A2", "#013976", "#E6230F", "#FFFFFF"];
  return colors[index % colors.length];
};
