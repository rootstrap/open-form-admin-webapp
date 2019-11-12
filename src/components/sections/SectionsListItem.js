import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ListItem, DeleteIcon, EditIcon } from 'components/common';

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
    font-weight: 600;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
  display: flex;
`;

const Actions = styled.div`
  display: flex;
`;

const SectionListItem = ({ children, onDelete, onEdit }) => (
  <StyledListItem>
    <div>{children}</div>
    <Actions>
      <Button type="button" onClick={onEdit}>
        <EditIcon />
      </Button>
      <Button type="button" onClick={onDelete}>
        <DeleteIcon />
      </Button>
    </Actions>
  </StyledListItem>
);

SectionListItem.propTypes = {
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default SectionListItem;
