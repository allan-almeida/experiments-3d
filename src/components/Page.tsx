import * as React from 'react'
import styled from '@emotion/styled'

const StyledPage = styled.div`
  margin: 0;
  padding: 0;
`

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>

export default Page
