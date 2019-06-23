import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LoadingRing, Button as AragonButton } from '@aragon/ui';

const StyledButton = styled(AragonButton)`
  display: flex;
`;

const Button = ({ loading, children, ...props }) => {
  const childrenComponent = loading ? (
    <>
      <LoadingRing /> fetching
    </>
  ) : (
    children
  );
  return <StyledButton {...props} children={childrenComponent} />;
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool
};

Button.defaultProps = {
  loading: false
};

export default Button;
