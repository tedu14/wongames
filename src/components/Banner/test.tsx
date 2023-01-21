import { screen } from '@testing-library/react'

import Banner, { BannerProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props: BannerProps = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  const factory = () => {
    return renderWithTheme(<Banner {...props} />)
  }

  it('should render correctly', () => {
    const { container } = factory()
    expect(screen.getByRole('heading', { name: props.title }))

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
