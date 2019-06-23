import React from 'react';
import { Text } from '@aragon/ui';

const Page = ({ title, children }) => {
  return (
    <>
      <Text size="xlarge">{title}</Text>
      {children}
    </>
  );
};

export default Page;
