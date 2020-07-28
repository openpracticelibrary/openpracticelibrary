import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core'
import customTheme from './theme';

const MuiThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      {children}
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: MuiThemeProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

