import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import routes from 'constants/routesPaths';
import { getFormCategories, getForms, getErrorMessage } from 'selectors';
import { loadFormCategories, loadForms } from 'actions';
import Header from 'components/common/Header';
import Title from 'components/common/Title';
import Subtitle from 'components/common/Subtitle';
import Link from 'components/common/Link';
import Loading from 'components/common/Loading';
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
  const { formCategories, isFetching } = useSelector(getFormCategories);
  const getFormsByCategory = useSelector(getForms);
  const errorMessage = useSelector(getErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFormCategories());
  }, [dispatch]);

  useEffect(() => {
    formCategories.forEach(({ id }) => {
      dispatch(loadForms(id));
    });
  }, [formCategories.length]);

  return (
    <>
      <Header>
        <Title>
          <FormattedMessage id="nav.forms" />
        </Title>
        <Link to={routes.createForm}>
          + <FormattedMessage id="nav.create-form" />
        </Link>
      </Header>
      <ListWrapper>
        {errorMessage ||
          (isFetching && !formCategories.length ? (
            <Loading />
          ) : (
            formCategories.map(({ id, name }) => {
              const { forms } = getFormsByCategory(id);
              return !forms.length ? null : (
                <React.Fragment key={id}>
                  <Subtitle>
                    {name} <FormattedMessage id="forms.category" />
                  </Subtitle>
                  <FormsList>
                    {forms &&
                      forms.map(form => (
                        <FormsListItem key={form.id} {...form}>
                          {form.name}
                        </FormsListItem>
                      ))}
                  </FormsList>
                </React.Fragment>
              );
            })
          ))}
      </ListWrapper>
    </>
  );
};

export default Forms;
