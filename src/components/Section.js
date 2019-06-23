import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import { Text, theme } from '@aragon/ui';

const Section = ({ title, children }) => {
  return (
    <div css="margin: 8px 0;">
      <Text size="xlarge" css="margin-bottom: 4px;">
        {title}
      </Text>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
