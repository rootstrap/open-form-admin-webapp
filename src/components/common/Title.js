import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 800;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.color.primary};
`;

export default Title;
