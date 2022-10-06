import { Children } from '@types'
import * as S from './styles'

export type ButtonProps = {
  children?: Children
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: Children
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper hasIcon={!!icon} size={size} fullWidth={fullWidth} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
