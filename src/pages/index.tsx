import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import IndexLayout from '../layouts'

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  p {
    margin: 0;
  }
`

export default () => (
  <IndexLayout>
    <Content>
      {/* Auto-generate
      https://codeburst.io/practical-recursion-implementing-a-file-tree-view-in-react-electron-af62e7b46d26 */}
      <Link to='/learn-with-jason'>/learn-with-jason</Link>
      <Link to='/alligator-tutorial'>/alligator-tutorial</Link>
      <p>/particles</p>
      <p>/moksha</p>
    </Content>
  </IndexLayout>
)
