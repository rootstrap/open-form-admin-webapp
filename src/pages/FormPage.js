import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { loadForm, submitSection, loadSections, deleteSection } from 'actions';
import { Loading, Link, Title, Header, Separator } from 'components/common';
import { getForm, getSections, getErrorMessage } from 'selectors';
import routesPaths from 'constants/routesPaths';
import SectionsList from 'components/sections/SectionsList';
import SectionsListItem from 'components/sections/SectionsListItem';
import SectionForm from 'components/section/SectionForm';

const SectionLink = styled(Link)`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  border: 1px dashed ${({ theme }) => theme.color.primary};
  text-align: center;
  padding: 0.8em 0;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-self: center;
  margin: 1.5em 0;
  max-width: 730px;
`;

const FormPage = () => {
  const { id } = useParams();
  const form = useSelector(getForm(id));
  const { sections, isFetching } = useSelector(getSections(id));
  const dispatch = useDispatch();
  const history = useHistory();
  const errorMessage = useSelector(getErrorMessage);

  useEffect(() => {
    dispatch(loadForm(id));
    dispatch(loadSections(id));
  }, [id, dispatch]);

  if (!form) {
    return <Loading />;
  }

  return (
    <>
      <Header>
        <Title>{form.name}</Title>
      </Header>
      <Route path={routesPaths.form} exact>
        <Section>
          {errorMessage ||
            (isFetching && !sections.length ? (
              <Loading />
            ) : (
              <SectionsList>
                {sections.map((section, index) => (
                  <React.Fragment key={section.id}>
                    <SectionsListItem
                      {...section}
                      onDelete={() => dispatch(deleteSection(section))}
                      onEdit={() => history.push(`/forms/${id}/section/${section.id}`)}
                    >
                      {section.name}
                    </SectionsListItem>
                    {index + 1 !== sections.length && <Separator />}
                  </React.Fragment>
                ))}
              </SectionsList>
            ))}
          <SectionLink to={`/forms/${id}/section`}>
            + <FormattedMessage id="section.link" />
          </SectionLink>
        </Section>
      </Route>
      <Route path={routesPaths.section}>
        <SectionForm onSubmit={values => dispatch(submitSection(values, id, history))} />
      </Route>
    </>
  );
};

export default FormPage;
