import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ListItem, DeleteIcon, Link } from 'components/common';

const StyledListItem = styled(ListItem)`
  color: ${({ theme }) => theme.color.primary};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:first-child {
    width: 70%;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
`;

const FormsListItem = ({ children, onDelete, id }) => (
  <Link to={`/forms/${id}`}>
    <StyledListItem>
      <div>{children}</div>
      <Button type="button" onClick={onDelete}>
        <DeleteIcon />
      </Button>
    </StyledListItem>
  </Link>
);

FormsListItem.propTypes = {
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default FormsListItem;
