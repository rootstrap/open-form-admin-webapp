import React from 'react';

import routesPaths from 'constants/routesPaths';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import CreateFormPage from 'pages/CreateFormPage';
import Forms from 'pages/Forms';
import FormPage from 'pages/FormPage';
import NotFoundPage from 'pages/NotFoundPage';

const routes = [
  {
    path: routesPaths.index,
    component: <HomePage />,
    exact: true,
    private: true
  },
  {
    path: routesPaths.login,
    component: <LoginPage />
  },
  {
    path: routesPaths.signUp,
    component: <SignUpPage />
  },
  {
    path: routesPaths.createForm,
    component: <CreateFormPage />,
    private: true
  },
  {
    path: routesPaths.forms,
    component: <Forms />,
    private: true,
    exact: true
  },
  {
    path: routesPaths.form,
    component: <FormPage />,
    private: true
  },
  {
    component: <NotFoundPage />
  }
];

export default routes;
