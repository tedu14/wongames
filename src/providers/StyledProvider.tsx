import { Children } from '@types'
import { ThemeProvider, useTheme } from 'styled-components'
import theme from 'styles/theme'

type StyledProviderProps = {
  children: Children
}

export default function StyledProvider({ children }: StyledProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export function useStyled() {
  const theme = useTheme()

  if (!theme) throw new Error('useStyled missing called inside StyledProvider')

  return {
    theme
  }
}
