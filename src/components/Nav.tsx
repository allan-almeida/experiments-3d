import * as React from 'react'
import styled from '@emotion/styled'
// import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'

const Container = styled.nav`
  position: absolute;
  /* width: 100%; */
  z-index: 1;
  height: ${heights.header}px;
  padding: ${dimensions.containerPadding}rem;
  padding-top: ${dimensions.containerPadding * 1.5}rem;

  a {
    display: block;
    cursor: pointer;
    padding: 10px 0;
    border-bottom: 1px solid;
  }

  p {
    margin: 0;
    padding: 10px 0;
  }
`

const HomepageLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface Props {
  title: string
}

/* Auto-generate
https://codeburst.io/practical-recursion-implementing-a-file-tree-view-in-react-electron-af62e7b46d26 */
const slugs = [
  '/learn-with-jason',
  '/alligator-tutorial',
  '/particles'
  // '/scroll-rig',
  // '/moksha',
  // https://threejs.org/examples/?q=sprite#webgl_points_sprites
]

export const Nav: React.FC<Props> = ({ title }) => {
  let route
  if (typeof window !== 'undefined') {
    route = window.location.pathname || ''
  }
  return (
    <Container>
      <HomepageLink to="/">{title}</HomepageLink>

      {route !== '/' && <p>{route}</p>}

      {route === '/' && slugs.map((slug, i) => <Link key={i} to={slug}>{`${slug}`}</Link>)}
    </Container>
  )
}
