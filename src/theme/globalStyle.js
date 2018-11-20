import styled, { css, createGlobalStyle } from 'styled-components'

/* TODO
  take a look at using
  box sizing
  https://www.paulirish.com/2012/box-sizing-border-box-ftw/
*/

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 460
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|VT323');

  html {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, Arial, sans-serif;
    font-size: 20px;
    line-height: 1.3125;
  }

  p, blockquote {
    font-family: OpenSans, Arial, sans-serif;
  }

  a {
    text-decoration: none;
  }

  a:active, a:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none
  }

  ::-moz-focus-inner {
    border:0;
  }

  :focus {
    outline:none;
  }

  ul {
    margin: 0 auto;
  }

  @media screen and (min-width: 360px) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 600px) {
    html {
      font-size: 16px;
    }
  }
`;

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

export const theme = {
  text: '#333',
  white: '#fff',
  black: '#000',
  primary: {
    dark: '#453463',
    light: '#755f9f'
  },
  secondary: {
    green: '#8ac3a9',
    yellow: '#fcdeb6',
    red: '#ff8463'
  },
  shades: {
    dark: 'rgba(69, 52, 99, 0.5)'
  },
  tints: {
    brightgreen: '#57a984',
    brightred: '#ff4817'
  }
}

export const StyledH1 = styled.h1`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH2 = styled.h2`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH3 = styled.h3`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH4 = styled.h4`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH5 = styled.h5`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH6 = styled.h6`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledP = styled.p`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledUl = styled.ul`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledLi = styled.li`
  padding: 1.75rem;
  margin: 0.5rem;
  text-decoration: none;
`

export const StyledA = styled.a`
  padding: 1.75rem;
  margin: 0.5rem;
`

throw new Error(
  "An injectGlobal usage was converted to createGlobalStyles via codemod but needs to be hooked up. See https://www.styled-components.com/docs/api#createglobalstyle for instructions."
);
