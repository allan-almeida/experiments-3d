import * as React from 'react'
import styled from '@emotion/styled'
// import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'

const Container = styled.header`
  position: absolute;
  z-index: 1;
  height: ${heights.header}px;
  padding: ${dimensions.containerPadding}rem;
  padding-top: ${dimensions.containerPadding * 2}rem;
`

const HomepageLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Container>
    <HomepageLink to="/">{title}</HomepageLink>
    <p>pagename</p>
  </Container>
)

export default Header
