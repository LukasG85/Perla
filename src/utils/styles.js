export const colors = {
  mainWhite: `#fff`,
  mainBlack: `#000`,
  mainYellow: `#d2aa5c`,
  mainBrown: `brown`,
  mainGrey: `#474747`,
}

export const textFamily = `font-family: 'Caveat', cursive`

export const transDefault = `transition: all 0.3s ease-in-out`

export const transFunction = (
  property = 'all',
  time = '0.3s',
  type = 'linear'
) => {
  return `transition: ${property} ${time} ${type}`
}

export const transObject = ({
  property = 'all',
  time = '0.3s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = '0.15rem',
  type = 'solid',
  color = 'white',
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = '0.1rem' }) => {
  return `letter-spacing:${spacing}`
}
