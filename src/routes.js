import React from 'react';
import { Redirect } from 'react-router-dom';

import routesPaths from 'constants/routesPaths';
import CreateFormPage from 'pages/CreateFormPage';
import Forms from 'pages/Forms';
import FormPage from 'pages/FormPage';
import NotFoundPage from 'pages/NotFoundPage';

const routes = [
  {
    path: routesPaths.index,
    component: <Redirect to="/forms" />,
    exact: true
  },
  {
    path: routesPaths.createForm,
    component: <CreateFormPage />
  },
  {
    path: routesPaths.forms,
    component: <Forms />,
    exact: true
  },
  {
    path: routesPaths.form,
    component: <FormPage />
  },
  {
    component: <NotFoundPage />
  }
];

export default routes;
