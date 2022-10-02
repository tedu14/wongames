import { render, RenderResult } from '@testing-library/react'
import { Children } from '@types'
import StyledProvider from 'providers/StyledProvider'

export const renderWithTheme = (children: Children): RenderResult =>
  render(<StyledProvider>{children}</StyledProvider>)
