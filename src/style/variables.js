export const COLOR = {
  bg: [
    '#0D0D0D',
    '#1B1B1B',
    '#8C8C8C',
    '#E3E3E3',
    '#F9F9F9'
  ],
  text: [
    '#F9F9F9',
    '#8C8C8C',
    '#0D0D0D'
  ],
  accent: {
    pink: '#EA9CBF',
    green: '#B0E298'
  }
}
const breakpoints = {
  bp1600: '1600px',
  bp840: '840px',
}

export const BREAKPOINTS = {
  laptop: `(max-width: ${breakpoints.bp1600})`,
  mobile: `(max-width: ${breakpoints.bp840})`,
};
