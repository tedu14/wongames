import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact us
        </Heading>
        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Youtube
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Store</a>
          </Link>
          <Link href="/">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won games @ todos os direitos reservados</S.Copyright>
  </S.Wrapper>
)

export default Footer
