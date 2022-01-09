import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '32px 48px 0')};
  margin: 0 auto;
  margin-bottom: ${(props) => (props.nomargin ? '0px' : '40px')};
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? '0' : '16px 16px 0')};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export { default as SectionTitle } from './SectionTitle'
export { default as SectionDivider } from './SectionDivider'
export { default as SectionText } from './SectionText'
export { default as SectionSubText } from './SectionText'
export { default as SectionLeft } from './SectionLeft'
