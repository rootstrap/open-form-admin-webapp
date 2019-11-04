import styled from 'styled-components';

import ListItem from 'components/common/ListItem';

export default styled(ListItem)`
  color: ${({ theme }) => theme.color.primary};
`;
