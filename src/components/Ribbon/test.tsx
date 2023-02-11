import { screen } from '@testing-library/react'

import Ribbon, { RibbonProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<Ribbon />', () => {
  const factory = (props?: Omit<RibbonProps, 'children'>) => {
    return renderWithTheme(<Ribbon {...props}>Best seller</Ribbon>)
  }

  it('should render the text correctly', () => {
    factory()

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render white the primary color', () => {
    factory()

    expect(screen.getByText(/best seller/i)).toHaveStyle(
      `background-color: ${theme.colors.primary}`
    )
  })

  it('should render white the secondary color', () => {
    factory({
      color: 'secondary'
    })

    expect(screen.getByText(/best seller/i)).toHaveStyle(
      `background-color: ${theme.colors.secondary}`
    )
  })

  it('should render with normal size as default', () => {
    factory({
      color: 'secondary'
    })

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: theme.font.sizes.small
    })
  })

  it('should render with small size', () => {
    factory({
      color: 'secondary',
      size: 'small'
    })

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: theme.font.sizes.xsmall
    })
  })
})
