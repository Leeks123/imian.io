const BreakPoints = {
  phone: 600,
  tablet: 850,
  laptop: 1300,
};
const Queries = {
  phoneAndSmaller: `(max-width: ${BreakPoints.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BreakPoints.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BreakPoints.laptop / 16}rem)`,
};

export type Theme = {
  Queries: {
    phoneAndSmaller: string;
    tabletAndSmaller: string;
    laptopAndSmaller: string;
  };
  font: {
    head: string;
    body: string;
  };
  maxWidth: number;
};

const theme: Theme = {
  Queries,
  font: {
    head: "'Raleway', sans-serif",
    body: "'Nanum Gothic', sans-serif",
  },
  maxWidth: 1440,
};

export default theme;
