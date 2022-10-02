import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyles from 'styles/global'
import StyledProvider from 'providers/StyledProvider'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <StyledProvider>
      <GlobalStyles />
      <Story />
    </StyledProvider>
  )
]
