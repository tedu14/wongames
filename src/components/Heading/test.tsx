import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading, { HeadingProps } from '.'

describe('<Heading />', () => {
  const factory = (props?: Partial<HeadingProps>) => {
    renderWithTheme(<Heading {...props}>Heading</Heading>)
    return screen.getByRole('heading', { name: /Heading/i })
  }

  it('should render a black heading by default', () => {
    expect(factory()).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a white heading when color is passed', () => {
    expect(
      factory({
        color: 'white'
      })
    ).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a heading with a line to left side', () => {
    expect(
      factory({
        lineLeft: true
      })
    ).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    })
  })

  it('should render a heading with a line at the bottom', () => {
    expect(
      factory({
        lineBottom: true
      })
    ).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.primary}`, {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    const wrapper = factory({
      size: 'small'
    })

    expect(wrapper).toHaveStyle({
      'font-size': `${theme.font.sizes.medium}`
    })

    expect(wrapper).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    const wrapper = factory({
      lineLeft: true,
      lineBottom: true,
      lineColor: 'secondary'
    })

    expect(wrapper).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    })
    expect(wrapper).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.secondary}`,
      {
        modifier: '::after'
      }
    )
  })
})
