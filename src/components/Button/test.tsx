import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { renderWithTheme } from 'utils/tests/helpers'

import Button, { ButtonProps } from '.'

describe('<Button />', () => {
  const factory = (props?: ButtonProps) => {
    renderWithTheme(<Button {...props}>Buy now</Button>)
    return screen.getByRole('button', { name: /Buy now/i })
  }

  it('should render the medium size by default', () => {
    expect(factory()).toHaveStyle({
      height: '4rem',
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`,
      'font-size': `${theme.font.sizes.small}`
    })
  })

  it('should render the small when size is passed', () => {
    expect(
      factory({
        size: 'small'
      })
    ).toHaveStyle({
      height: '3rem',
      padding: `${theme.spacings.xxsmall}`,
      'font-size': `${theme.font.sizes.xsmall}`
    })
  })

  it('should render the large when size is passed', () => {
    expect(factory({ size: 'large' })).toHaveStyle({
      height: '5rem',
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`,
      'font-size': `${theme.font.sizes.medium}`
    })
  })

  it('should render a full width version', () => {
    expect(factory({ fullWidth: true })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    const wrapper = factory({ icon: <AddShoppingCart data-testid="icon" /> })
    expect(wrapper).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should a render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
