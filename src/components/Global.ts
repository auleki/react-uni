import { createGlobalStyle, DefaultTheme } from "styled-components";
import * as theme from '../styles/Theme.styled'

export const GlobalStyles = createGlobalStyle<{theme: DefaultTheme}>`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: monospace;
  overflow-x: hidden;
}

.light {
  background-color: hsl(0, 0%, 93%);
}
.dark {
  background-color: #1a1a1a;
}
.blue {
  background-color: hsl(195, 53%, 79%);
}
.green {
  background-color: hsl(150, 80%, 15%);
}
.brown {
  background-color: hsl(39, 70%, 50%);
}
.pink {
  background-color: hsl(350, 100%, 88%);
}
.active{
    border: 3px solid hsl(0, 0%, 87%);
    }
`

