import styled from 'styled-components'

export const ButtonBack = styled.button`
  width: ${({ size }) =>
    size === 'small'
      ? '100px'
      : size === 'medium'
      ? '52px'
      : size === 'large'
      ? '250px'
      : '150px'};
  height: ${({ size }) =>
    size === 'small'
      ? '32px'
      : size === 'medium'
      ? '250px'
      : size === 'large'
      ? '262px'
      : '52px'};
  border-color: #9cc9e3;
  font-size: ${({ alt }) => (alt ? '20px' : '24px')};
  font-weight: 400;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form ? '0' : '0 0 80px')};
  color: #fff;
  background: ${({ alt }) =>
    alt
      ? 'linear-gradient(270deg, #2a5470 0%, #4c4177 100%)'
      : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100px;
    height: 48px;
    font-size: ${({ alt }) => (alt ? '20px' : '16px')};
    margin-bottom: ${({ alt }) => (alt ? '0' : '64px')};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100px;
    height: 48px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => (alt ? '0' : '32px')};
  }
`
