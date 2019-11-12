import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';

import { loadForm, submitSection, loadSections, deleteSection } from 'actions';
import { Loading, Link, Form, Button, Title, Header, Separator } from 'components/common';
import TextInput from 'components/formik/TextInput';
import { getForm, getSections, getErrorMessage } from 'selectors';
import routesPaths from 'constants/routesPaths';
import SectionsList from 'components/sections/SectionsList';
import SectionsListItem from 'components/sections/SectionsListItem';

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

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};

  input {
    color: ${({ theme }) => theme.color.primary};
    font-size: 1.5em;
    font-weight: bold;
  }

  & > div {
    flex: 1;
  }

  & > button {
    padding-right: 2em;
    padding-left: 2em;
  }
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
  }, [id]);

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
        <Formik
          initialValues={{ name: '', description: 'desc', order: 1, longDescription: 'long desc' }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required(<FormattedMessage id="section.name.empty" />)
          })}
          onSubmit={values => dispatch(submitSection(values, id, history))}
        >
          {({ isSubmitting }) => (
            <Form>
              <SectionTitle>
                <TextInput name="name" />
                <Button type="submit" disabled={isSubmitting}>
                  <FormattedMessage id="section.saveChanges" />
                </Button>
              </SectionTitle>
            </Form>
          )}
        </Formik>
      </Route>
    </>
  );
};

export default FormPage;
