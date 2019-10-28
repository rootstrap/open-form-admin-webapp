import styled from 'styled-components';

const TextInput = styled.input`
  border-width: 0;
  margin: 0.1em 0;
  padding: 0.5em 0.7em;
  height: 40px;
  box-sizing: border-box;
  ${({ theme }) => `
    background-color: ${theme.background.input};
    border-radius: ${theme.border.radius};
  `}
`;

export default TextInput;
