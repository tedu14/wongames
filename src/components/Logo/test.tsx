import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  const factory = () =>
    screen.getByLabelText(/wongames logotipo/i).parentElement

  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)

    expect(factory()).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)

    expect(factory()).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)

    expect(factory()).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)

    expect(factory()).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)

    expect(factory()).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
