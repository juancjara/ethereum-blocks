import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import { Toast, Button } from '@aragon/ui';
import { writeText } from 'clipboard-polyfill';

import CopyIcon from './CopyIcon';

const CopyButton = ({ text }) => {
  return (
    <Toast>
      {toast => (
        <Button
          css="margin-right: 8px;"
          mode="secondary"
          size="small"
          onClick={async () => {
            await writeText(text);
            toast(`Copied!`);
          }}
        >
          <CopyIcon size={12} />
        </Button>
      )}
    </Toast>
  );
};

CopyButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CopyButton;
