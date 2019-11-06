import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ListItem from 'components/common/ListItem';
import DeleteIcon from 'components/common/DeleteIcon';

const StyledListItem = styled(ListItem)`
  color: ${({ theme }) => theme.color.primary};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:first-child {
    width: 70%;
  }
`;

const FormsListItem = ({ children }) => (
  <StyledListItem>
    <div>{children}</div>
    <div>
      <DeleteIcon />
    </div>
  </StyledListItem>
);

FormsListItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormsListItem;
