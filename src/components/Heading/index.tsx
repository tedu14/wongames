import { Children } from '@types'
import * as S from './styles'

export type LineColor = 'primary' | 'secondary'
export type HeadingProps = {
  children: Children
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'medium' | 'small'
  lineColor?: LineColor
}

const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    size={size}
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)

export default Heading
