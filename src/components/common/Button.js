import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.color.primary};
  box-shadow: 0px 3px 6px rgba(48, 83, 115, 0.09893);
  border-radius: 2px;
  font-weight: bold;
  color: #fff;
  padding: 0.5em 0.5em;
`;

export default Button;
