import styled from 'styled-components'

export const ButtonFront = styled.button`
  border: none;
  border-radius: 5px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) =>
    alt
      ? 'linear-gradient(270deg, #28313b 0%, #485461 100%)'
      : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
  transition: 0.4s ease;
  font-size: ${({ alt }) => (alt ? '20px' : '24px')};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? '20px' : '16px')};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`
