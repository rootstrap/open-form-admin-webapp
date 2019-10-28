import styled from 'styled-components';

export default styled.div`
  letter-spacing: -0.3px;
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.color.primary};
`;
