import styled from 'styled-components';

const Button = styled.button`
  box-shadow: 0px 3px 6px rgba(48, 83, 115, 0.09893);
  color: #fff;
  padding: 0.7em 0.9em;
  margin: 1em;
  border-width: 0;
  font-size: 0.9em;
  ${({ theme }) => `
    background-color: ${theme.color.primary};
    border-radius: ${theme.border.radius};
  `};
`;

export default Button;
