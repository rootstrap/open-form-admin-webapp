import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { getFormCategories, getFormsCategoriesByCategory } from 'selectors/formSelectors';
import { fetchFormCategories, fetchForms } from 'actions/formActions';
import Header from 'components/common/Header';
import Title from 'components/common/Title';
import Subtitle from 'components/common/Subtitle';
import FormsList from 'components/forms/FormsList';
import FormsListItem from 'components/forms/FormsListItem';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 80%;
  align-self: center;
  max-width: 730px;
`;

const Forms = () => {
  const formCategories = useSelector(getFormCategories);
  const forms = useSelector(getFormsCategoriesByCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFormCategories());
  }, [dispatch]);

  useEffect(() => {
    formCategories.forEach(({ id }) => {
      dispatch(fetchForms(id));
    });
  }, [formCategories, dispatch]);

  return (
    <>
      <Header>
        <Title>
          <FormattedMessage id="nav.forms" />
        </Title>
      </Header>
      <ListWrapper>
        {formCategories.map(
          ({ id, name }) =>
            forms[id] &&
            forms[id].length > 0 && (
              <React.Fragment key={id}>
                <Subtitle>
                  {name} <FormattedMessage id="forms.category" />
                </Subtitle>
                <FormsList>
                  {forms[id].map(form => (
                    <FormsListItem key={form.id}>{form.name}</FormsListItem>
                  ))}
                </FormsList>
              </React.Fragment>
            )
        )}
      </ListWrapper>
    </>
  );
};

export default Forms;
