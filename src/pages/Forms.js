import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import routes from 'constants/routesPaths';
import {
  getFormCategories,
  getFormsByCategory,
  getFormError,
  getFormIsFetching
} from 'selectors/formSelectors';
import { fetchFormCategories, fetchForms } from 'actions/formActions';
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
  const formCategories = useSelector(getFormCategories);
  const forms = useSelector(getFormsByCategory);
  const error = useSelector(getFormError);
  const isFetching = useSelector(getFormIsFetching);
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
        <Link to={routes.createForm}>
          + <FormattedMessage id="nav.create-form" />
        </Link>
      </Header>
      <ListWrapper>
        {error ||
          (isFetching && !formCategories.length ? (
            <Loading />
          ) : (
            formCategories.map(
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
            )
          ))}
      </ListWrapper>
    </>
  );
};

export default Forms;
