import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export default createGlobalStyle`
${normalize};

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 63%;
  scroll-behavior: smooth;
}

body {
  cursor: default;
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fonts.main};
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
}

h1,h2,h3,h4,h5,h6,button {
  font-family: ${(props) => props.theme.fonts.title};
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.colors.link};
}

li {
  list-style: none;
}
`
