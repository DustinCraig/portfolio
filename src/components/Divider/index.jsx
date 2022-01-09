import styled from 'styled-components'

export const HR = styled.hr`
  width: 30%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 60%;
  }
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`
