import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

export const StyledLayout = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`

export default ({ children }) => (
  <StyledLayout>
    <Header />
    <main>{children}</main>
    <Footer />
  </StyledLayout>
)
