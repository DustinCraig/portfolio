import styled from 'styled-components'

export default styled.div`
  width: 256px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
      : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  margin: ${(props) => (props.divider ? '4rem 0' : '')};
  margin-bottom: 30px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 256px;
    height: 4px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 128px;
    height: 2px;
  }
`
