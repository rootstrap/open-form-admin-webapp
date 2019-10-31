import React from 'react';
import styled from 'styled-components';
import { ErrorMessage as FormikErrorMessage } from 'formik';
import PropTypes from 'prop-types';

const StyledErrorMessage = styled(FormikErrorMessage)`
  color: ${({ theme }) => theme.color.warning};
`;

const ErrorMessage = props => <StyledErrorMessage {...props} />;

ErrorMessage.propTypes = {
  component: PropTypes.string
};

ErrorMessage.defaultProps = {
  component: 'span'
};

export default ErrorMessage;
