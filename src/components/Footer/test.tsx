import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  const factory = () => {
    const { container } = renderWithTheme(<Footer />)
    return container
  }

  it('should render 4 columns topics', () => {
    const wrapper = factory()

    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(wrapper.firstChild).toMatchSnapshot()
  })
})
