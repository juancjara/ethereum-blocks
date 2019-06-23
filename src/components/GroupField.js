import React from 'react';
import PropType from 'prop-types';
import { theme, Text } from '@aragon/ui';
import 'styled-components/macro';

const GroupField = ({ label, value }) => {
  return (
    <div css="display: flex; flex-direction: column; padding: 8px 0;">
      <Text color={theme.textDimmed} weight="bolder">
        {label}:
      </Text>
      <p>
        <Text size="small" css="word-wrap: break-word;">
          {value}
        </Text>
      </p>
    </div>
  );
};

GroupField.propTypes = {
  label: PropType.string.isRequired,
  value: PropType.any,
};

export default GroupField;
